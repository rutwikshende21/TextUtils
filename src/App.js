import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');      // whether light mode or dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>

        <div className="container my-3">
          {/* <Routes>
              <Route exact path="/"
                element = {<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />}>
              </Route> */}
              <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />

              {/* <Route exact path="/about"
                element = {<About />}>
              </Route>
          </Routes>    */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
