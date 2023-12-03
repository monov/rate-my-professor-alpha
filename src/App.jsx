import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import { Professors } from "./pages/Professors";
import { ProfPage } from "./pages/ProfPage";
import { useState } from "react";

function App() {
  const [searchResponse , setSearchResponse] = useState({})
  return (
    
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path = "/professors/:profName" element = {<Professors setSearchResponse = {setSearchResponse}></Professors>}></Route>
      <Route path = "/professors/:profName/:id" element = {<ProfPage searchResponse = {searchResponse}></ProfPage>}></Route>
    </Routes>
  )
}

export default App
