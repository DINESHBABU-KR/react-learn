import * as React from 'react';
import ReactDOM from 'react-dom/client';

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { init: 'welcome', name: 'dina' };
  }
 /* componentWillMount(){
    alert("learn life cycle");
  }*/
  componentDidMount() {
    setTimeout(() => {
      this.setState({ init: 'thankyou' });
    }, 5000);
  }
  Chcolor = () => {
    this.setState({ init: 'new learn react' });
  };
  componentWillUpdate(){
    alert("do you want a new valyuor") 
  }
  componentDidUpdate(){
    document.getElementById('my').innerHTML='new value updated succesfully'+this.state.init
  }
  shouldComponentUpdate(){
    return true
  }
componentWillUnmount(){
  alert("header deleted")
}
Delete=()=>{
  this.setState({init:false,name:false})
}
  render() {
    return (
      <div>
        <h1>
          {this.state.init} {this.state.name}{' '}
          <button onClick={this.Chcolor}>change</button>
          <button onClick={this.Delete}>change</button>
        </h1>
      </div>
    );
  }
}
export default Lifecycle;
