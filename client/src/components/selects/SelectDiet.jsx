import React from "react";
import style from "./SelectDiet.module.css"

export default function SelectDiet({ handleFilterDiet }) {
  return (
    <div className={style.conten}>
      <select onChange={(e) => {handleFilterDiet(e);}}>
        <option hidden value="Select">Diets</option>
        <option value={"All"}>All</option>
        <option value={"gluten free"}>gluten free</option>
        <option value={"dairy free"}>dairy free</option>
        <option value={"lacto ovo vegetarian"}>lacto ovo vegetarian</option>
        <option value={"vegan"}>vegan</option>
        <option value={"pescatarian"}>pescatarian</option>
        <option value={"primal"}>primal</option>
        <option value={"fodmap friendly"}>fodmap friendly</option>
        <option value={"paleolithic"}>paleolithic</option>
        <option value={"whole 30"}>whole 30</option>
      </select>
      <i></i>
    </div>
  );
}
