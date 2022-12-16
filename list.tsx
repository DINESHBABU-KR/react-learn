import * as React from 'react';
import ReactDOM from 'react-dom/client';




function Member(props)
{
  
  const rl=props.value.map((item)=>{
    return <li> {item} </li>
  })
  return <ul> {rl} </ul>
}


export default Member;