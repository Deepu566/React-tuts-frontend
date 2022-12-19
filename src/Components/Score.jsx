import React, { useState } from 'react'

export default function Score() {
    const [input, setInput] = useState(1);
    function handleOnClick(type) {
        if (type === 'add') {
            setInput(input + 1);
        }
        if (type === 'minus') {
            setInput(input - 1);
        }
    }

    return (
        <>
            <div>
                <div>{input}</div>
                <div>
                    <button onClick={() => handleOnClick('add')}>+</button>
                    <button onClick={() => handleOnClick('minus')}>-</button>
                </div>
            </div>

        </>
    )
}
