import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema'
import PokeCard from '../PokeCard/PokeCard'
import './PokeList.css'

interface PokeListProps {
    searchedPokemons: PokemonSchema[];
}

function PokeList({ searchedPokemons } : PokeListProps) {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon)=>{
                    return (
                        pokemon.name && (
                        <PokeCard 
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl={pokemon.sprites?.normal}
                        />
                        )
                    )
                })
            }

        </div>
    )
}

export default PokeList
