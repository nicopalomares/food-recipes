import SelectCreates from "./selects/SelectCreates";
import SelectAlph from "./selects/SelectAlph";
import SelectScore from "./selects/SelectScore";
import SelectDiet from "./selects/SelectDiet";
import { filterRecipesByCreated,getRecipes,filterRecipesByDiet,filterRecipesByName,filterRecipesByScore } from "../actions/actions";
import { useDispatch} from "react-redux";
import style from "./Filtrado.module.css";

import React from "react";

export default function Filtrado({setCurrentPage,setOrden}) {
  const dispatch = useDispatch();

  function handleFilterDiet(e) {
    dispatch(filterRecipesByDiet(e.target.value));
    setCurrentPage(1);
  }
  function handleFilterCreated(e) {
    dispatch(filterRecipesByCreated(e.target.value));
    setCurrentPage(1);
  }
  function handleFilterByName(e) {
    e.preventDefault();
    dispatch(filterRecipesByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado${e.target.value}`);
  }
  function handleFilterByScore(e) {
    dispatch(filterRecipesByScore(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado${e.target.value}`);
  }

  return (
    <div className={style.contenedor}>
      <SelectDiet handleFilterDiet={handleFilterDiet}  className={style.diet}/>
      <SelectCreates handleFilterCreated={handleFilterCreated}  className={style.create}/>
      <SelectScore handleFilterByScore={handleFilterByScore} className={style.score} />
      <SelectAlph handleFilterByName={handleFilterByName} />
    </div>
  );
}
