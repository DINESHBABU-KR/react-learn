import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Lf from "./Lifecycle";
import Eh from "./Eventhandle";
import Form from "./form";

const App = (props) => {
  const myele =<div>
     <h1> hello {props.topic}</h1>
     <h2> </h2></div>
  return myele
};
 const Slidebar=(props)=>{
  return (<div>
     <App  topic="dinesh"/>
  <h1> slidebar {props.lang}</h1>
 
  </div>
  )
}
const Site=()=>{
  return <div>
  
    <Slidebar lang="tamil"/>
    </div>
}

class Reactstate extends React.Component{
  constructor(){
    super();
    this.state={init:"welcome"}
  }
  Change=()=>{
    this.setState({init:"thank  for you"});
  }
  render(){
    return (
    <div>
    <Form/>
     
     
      </div>
      )
  }
}
export default Reactstate;

