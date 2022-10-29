import Project1 from "./components/Project1";
import './App.css';
import Showdata from "./components/Showdata";
import { Route ,Routes } from "react-router-dom";
import { HeaderApp } from "./nav/HeaderApp";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App"> 
      <HeaderApp />
      <Routes>
        {/* default */}
        <Route path="/" element={<Project1 />}></Route>
        {/* setpath */}
        {/* <Route path="/information" element={<Project1 />}></Route> */}
        <Route path="/showdata" element={<Showdata />}></Route>
      </Routes>
    </div>
  );
}

export default App;
