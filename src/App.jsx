import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import { Professors } from "./pages/Professors";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path = "/professors/*" element = {<Professors></Professors>}></Route>
    </Routes>
  )
}

export default App
