import * as React from 'react';
import ReactDOM from 'react-dom/client';

class Reactform extends React.Component{
  constructor(){
    super();
    this.state={username:" ",age:null,error:""}
  }
  uservalue=(event)=>{
    let m=event.target.name;
    let a=event.target.value
    let err="";
    if(m=="age"){
      if(a!="" && !Number(a))
      {
        err=<strong> invalid age</strong>

      }
    }
this.setState({error:err})
    this.setState({[m]:a})

  }
  formsubmit=(event)=>{
    event.preventDefault();
    alert("please check")
  }
  render(){
    return(
      <form onSubmit={this.formsubmit}> 
<h1> hello {this.state.username}</h1>
<h1> your {this.state.age}</h1>
enter your name: 
<input  type="text" name="username" onChange={this.uservalue} /><br/>
your age      <input  type="text" name="age" onChange={this.uservalue} />

{this.state.error}
<button type="submit" >submit</button>
        </form>
    )
  }
}
export default Reactform;