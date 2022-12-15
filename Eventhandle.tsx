import * as React from 'react';
import ReactDOM from 'react-dom/client';

class Eventbind extends React.Component{
  constructor(){
    super();
    this.state={init:"welcome"}
  }
Clickevent=(a)=>{
  
  this.setState({init:a})
}


  render(){
    return(
      <div>
        <h1 > {this.state.init}</h1>
        <button onClick={()=>this.Clickevent("goal")}>click</button>
        <button onClick={this.Clickevent.bind(this,"bind")}>click</button>
</div>
    )
 }
}
export default Eventbind;