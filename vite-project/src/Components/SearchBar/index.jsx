import React from "react";
import { useState, useEffect } from "react";

export function SearchBar({ data, setFilteredRecipes }) {

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue === "") {
            setFilteredRecipes(data);
        } else {
            let filtredData = data.filter((recipe) =>
                recipe.type.toLowerCase().includes(searchValue.toLowerCase()));
            setFilteredRecipes(filtredData);
            console.log(filtredData);
        }
    }, [searchValue, data]);

    return (
        <div className="control">
            <input className="input" type="text" placeholder="Search here..." onChange={(e) => {setSearchValue(e.target.value)}}></input>
        </div>
    );
}