import axios from "axios";
export function getRecipes (){
    try{
    return async function(dispatch){
        const json=await axios.get("/recipes");
        return dispatch({
            type:"GET_RECIPES",
            payload:json.data
        })
     }
    }catch(err){
        console.log(err)
      }
}

export function getNameRecipes (name){
  try{
    return async function(dispatch){
        const json=await axios.get(`/recipes?name=${name}`);
        console.log(json.data)
        return dispatch({
            type:"GET_RECIPES_NAME",
            payload:json.data
        })

    }
}catch(err){
    console.log(err)
  }
}

export function getTypeRecipes (){
    try{
      return async function(dispatch){
          const json=await axios.get(`/types`);
          return dispatch({
              type:"GET_TYPE_RECIPES",
              payload:json.data
          })
  
      }
  }catch(err){
      console.log(err)
    }
}



export function getRecipesById (id){
    try{
      return async function(dispatch){
          console.log(id)
          const json=await axios.get(`/recipes/${id}`);
          console.log(json.data)
          return dispatch({
              type:"GET_RECIPES_BY_ID",
              payload:json.data
          })
  
      }
  }catch(err){
      console.log(err)
    }
}


export function postRecipes (info){
    try{
    return async function(dispatch){
        const json=await axios.post("/recipe",info);
        
        return dispatch({
            type:"POST_RECIPES",
            payload:json
        })

     } 
   }catch(err) {
     console.log(err)
 }
}


export function filterRecipesByDiet(payload){
    return ({
        type:"FILTER_BY_DIET",
        payload
    })
}
export function filterRecipesByHealth(payload){
    return ({
        type:"FILTER_BY_HEALTH",
        payload
    })
}
export function filterRecipesByCreated(payload){
   return ({
    type:"FILTER_BY_CREATED",
    payload
})
}

export function filterRecipesByName(payload){
    return ({
     type:"FILTER_BY_NAME",
     payload
 })
 }

export function filterRecipesByScore(payload){
    return ({
     type:"FILTER_BY_SCORE",
     payload
 })
 }