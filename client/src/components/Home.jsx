import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes} from "../actions/actions";
import Card from "./card/Card";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Paginado from "./Paginado";
import styles from "./Home.module.css";
import Filtrado from "./Filtrado";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = Array.isArray(allRecipes)
    ? allRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes)
    : allRecipes;

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function handleOnClick(){
    dispatch(getRecipes())
  }

  return (
    <div className={styles.todo}>
      {allRecipes.length > 0 ? (
        <div className={styles.contenedor}>
          
          <NavBar />

          <Filtrado setCurrentPage={setCurrentPage} setOrden={setOrden}/>
          <button className={styles.boton} onClick={handleOnClick}>Recharge</button>
              {console.log(allRecipes)}
              {Array.isArray(allRecipes) ? (
                <div className={styles.cards}>
                  {currentRecipes &&
                    currentRecipes.map((e) => {
                      return (
                        <Link to={`/home/${e.id}`}>
                          <Card
                            key={e.id}
                            title={e.title}
                            image={e.image ? e.image : "https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-600w-1737334631.jpg"}
                            diets={
                              e.diets.length > 0
                                ? e.diets[0].name
                                  ? e.diets.map((e) => [e.name])
                                  : e.diets
                                : ["No diet"]
                            }
                          />
                        </Link>
                      );
                    })}
                </div>
              ) : (
                <h1 className={styles.noRecipes}>No Recipes</h1>
              )}
              <Paginado
              recipesPerPage={recipesPerPage}
              allRecipes={allRecipes.length}
              paginado={paginado}
              />  
             

        </div>
      ) : (
        <div className={styles.gif}>
          <img src="http://www.gifde.com/js_pics_aux/descarga.php?descarga=si&c=gif/otros/decoracion/cargando-loading/&f=cargando-loading-046.gif"></img>
        </div>
      )}
    </div>
  );
}
