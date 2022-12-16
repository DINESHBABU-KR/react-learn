import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routehome";
import About from "./routeabout";
import Join from "./routejoin";

function Rout()
{
  return(
    <BrowserRouter>
      <Routes>
    <Route path="/" component={Home}/>
    <Route path="about" component={About}/>
    <Route path="join" component={Join}/>
    </Routes>
    </BrowserRouter>
  );
}
export default Rout;

