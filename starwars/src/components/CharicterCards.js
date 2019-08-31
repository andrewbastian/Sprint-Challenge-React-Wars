import React from "react";

export default function CharicterCards(props) {

return (

    <div className= "Card">

    <CharicterCards>

        <p>Name:{props.name}</p>
        <p>{props.birth_year}</p>
        <p>{props.hair_color}</p>
        <p>{props.height}</p>
        <p>{props.eye_color}</p>
        <p>{props.gender}</p>


    </CharicterCards>

    </div>

    )
}
