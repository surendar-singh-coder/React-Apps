// import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>
  {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setalert(null)},3000)
    setInterval(() => {
      document.title="ALert enabled"

    }, 1000);
  }
  const toggle=()=>
  {
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor="#042743"
      showalert("Dark mode  has been enabled","success")
      setInterval(() => {
        document.title="Dark Mode enabled"
      }, 700);
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light mode  has been enabled","success")
      
    }
  
  }
  return (
   <>
    <Router> 
<Navbar title="Tech Core" about="About Us hello" mode={mode} toggle={toggle}/>
{/* <Navbar /> */}

<Alert alert={alert}/>
    <div className="container">
    
    
    <Routes>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Word Counter, Character Counter, Uppercase to Lowercase And Lowercase To Uppercase " mode={mode} />
}>
                      </Route>

          <Route path="/about" element={<About mode={mode} />}>
            
          </Route>
    </Routes>
      
      
    </div>
    </Router>
   </>
  );
}

export default App;
