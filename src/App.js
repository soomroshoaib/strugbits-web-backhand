
// import { useState } from 'react';
import  Login from './component/login';
import './App.css';
 import Signup from './component/signup';
 import Dashboard from './component/Dashboard';
 import {Routes, Route} from 'react-router-dom';

function App() {
//   const [num , setnum] = useState(0)

//  const plux=()=>{
//   setnum(num +1)
//  }
  return (
    <div className="App">
      {/* <h1>{num}</h1>
      <button onClick={plux}>+</button> */}
{/* 
    <Login /> */}
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
     <Route path='/dash' element={<Dashboard />} />
     </Routes>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
