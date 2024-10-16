import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import styles from "./RecipeCard.module.css";

export function RecipeCard({ id, name, type, image, deleteFunction }) {

    const navigate = useNavigate();

    const openDetails = ( id ) => {
        navigate(`/dishes/${id}`);
    }
    return (
        <div className={`${styles.card} card`} >
            <div className={`${styles.card} card-content`}>
                <span> {image} </span>
                <p className={`${styles.header} header subtitle`} > Recipe: {name} </p>
                <p> Food: {type} </p>
                <button className={`${styles.cardButton} button`} label={"Details"} onClick={() => openDetails(id)}> Details </button>
                <button className={`${styles.cardButton} button`} label={"Delete"} onClick={() => deleteFunction(id)}> Delete </button>
            </div>
        </div>
    );
}