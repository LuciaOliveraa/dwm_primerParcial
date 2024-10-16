import React from "react";

export function Button({ label, onClick }) {

        return (<div>
                <button className={` button `} onClick={onClick} > { label } </button>
        </div>
            );
}