import React from "react";
import style from "./SelectAlph.module.css"

export default function SelectAlph({handleFilterByName}) {
  return (
    <div className={style.conten}>
      <select onChange={(e) => {handleFilterByName(e)}}>
        <option hidden value="Select">Alfabet</option>
        <option value={"a-z"}>a-z</option>
        <option value={"z-a"}>z-a</option>
      </select>
      <i></i>
    </div>
  );
}
