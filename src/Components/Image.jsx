import React, { useState } from 'react'
import "../App.css"

const Image = () => {

    const [names, setName] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        let data = {
            first: e.target.firstName.value,
            last: e.target.lastName.value
        };
        setName([...names, data]);
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <button >Add</button>
            </form>
            <div>

                {
                    names.map((data, index) => (
                        <div key={index}>
                            {`${data.first} ${data.last}`}
                        </div>
                    )
                    )
                }


            </div>
        </>
    )
}

export default Image;
