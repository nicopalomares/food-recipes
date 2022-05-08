const initialState={
    recipes:[],
    allRecipes:[],
    typeRecipes:[],
    recipe:[]
}

function rootReducer(state = initialState, action) {
    
    switch (action.type){
        case "GET_RECIPES":
         return {
             ...state,
             recipes: action.payload,
             allRecipes:action.payload
         }
        case "GET_RECIPES_NAME":
          return {
                ...state ,
                recipes:action.payload
            }
        case "GET_RECIPES_BY_ID":
            // console.log(action.payload)
         return {
            ...state,
            recipe: action.payload,
        }

        case "POST_RECIPES":
         return {
                ...state
            }
        case "GET_TYPE_RECIPES":
           return {
            ...state,
            typeRecipes: action.payload
        }
        case "FILTER_BY_DIET":
           var allRecipes= state.allRecipes;
           var recipesFilt = action.payload === "All" ? allRecipes: allRecipes.filter(e=>e.diets.includes(action.payload)
            ) ;
            return {
                ...state,
                recipes:recipesFilt
            }
        case "FILTER_BY_HEALTH":
            let sortedHealth = action.payload ==="lower scoreHealth" ? 
                state.recipes.sort(function(a,b){
                    if(a.healthScore > b.healthScore){
                        return 1
                    }
                     if(b.healthScore > a.healthScore){
                        return -1;
                    }
                        return 0
                }) :
                state.recipes.sort(function (a,b){
                if(a.healthScore > b.healthScore){
                    return -1
                }
                if(b.healthScore > a .healthScore){
                    return 1
                }
                    return 0
                })
                console.log(sortedHealth)
                return {
                    ...state,
                    recipes: sortedHealth
                }
        case "FILTER_BY_CREATED":
           if(action.payload === "creates"){
            var recipesFilt1 = state.allRecipes.filter(e=> e.createdInDb)
            return {
                ...state,
                recipes:recipesFilt1
            }
           }
           if(action.payload === "existent"){
            var recipesFilt2 = state.allRecipes.filter(n=>!n.createdInDb);
            return {
                ...state,
                recipes:recipesFilt2
            }
           }else{
               var recipesFilt3 = state.allRecipes
               return {
                ...state,
                recipes:recipesFilt3
            }
           }
        case "FILTER_BY_NAME":
           let sortedArr = action.payload ==="a-z" ? 
                state.recipes.sort(function(a,b){
                    if(a.title > b.title){
                        return 1
                    }
                    if(b.title > a.title){
                        return -1;
                    }
                    return 0
                }) :
                state.recipes.sort(function (a,b){
                    if(a.title > b.title){
                        return -1
                    }
                    if(b.title > a .title){
                        return 1
                    }
                    return 0
                })
              return {
                  ...state,
                  recipes: sortedArr
              }
        case "FILTER_BY_SCORE":
            let sortedArr2 = action.payload ==="lower score" ? 
                state.recipes.sort(function(a,b){
                    if(a.score > b.score){
                        return 1
                    }
                     if(b.score > a.score){
                        return -1;
                    }
                        return 0
                }) :
                state.recipes.sort(function (a,b){
                if(a.score > b.score){
                    return -1
                }
                if(b.score > a .score){
                    return 1
                }
                    return 0
                })
                return {
                    ...state,
                    recipes: sortedArr2
                }


        default:
         return state
    }
  }
  
  export default rootReducer;