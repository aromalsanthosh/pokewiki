import React from 'react'
import './PokeCard.css'

interface PokeCardProps {
    spriteUrl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;
}

function PokeCard({spriteUrl, name, onPokemonClick}: PokeCardProps) {
    return (
        <div onClick={(e)=> {onPokemonClick(name)}} className="pokecard">
            {/* Add Image Here */}
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemon" />
            <p>{name}</p>
        </div>
    )
}

export default PokeCard
