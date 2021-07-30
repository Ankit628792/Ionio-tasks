import React, { useState } from 'react'
import Card from './Card';

const newArray = []
function CardBox() {

    const [data, setData] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setData(newArray.pop())
        }
        else if (e.nativeEvent.data !== ' ') {
            setData(newArray.push(e.nativeEvent.data))
        }
    }
    return (
        <div className="card__box">
            <div className="input__box">
                <input type="text" placeholder="Type Something Here..." onChange={handleChange} />
            </div>
            <div className="card__area">
                {
                    newArray && newArray.length > 0
                        ?
                        newArray.map((char, i) => (
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
