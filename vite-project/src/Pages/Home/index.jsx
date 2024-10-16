import { React, useState, useEffect } from "react";
import { Button } from "../../Components/Button";
import { ModalCreateRecipe } from "../../Components/ModalCreateRecipe"
import { RecipeScroller } from "../../Components/RecipeScroller";
import styles from "./Home.module.css";
import { SearchBar } from "../../Components/SearchBar";

export function Home({ recipes, postRecipe, deleteRecipe }) {

    // Managing create game modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Managing filtered recipes
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);


    return (
        <div className={`${styles.home}`}>
            {/* Header */}
            <h1 className="title is-1"> Recipe </h1>
            <div className={`${styles.buttonDiv}`}>
                <SearchBar className={styles.searchBar} data={recipes} setFilteredRecipes={setFilteredRecipes}></SearchBar>
                <Button label={"Add recipe"} onClick={openModal} />
            </div>

            <RecipeScroller recipes={filteredRecipes} deleteFunction={deleteRecipe} ></RecipeScroller>

            {/* Modal add recipe */}
            <ModalCreateRecipe isActive={isModalOpen} onClose={closeModal} postRecipe={postRecipe} > </ModalCreateRecipe>
        </div>
    );
}