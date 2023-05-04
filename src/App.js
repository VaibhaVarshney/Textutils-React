
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



function App() { 
  const [mode, setMode] = useState('light');
  const[btnText, setBtnText]=useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(() => {
        setAlert(null);
    }, 1500)
  }
  

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      setBtnText('Disable Dark Mode');
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setBtnText('Enable Dark Mode');
      showAlert("Dark Mode has been disabled", "success")
    }
    
  }
  return (
    <>
    {/* <Navbar title ="TextUtils"  aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
    <Router>
    <Navbar title ="TextUtils" mode={mode} btnText={btnText} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert= {showAlert} heading="Enter the text to analyse" mode={mode}  />} />
        <Route exact path="/about" element={<About mode={mode}/>} />

        
      </Routes>  
    {/* <TextForm showAlert= {showAlert} heading="Enter the text to analyse" mode={mode}  /> */}
    </div>
    </Router> 
    </>  
  );
}

export default App;
