import React, { useState } from 'react'
import { ColorExtractor } from "react-color-extractor";
import chroma from 'chroma-js'

function Slide({ imgSrc, text }) {
    const [colors, setColors] = useState();
    const [textColor, setTextColor] = useState(`rgba(255,255,255,1)`)

    const getImageColors = (color) => {
        setColors({ ...colors, color })
        const rgbaData = chroma.average(color).rgba();
        setTextColor(`rgba(${rgbaData[0] < 150 ? rgbaData[0] + 100 : rgbaData[0] - 150},${rgbaData[1] < 150 ? rgbaData[1] + 150 : rgbaData[1] - 150},${rgbaData[2] < 150 ? rgbaData[2] + 100 : rgbaData[2] - 100},${rgbaData[3]})`);

    }

    return (
        <div>
            <ColorExtractor getColors={getImageColors}>
                <img src={imgSrc} alt=" " />
            </ColorExtractor>
            <p className="content line-clamp-3" style={{ color: textColor, textShadow: `0 0 1px ${textColor}` }}>
                {text}
            </p>
        </div>
    )
}

export default Slide
