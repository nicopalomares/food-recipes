import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById } from '../actions/actions';
import styles from "./Details.module.css";
import { Link } from 'react-router-dom';

export default function Details() {
    const {id} = useParams();

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipesById(id))
    },[dispatch])

    const recipe = useSelector((state)=>state.recipe)
    
    // console.log(recipe)
  return (

    <div>
        {recipe.id==id?
         <div className={styles.contenedor}>
            <div className={styles.details}>
                <div className={styles.primero}>
                    <h1 className={styles.title}>{recipe.title}</h1>
                    <Link to={"/home"}  ><button className={styles.boton}>home</button></Link>
                </div>
                <div className={styles.first_box}>
                        <img className={styles.img} src={recipe.imagen? recipe.imagen : "Sin Imagen"}/>
                    <div className={styles.second_box}>            
                        <h5 className={styles.saludable}>Health Score: {recipe.healthScore}</h5>
                        <h5 className={styles.puntuacion}>Score: {recipe.score}</h5>
                        <h5 className={styles.plato}>Dish Type: {recipe.dishTypes ? recipe.dishTypes.map(e=><a>{"/"+ e }</a>) : "No Dish Type"}</h5>
                        <div className={styles.diets}>
                            <h4>Diets:</h4>
                            {recipe.diets.length>0 ? (recipe.diets[0].name ? recipe.diets.map(e=><li>{e.name}</li>) : recipe.diets.map(e=><li>{e}</li>)) : ["No diet"] }
                        </div>
                    </div>
                </div> 
                    <h5 className={styles.title_summary} >Description:</h5>
                    <div className={styles.resumen}>
                        <h3 className={styles.summary}> <div dangerouslySetInnerHTML={{ __html:recipe.summary }} /></h3>
                    </div>
                    <h5 className={styles.title_steps} >Steps:</h5>
                <div className={styles.steps}>
                    {Array.isArray(recipe.pasos)?
                     <div className={styles.pasos}>
                       {recipe.pasos.map(e=><li>{e}</li>)}
                     </div>:<h3>No Steps</h3>
                  }
                </div>
            </div>
        </div>:
        <div className={styles.gif}>
            <img src="https://c.tenor.com/iduSCBmpjDoAAAAC/cocina-cocinando.gif"></img>
        </div>
        }
    </div>
    )
}
