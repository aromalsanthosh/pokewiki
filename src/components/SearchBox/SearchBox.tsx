import React from 'react'
import './SearchBox.css'

interface SearchBoxProps{
    onInputChange: (inputValue : string) => void;
}

function SearchBox( {onInputChange} : SearchBoxProps) {
    return (
        <input 
            onChange={(e)=>{
                console.log(e.target.value);
                onInputChange(e.target.value);
            }}
            className="search"
            type="search"
            placeholder="Search Pokemon"
        />
    )
}

export default SearchBox
