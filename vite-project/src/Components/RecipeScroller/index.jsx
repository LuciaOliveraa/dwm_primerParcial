import React from "react";
import { RecipeCard } from "../RecipeCard";
import styles from "./RecipeScroller.module.css"

export function RecipeScroller({ recipes, deleteFunction }) {

    return (
        <div>
            <ul className={`${styles.recipeScroll}`}>
                {recipes?.map((recipe) => (
                    <li key={recipe.id}>
                        <RecipeCard id={recipe.id}
                            name={recipe.name} 
                            description={recipe.description}
                            type={recipe.type}
                            image={recipe.image}
                            preparation={recipe.preparation}
                            deleteFunction={deleteFunction}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}