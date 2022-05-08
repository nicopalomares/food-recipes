import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getNameRecipes } from "../actions/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
   const dispatch = useDispatch();
   const [name,setName]= useState("");

   function handleInputChange(e){
       e.preventDefault()
       setName(e.target.value)
   }

   function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

   function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameRecipes(capitalizarPrimeraLetra(name)))
    setName("")
   }

  return (
    <div className={styles.contenedor}>
        <input className={styles.input} type={"text"} placeholder="Type..." value={name}  onChange={(e)=>{handleInputChange(e)}}/>
        <button className={styles.boton} type="submit" onClick={(e)=>{handleSubmit(e)}} >Search</button>
    </div>
  )
}
