import React from 'react'
import './PokeSearchResults.css'

const PokeSearchResults = ()=> {

    const selectedPokemon = false;

    return (
        <div className="poke-result-card">
            {
                selectedPokemon 
                ?(
                    <div>
                        {/* Add image Here */}
                        <p>Name : Pikachu</p>
                        <p>Id : </p>
                        <p>Height :</p>
                        <p>Weight :</p>
                        <p>Base Exp : 100xp</p>
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
