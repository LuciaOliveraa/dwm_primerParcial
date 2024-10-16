import React, {useState} from "react";
import { Button } from "../Button";

export function ModalCreateRecipe({ isActive, onClose, postRecipe }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [preparation, setPreparation] = useState("");

    // Creating Recipe
    function createRecipe() {
        const newRecipe = { name: name,
                    description: description,
                    type: type,
                    image: image,
                    preparation: preparation
                };
        postRecipe(newRecipe);

        cleanCloseModal();
    }

    function cleanCloseModal() {
        setName("");
        setDescription("");
        setType("");
        setImage("");
        setPreparation("");

        onClose();
    }

    return (
        <>
        { isActive && 
        <div className={`modal ${isActive ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClose}> </div>
            <div className="modal-content box">
                <h3> Complete the data for your recipe: </h3>

                {/* Name */}
                <div className="box">
                    <label> Name </label>
                    <input
                        className="input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="box">
                    <label> Description </label>
                    <input
                        className="input"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Type */}
                <div className="box">
                    <label> Type </label>
                    <input
                        className="input"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        />
                </div>

                {/* Image */}
                <div className="box">
                    <label> Image </label>
                    <input
                        className="input"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                {/* Preparation */}
                <div className="box">
                    <label> Preparation </label>
                    <input
                        className="input"
                        type="text"
                        value={preparation}
                        onChange={(e) => setPreparation(e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div className="buttons-container">
                    <Button onClick={() => createRecipe()} label={"Acept"}></Button>
                    <Button onClick={cleanCloseModal} label={"Cancel"} ></Button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div> }
        </>
    )
}