// import logo from './logo.svg';
import { useState } from "react";
import About from "./About";
import "./App.css";
import TextForm from "./TextForm";
import Navbar from "./components/Navbar";
import Alert from "./Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ColorPalette from "./components/ColorPalette";

function App() {
  const [mode, setMode] = useState ('light')
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#323ca8';
      showAlert("Dark Mode Has Been Set", "success");
      document.title='TextUtills - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been set", "success");
      document.title='TextUtills - Light Mode';
    }

  }
  // const handleColorChange = (color) => {
  //   setSelectedColor(color);
    
  //   document.body.style.backgroundColor = color;
  //   showAlert(`Theme color changed to ${color}`, "success");
  // };

  // const [backgroundColor, setBackgroundColor] = useState('white');
  const[alert, setAlert] = useState (null);
  // const [selectedColor, setSelectedColor] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type, 
  });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route> */}
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word & character counter, remove extra spaces" mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;