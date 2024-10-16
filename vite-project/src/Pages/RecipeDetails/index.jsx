import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import styles from "./RecipeDetails.module.css";

export function RecipeDetails() {

    // Getting recipe details
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState([{
        name: "test",
        description: "description of the test",
        type: "comida",
        image: "🍕",
        preparation: "example preparation"
    }]);

    async function fetchRecipe() {
        try {
        const url = `http://localhost:3000/dishes/${id}`
        const response = await fetch(url, { method: "GET" });
        const data = await response.json(); // extract JSON from response
        setRecipeDetails(data);
        console.log("hola", data);
        } catch (error) {
        console.log("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    const recipe = recipeDetails;

    // Going back /home
    const navigate = useNavigate();

    const backHome = () => {
        navigate("/");
    }
    
    return (
        <div className={`${styles.divGameDetails} div-game-details`} >
            <Button className={"home-button"} label={"< Home"} onClick={backHome} />
            <span> {recipe.image} </span>
            <h2 className="title is-3"> {recipe.name} </h2>
            <span> {recipe.description} </span>
            <p> {recipe.preparation} </p>
            <span> {recipe.type} </span>
            
        </div>
    );
}