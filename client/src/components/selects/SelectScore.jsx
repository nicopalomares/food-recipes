import React from "react";
import style from "./SelectScore.module.css";

export default function SelectScore({handleFilterByScore}) {
  return (
    <div className={style.conten}>
      <select onChange={(e) => { handleFilterByScore(e);}}>
        <option hidden value="Select">Score</option>
        <option value={"highest score"}>highest score</option>
        <option value={"lower score"}>lower score</option>
      </select>
    </div>
  );
}
