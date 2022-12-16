import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
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
function  RR(){
  <Router>
           <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Join />}></Route>
          </Routes>
          </div>
       </Router>

}
export default RR;

