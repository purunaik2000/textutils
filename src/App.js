
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextBox from './components/TextBox';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Darkmode has been Enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Darkmode has been Disabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title='TextUtils' head1='Home' head2='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextBox heading="Enter the text here to convert" mode={mode} showAlert={showAlert} />}/>
          <Route exact path='/About' element={<About mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
