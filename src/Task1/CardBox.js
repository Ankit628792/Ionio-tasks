import React, { useState } from 'react'
import Card from './Card';

const newArray = []

function CardBox() {

    const [characters, setCharacters] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.nativeEvent.inputType === 'deleteContentBackward') {
            newArray.pop()
            setCharacters([...newArray])
        }
        else if (e.nativeEvent.data !== ' ') {
            newArray.push(e.nativeEvent.data)
            setCharacters([...newArray])
        }
    }

    return (
        <div className="card__box">
            <div className="input__box">
                <input type="text" placeholder="Type Something Here..." onChange={handleChange} />
            </div>
            <div className="card__area">
                {
                    characters && characters.length > 0
                        ?
                        characters.map((char, i) => (
                            <Card letter={char} key={i} bg={(i + 1) % 3 === 0 ? 'rgba(100, 208, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'} />
                        ))
                        :
                        <h1>Type something to generate cards</h1>
                }
            </div>
        </div>
    )
}

export default CardBox
