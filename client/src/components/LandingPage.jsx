import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"
export default function LandinPage(){
    return (
        <div className={styles.LandinPage}>
            <div className={styles.contein}>
              <h1 className={styles.title}>App Food!</h1>
              <Link to="/home" className={styles.boton}>Let's Start!</Link>
                      <ul className={styles.text}>
                          <p>Find the best recipes in the world!</p>
                          <p>Filter your recipes based on your diet</p>
                          <p>Learn to cook!</p>
                      </ul>
            </div>
        </div>
    )
}