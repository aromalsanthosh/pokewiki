import React from 'react'
import PokeSearchResults from '../PokeSearchResults/PokeSearchResults'
import './Pokewiki.css'

const Pokewiki = () =>{
    return (
        <div className="pokewiki-container">
            <div className="pokelist-container">
                <p>List Of Pokemons</p>
            </div> 
            <div className="pokesearchresult-container">
                <PokeSearchResults/>
            </div>
        </div>
    )
}

export default Pokewiki
