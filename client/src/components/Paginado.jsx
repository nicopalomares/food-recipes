import React from 'react'
import styles from "./Paginado.module.css";

export default function Paginado({recipesPerPage,allRecipes,paginado}) {

    const pageNumbers=[]

    for (let i = 1; i < Math.ceil(allRecipes/recipesPerPage)+1; i++) {
        pageNumbers.push(i)
    }

  return (
    <nav className={styles.contenedor} >
        <div className={styles.paginado}>
            {pageNumbers && pageNumbers.map(number => {
                return (
                <div className={styles.numeros} key={number} onClick={() => paginado(number)}>{number}</div>
                )
            })}
        </div>
    </nav>
  )
}
