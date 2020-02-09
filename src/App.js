import React, { useState } from 'react'
import Player from './Player'


const App = (props) => {

    const players = props.players

    return (
        <>
            <Player playerProf={players[0]} />
            <Player playerProf={players[1]} />
        </>
    )
}
export default App
