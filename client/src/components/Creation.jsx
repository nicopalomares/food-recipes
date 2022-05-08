import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {getTypeRecipes,postRecipes} from "../actions/actions";
import { Link } from "react-router-dom";
import Range from "./range/Range";
import styles from "./Creation.module.css";

export function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "title is required!";
    }
    if (!input.summary) {
      errors.summary = "Summary is required!";
    }
  
    return errors;
  }


export default function Creation() {

    const dispatch = useDispatch()
    const diets = useSelector(state => state.typeRecipes)
     useEffect(()=> {
        dispatch(getTypeRecipes())
    },[dispatch])

    const [input,setInput] = useState({
        title:"",
        summary:"",
        score:"",
        healthScore:"",
        step: "",
        steps:[],
        diet:[]
    })

    const [errors, setErrors] = useState({});
    

    function handleOnClick (e) {
        e.preventDefault()
        input.steps.push(input.step)
        setInput({...input,steps:[...input.steps]})
        setInput({...input,step: ""})
    }

    function handleOnChange(e){

        setErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
          );

        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    function handleSelect (e){
        setInput({
            ...input,
            diet:[...input.diet,e.target.value]
        })
    }
    function handleDelete() {
        setInput({
            ...input,
            diet:[]
        })
    }
    function handleSubmit(e){

        if(errors.title || errors.summary){
            alert("Debe ingresar el titulo y el resumen como minimo")
        }else{
        e.preventDefault()
        dispatch(postRecipes(input))
        console.log(input)
        alert("receta creada correctamente")
        setInput({
            title:"",
            summary:"",
            score:"",
            healthScore:"",
            step: "",
            steps:[],
            diet:[]
        })
    }
    }
  return (
      
    <div className={styles.contein}>
        <div className={styles.conten_formu}>  
         <Link to={"/home"}><button className={styles.boton_home}>Home</button></Link>
         <h1>Create your own recipe!</h1>
      
        <form className={styles.formulario}>
            <div className={styles.title}>
                <h3>Title:</h3>
                <input
                type="text"
                value={input.title}
                name="title"
                onChange={(e)=>handleOnChange(e)}/>
                {errors.title && <p className={styles.danger}>{errors.title}</p>}
            </div>
            <div className={styles.summary}>
                <h3>Summary:</h3>
                <textarea
                type="text"
                value={input.summary}
                name="summary"
                onChange={(e)=>handleOnChange(e)}/>
                {errors.summary && <p className={styles.danger}>{errors.summary}</p>}
            </div>           
           
        </form>

    <div className={styles.outForm}>

        <div>
            <form onSubmit={(e)=>handleOnClick(e)} className={styles.steps}>
                <h3>Steps:</h3>
                <input
                  type="text"
                  value={input.step}
                  name="step"
                  onChange={(e)=>handleOnChange(e)}
                />
                <button className={styles.boton_agregar}>Agregar paso</button>
            </form>
            <ul className={styles.list}>
                    {input.steps.map(el => 
                        <li> {el}</li>)}
            </ul>
        </div>

        <Range  handleOnChange={handleOnChange} input_score={input.score} input_health ={input.healthScore}/>

        <div className={styles.diets}>
                <h3>Diets:</h3>
                <select onChange={(e)=>handleSelect(e)} >
                    { diets.map((el)=>(
                    <option value={el}>{el}</option>
                     ))}
                </select>
                <ul>{input.diet.map(el => el + "/ ")}</ul>
                <button className={styles.boton_borrar} onClick={handleDelete}> borrar dietas</button>
        </div>

        <button className={styles.botonCrear} onClick={handleSubmit}>Create Recipe</button>

       </div> 
      </div>      
    </div>
  )
}
