const { Router } = require('express');
const { Recipe, Diet } = require('../db.js');
const axios= require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);  https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true

const getApiInfo = async () => {
    const apiUrl=await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=3b37e9647af74cbea0e5c7953103e4ee&number=100&addRecipeInformation=true")
    const apiInfo=await apiUrl.data.results.map(el=> {
        return {
            id:el.id,
            title:el.title,
            image:el.image,
            diets:el.diets,
            steps:el.analyzedInstructions[0]? el.analyzedInstructions[0].steps.map(e=> e.step):"No steps",
            dishTypes:el.dishTypes,
            summary:el.summary,
            score:el.spoonacularScore,
            healthScore:el.healthScore,
        }
    })
    return apiInfo; 
}



    

const getDbInfo = async () => {
    const dbinfo=await Recipe.findAll({
        include:{
            model:Diet,
            attributes:["name"],
            through:{attributes:[]}
        }
    })
    return dbinfo
}

const getAllInfo = async () => {
    const apiInfo= await getApiInfo();
    const dbinfo = await getDbInfo();
    const info = apiInfo.concat(dbinfo);
    return info;
}


// const Info = async () => {
//     const info= await getAllInfo()
//     console.log(info.slice());
// }
// Info()

router.get('/recipes', async (req,res) =>{
    const {name} = req.query;
    const infoTotal= await getAllInfo();

     if(name) {
         var infofiltr=[];
         infoTotal.forEach(e => {
           if(e.title.includes(name)){infofiltr.push(e)}
        })

        if(infofiltr.length>0){
            res.json(infofiltr);
        }else{
            res.send("El nombre no pertenece a ninguna receta");
        }
    }else{
        res.json(infoTotal);
    }
})

router.get('/recipes/:idReceta', async (req,res,next) =>{
    const {idReceta} = req.params;
    const infoTotal= await getAllInfo()
    var ID = Number(idReceta)
    
    try{
       infoTotal.forEach(e=> {
           if(e.id===ID){
               res.json({
                id:e.id,
                title:e.title,
                imagen:e.image,
                diets:e.diets,
                pasos:e.steps,
                dishTypes:e.dishTypes,
                summary:e.summary,
                score:e.score,
                healthScore:e.healthScore,
               })
           }
       })

     }catch(err){
        next(err)
    }
   res.json(infoTotal)
})

router.get('/types', async (req,res,next) =>{
    const infoTotal= await getApiInfo();
    try{
       var arr=[]
       infoTotal.forEach(e=> {
         e.diets.forEach(i=>{
             arr.push(i)
         })
      })
    const filteredArray = arr.filter(function(ele , pos){
        return arr.indexOf(ele) == pos;
    }) 
    //aca comprobamos si hay algun dato cargado en labase de datos
    filteredArray.forEach(el=>{
        Diet.findOrCreate({
            where :{
                name:el
            }
        })
    })
        // const allDiets= await Diet.findAll()
       res.json(filteredArray)
     }catch(err){
        next(err)
    }
})


router.post('/recipe', async (req,res,next) =>{
    let {
          title,
          summary ,
          score,
          healthScore,
          steps,
          diet 
    } = req.body

    let recipeCreated= await Recipe.create({
        title,
        summary ,
        score,
        healthScore,
        steps
    })

    let dietDb=await Diet.findAll({
        where:{
            name:diet
        }
    })
    await recipeCreated.addDiet(dietDb)
    res.send("Receta creada exitosamente")
})



module.exports = router;



