import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

import React from 'react'

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <Link to="/create" className={styles.link}>Create Your Own Recipe!</Link>
      <h1  className={styles.titulo}>Api Food</h1>
      <SearchBar />
    </div>
  )
}
