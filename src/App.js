// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

function App() {
  const[mode, setmode] = useState('light');  //whether dark mode is enable or not
  const[alert, setalert] = useState(null);

  const showalert = (message, type) =>{
    setalert({
      meg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode ==='light'){
    setmode('dark')
    document.body.style.backgroundColor = '#042743'
    showalert(" Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode'
  //   setInterval(() => {
  //     document.title = 'TextUtils is amazing'
  //   }, 2000);
  //   setInterval(() => {
  //     document.title = 'Install TextUtils Now!'
  //   }, 1500);
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showalert(" Light mode has been enabled", "success");
     document.title = 'TextUtils - Light Mode'

  }
  }
  return (
  <>
{/* <Router> */}

<Navbar title="TextUtils" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert={alert}/>

<div className="container my-3">
{/* <Switch> */}
{/* /users --->  component 1
/users/home ---> component 2 */}
{/* <Routes>
      <Route exact path='/about'element = {<About/>} ></Route>
      <Route exact path="/"
      element = {<TextForm showalert={showalert} heading="Enter the text to Analyze Below" mode={mode}/>}>
      </Route> 
</Routes>           */}

<TextForm showalert={showalert} heading="Enter the text to Analyze Below" mode={mode}/>

</div>
{/* </Router> */}
{/* <About/> */}

</>
  );
}

export default App;