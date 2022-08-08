import React, {useState} from "react";
import Menubar from "./components/Menubar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [name, setName] = useState('Mason')
  return (
    <>
        <Menubar />
        <Main name={name}
        fruit="Banana"
        total={23} 
        isAwesome = 'true'/>
        <Footer />
    </>
  );
}

export default App;
