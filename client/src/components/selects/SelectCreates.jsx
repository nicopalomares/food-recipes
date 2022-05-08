import React from "react";
import style from "./SelectCreates.module.css";

export default function SelectCreates({handleFilterCreated}) {
  return (
    <div className={style.conten}>
      <select onClick={(e) => {handleFilterCreated(e)}}>
        <option hidden value="Select">Create or Existent</option>

        <option value={"All"}>All</option>

        <option value={"creates"}>Creates</option>

        <option value={"existent"}>existing</option>
      </select>
    </div>
  );
}
