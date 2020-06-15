
import React from 'react';
import '../styles/Pokemon.css'

const Pokemon = (props) => {
    const { pokemon } = props;
    return (
        <div className="pokemon">
            <img src={pokemon.image} />
            <h3>{pokemon.name}</h3>
        </div >
    )
};

export default Pokemon;