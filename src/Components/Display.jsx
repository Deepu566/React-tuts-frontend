import React from 'react'

const Display = ({ userData }) => {
    return (
        <div>
            <div className='details'>
                {
                    userData.map((data, index) => (
                        <div className='container'>
                            <div className="detail">
                                {`Hey ${data.first} ${data.last},how are you?,`}
                            </div>
                            <div className="detail">
                                {`Your Email : ${data.email}`}
                            </div>
                            <div className="detail">
                                {`Your Mobile : ${data.email}`}
                            </div>
                            <div className="detail">
                                {`Your Password : ${data.email}`}
                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}


export default Display


