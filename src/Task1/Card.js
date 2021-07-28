import React from 'react'

function Card({ letter, bg }) {
    // if(index % 3 === 0){
    //     var bg = 'blue'
    // }
    // else{
    //     var bg=  'rgba(255, 255, 255, 0.6)';

    // }
    return (
        <div className="card" style={{background: bg }}>
            <h2>{letter}</h2>
        </div>
    )
}

export default Card
