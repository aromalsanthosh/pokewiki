import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import './App.css'
class App extends React.Component{

    render(){
        return(
        <div className="App">
            <h1>PokeWiki</h1>
            <Pokewiki/>
        </div>
        )
    }
    
}


export default App;