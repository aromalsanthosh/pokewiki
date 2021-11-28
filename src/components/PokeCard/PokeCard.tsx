import React from 'react'
import './PokeCard.css'

interface PokeCardProps {
    spriteUrl?: string;
    name: string;
}

function PokeCard({spriteUrl, name}: PokeCardProps) {
    return (
        <div className="pokecard">
            {/* Add Image Here */}
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemon" />
            <p>{name}</p>
        </div>
    )
}

export default PokeCard
