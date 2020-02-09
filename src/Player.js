import React, { useState } from 'react'

const Player = (props) => {
    const [count, setCount] = useState(0)
    const playerProf = props.playerProf
    return (
        <>
            <h1>{playerProf.name}:{count}</h1>
            <p>特技：{playerProf.skills}</p>
            <button type="button"
                onClick={() => setCount(count + 1)}
            >
                push
            </button>
        </>
    )
}

export default Player