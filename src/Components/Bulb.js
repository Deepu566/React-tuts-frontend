import React from 'react'

function Lightbulb({ bulbOff, bulbOn }) {
    let checkBulb;
    function handleBulb(state) {

        state === 'false' ? checkBulb = bulbOff : checkBulb = bulbOn;
    }
    return (

        <>
            <div>
            </div>
            <img src={checkBulb} alt="" />
            <div>
                <button onClick={() => handleBulb(true)}>Click</button>
            </div>

        </>
    )
}

export default Lightbulb;