import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/loginAuth';
import { Route,Routes } from 'react-router-dom'
import { Signup } from './Components/Signup';
import { Dashboard } from './Components/Dashboard';
import { ToastContainer } from 'react-bootstrap'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
