import React from 'react'
import './PokeCard.css'
function PokeCard(props: any) {
    return (
        <div className="pokecard">
            {/* Add Image Here */}
            <p>{props.name}</p>
        </div>
    )
}

export default PokeCard
