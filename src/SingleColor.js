import React from 'react'
import rgbToHex from './utils'
const SingleColor = ({rgb,weight,index,hexColor}) => {

    const bcg=rgb.join(',');
    const hex=rgbToHex(...rgb);
    return (
        <div className="whole">
           <article className="single" 
                    style={{backgroundColor:`rgb(${bcg})`}}>
                        <p className="weightSec">{weight}%</p>
                        <p className="hexSec">{hex}</p>
                    </article>

        </div>
    )
}

export default SingleColor
