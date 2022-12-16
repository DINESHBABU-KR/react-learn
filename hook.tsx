import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

export default function Hookex(){
  const [Count,Updatecount]=useState(0);
  useEffect(()=>{
    alert ("allo ")
  })
  return(
    <div>
      <p>you click the button {Count} times</p>
      <button onClick={()=>Updatecount(Count +1)}>click me </button>
      </div>
  )

}
