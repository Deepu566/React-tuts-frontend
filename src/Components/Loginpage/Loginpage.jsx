import React from 'react'
import Googleicon from './Googleicon.webp'
import "./Loginpage.scss"
import { Link } from 'react-router-dom'
const Loginpage = () => {
    return (
        <div className='page'>
            <div className='loginwindow'>
                <div className="top">
                    <h1>Login to account</h1>
                    <div className="text">Enter your credemtials to access your account </div>
                    <button><img className='googleImage' src={Googleicon} alt="" /> Sign in with google</button>
                    <div className="option">
                        <div className="leftline"></div>
                        <div className='or'>or</div>
                        <div className="rightline"></div>
                    </div>
                </div>

                <div className="bottom">
                    <form className='form' action="">
                        <div className="item">
                            <label className='label' htmlFor="email">Email Address</label>
                            <input type="text" id="email" placeholder='Email' name='email' />
                        </div>

                        <div className="item">
                            <label className='label' htmlFor="password">Password</label>
                            <input className='input2' type="password" placeholder='Password' name='password' />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id='remember' />
                            <label htmlFor="remember">Remember machine for 30 days</label>
                            <span>forgot?</span>
                        </div>
                        <button className='login'>Login</button>
                    </form>
                </div>
                <footer>
                    <p>not a member?
                        <Link to="/register">
                            <span>{` CreateAccount`}</span>
                        </Link>
                    </p>
                </footer>



            </div>
        </div >
    )
}

export default Loginpage
