import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './PokeList.css'

function PokeList() {
    return (
        <div className="pokelist">
            <PokeCard name="Bulbasaur" />
            <PokeCard name="Charmander" />
            <PokeCard name="Squirtle" />

        </div>
    )
}

export default PokeList
