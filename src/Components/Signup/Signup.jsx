import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Googleicon from '../Loginpage/Googleicon.webp'

function Form({ userData, setUserData }) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    // const [count, setCount] = useState(0)

    // const securePassword = async (password) => {
    //     try {
    //         const passwordHash = await bcrypt.hash(password, 5);
    //         console.log(passwordHash)

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            pnumber: e.target.pnumber.value,
            password: e.target.password.value,
            cfpassword: e.target.cfpassword.value
        };
        // setUserData([...userData, data]);
        try {
            const res = await axios.post('/register', data)
            alert(res.data.msg)
        } catch (e) {
            alert(e.response.data.msg)
        }
        // securePassword(data.password)
        // setIsSubmitted(true);
        // setCount(count + 1);
    }
    return (
        <div className='page'>
            <div className='loginwindow registerWindow'>
                <div className="top">
                    <h1>Create account</h1>
                    <div className="text">Enter the feilds below to get started </div>
                    <button><img className='googleImage' src={Googleicon} alt="" /> Sign in with google</button>
                    <div className="option">
                        <div className="leftline"></div>
                        <div className='or'>or</div>
                        <div className="rightline"></div>
                    </div>
                </div>
                <div className="bottom">
                    <form className='form' action="" onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" id="firstname" name='firstname' placeholder='First name' />
                        <input type="text" id="lastname" name='lastname' placeholder='Last name' />
                        <input type="email" id="email" name='email' placeholder='Email' />
                        <input type="text" id="firstname" name='pnumber' placeholder='Phone number' />
                        <input type="password" id="password" name='password' placeholder='Password' />
                        <input type="password" id="cfpassword" name='cfpassword' placeholder='Confirm Password' />
                        <button className='createAcc login'>Create Account</button>
                    </form>
                </div>
                <footer>
                    <p>Already a member?
                        <Link to="/login">
                            <span>{` login`}</span>
                        </Link>
                    </p>
                </footer>
            </div >
        </div>

        //                 isSubmitted &&
        // (<Link to='/display' >
        //     <button className='View btn'>View Data</button>
        // </Link>)



    )
}

export default Form;

