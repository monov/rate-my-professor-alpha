import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import { Professors } from "./pages/Professors";
import { ProfPage } from "./pages/ProfPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path = "/professors" element = {<Professors></Professors>}></Route>
      <Route path = "/professors/*" element = {<ProfPage></ProfPage>}></Route>
    </Routes>
  )
}

export default App
