import React, { useState } from 'react'
// ↑関数コンポーネントが書けるようになる
import ReactDOM from 'react-dom'
import App from './App'


const players = [
    {
        name: '高塚',
        skills: 'バスケ'
    },
    {
        name: '石川',
        skills: '昼寝'
    }
]

// const Player = ({playerProf})=>{}

ReactDOM.render(<App players={players} />, document.getElementById('root'))