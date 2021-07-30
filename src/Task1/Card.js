import React from 'react'

function Card({ letter, bg }) {
    return (
        <div className="card" style={{background: bg }}>
            <h2>{letter}</h2>
        </div>
    )
}

export default Card
