import React from "react";
import styles from "./Card.module.css"

//text transform capitalize

export default function Card({title,image,diets}) {

    

  return (
      <div className={styles.card_content} >
        <div className={styles.card_img}>
          <img src={image} alt="sin imagen" width="250" height="250"/>
        </div>
        <div className={styles.card_text}>
            <h4>{title}</h4>
            <div className={styles.diets}>
              <h3 className={styles.dietstit}>Diets:</h3>
                {diets.map(element => {
                  return <li>{element}</li>
                })
                }
        </div>
       </div>
    </div>
  )
}