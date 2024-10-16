import React from "react";

export function Button({ label, onClick }) {

        return (
                <button className={` button `} onClick={onClick} > { label } </button>

            );
}