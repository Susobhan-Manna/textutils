import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {  BrowserRouter as Router,  Routes,   Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1600);
  }
  const toggleMode= ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.background = "grey";
    showAlert("Dark mode has been actevited","success");
    document.title = 'Textutils-Dark Mode';
    /*setInterval(() => {
      document.title = 'Textutils- is Amazing';
    }, 2000);
    setInterval(() => {
      document.title = 'Textutils- instal Now';
    }, 1600);*/
    }
    else{
      setMode('light');
      document.body.style.background = "white";
      showAlert("Light mode has been actevited","success");
      document.title = 'Textutils-Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TEXTUTILS" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    <Routes>
        <Route exact path="/about" element= {<About />}></Route>
        <Route exact path="/ " element={<TextForm showAlert={showAlert}
        heading="Enter the text to analyze bellow ...." mode={mode}/>}></Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
