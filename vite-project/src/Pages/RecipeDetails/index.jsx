import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import styles from "./RecipeDetails.module.css";

export function RecipeDetails({ editRecipe }) {

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

    // Configurating input
    const [name, setName] = useState(recipeDetails.name);
    const [description, setDescription] = useState(recipe.description);
    const [type, setType] = useState(recipe.type);
    const [image, setImage] = useState(recipe.image);
    const [preparation, setPreparation] = useState(recipe.preparation);

    // Going back /home
    const navigate = useNavigate();

    const backHome = () => {
        navigate("/");
    }

    function editRecipeHandler() {
        const updatedRecipe = {
            name: name,
            description: description,
            type: type,
            image: image,
            preparation: preparation
        };

        editRecipe(updatedRecipe, id);
        backHome();
    }
    
    // return (
    //     <div className={`${styles.divGameDetails} div-game-details`} >
    //         <Button className={"home-button"} label={"< Home"} onClick={backHome} />
    //         <span className={styles.image}> {recipe.image} </span>
    //         <h2 className="title is-3"> {recipe.name} </h2>
    //         <span> {recipe.description} </span>
    //         <p> {recipe.preparation} </p>
    //         <span> {recipe.type} </span>
            
    //     </div>
    // );

    return (
        <div className={`${styles.divGameDetails} div-game-details`} >
            <Button className={styles.homeButton} label={"< Home"} onClick={backHome} />
            <span className={styles.image}> {recipe.image} </span>
            {/* Name */}
            <div className={`${styles.inputContent} box`}>
                    <label className={styles.inputTitle}> Name </label>
                    <input
                        className="input"
                        type="text"
                        defaultValue={recipe.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className={`${styles.inputContent} box`}>
                    <label className={styles.inputTitle}> Description </label>
                    <input
                        className="input"
                        type="text"
                        defaultValue={recipe.description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Type */}
                <div className={`${styles.inputContent} box`}>
                    <label className={styles.inputTitle}> Type </label>
                    <input
                        className="input"
                        type="text"
                        defaultValue={recipe.type}
                        onChange={(e) => setType(e.target.value)}
                        />
                </div>

                {/* Image */}
                <div className={`${styles.inputContent} box`}>
                    <label className={styles.inputTitle}> Image </label>
                    <input
                        className="input"
                        type="text"
                        defaultValue={recipe.image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                {/* Preparation */}
                <div className={`${styles.inputContent} box`}>
                    <label className={styles.inputTitle}> Preparation </label>
                    <input
                        className="input"
                        type="text"
                        defaultValue={recipe.preparation}
                        onChange={(e) => setPreparation(e.target.value)}
                    />
                </div>

                <Button onClick={editRecipeHandler} label={"Edit"} />
            
        </div>
    );
}