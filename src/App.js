import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from "./Components/Signup/Signup"
import Display from './Components/Display';
import React from 'react';
import Loginpage from './Components/Loginpage/Loginpage.jsx'



function App() {
  const [userData, setUserData] = useState([])

  return (
    <>
      {/* <Lightbulb bulbOff={bulbOff} bulbOn={bulbOn} /> */}
      {/* <Image /> */}
      {/* <Score /> */}
      <Router>
        <Routes>
          <Route path='/register' element={<Signup userData={userData} setUserData={setUserData} />} />
          <Route path="/display" element={<Display userData={userData} />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes >
      </Router >

    </>
  );
}
export default App;