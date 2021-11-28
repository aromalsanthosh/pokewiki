import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema';
import './PokeSearchResults.css'

interface PokeSearchResultsProps {
    selectedPokemon : PokemonSchema | undefined;
}


const PokeSearchResults = ( { selectedPokemon } : PokeSearchResultsProps)=> {

    const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {};

    return (
        <div className="poke-result-card">
            {
                selectedPokemon 
                ?(
                    <div>
                        {/* Add image Here */}
                        <img
                        className="pokemon-animated-sprite"
                        alt="pokemon"
                        src={sprites?.animated || sprites?.normal}
                        />
                        <p>Name : {name}</p>
                        <p>ID : {id}</p>
                        <p>Height : {height}</p>
                        <p>Weight : {weight}</p>
                        <p>Base Exp : {base_experience}</p>
                    </div>
                )
                :
                (
                    <h2>Welcome To PokeWiki</h2>
                )
            }
        </div>
    )
}

export default PokeSearchResults
