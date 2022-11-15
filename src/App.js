import './App.css';
import React from 'react'
import { useState } from 'react';


const numbers = [1,2,3,4,5,6,7,8,9,0]
let out = ''
let hideSymbols = false






function App() {
  function showKey (){
    return numbers.map(item => <button className='numKey' key={item} onClick={clikNum}>{item}</button>)  
    
  }
  

  const [password, setPassword] = useState('');
  const [nmb, setNmb] = useState(showKey());
 
  
  

  function makeRandomArr() {
    return Math.random() - 0.5;
  }
  
  

  function clikNum (event) {
    
    numbers.sort(makeRandomArr)
    setNmb(showKey())
    out = out + event.target.innerText
    if(hideSymbols === false)setPassword(out)
    else {
      let hiden = '*'
      hiden = hiden.repeat(out.length)
      setPassword(hiden)
    }
    }
    
    function cancel (){
      if(hideSymbols === false){
      let a = password.slice(0, -1);
      out = a
      setPassword(a)
      }
      else{
        let a = password.slice(0, -1);
       out=out.slice(0, -1)
      setPassword(a)
      }

    }
    
    function clear(){
      
      out = ''
      setPassword(out)
      
    }
    
    function enter (){
      if(password!=='')alert(password)
      else alert('enter correct password')
    
    }

    function hide (){
      if (hideSymbols){
        hideSymbols = false
        setPassword(out)
      } 
      else{
        let hiden = '*'
      hiden = hiden.repeat(out.length)
      setPassword(hiden)
      hideSymbols = true
      } 
    }

  return (
    <>
    <div className='output' >{password}</div>
    <div className="keyboard">
      <div className='num'>{nmb}
      <button className='numKey' id='p'></button>
      <button className='numKey'></button></div>
      <div className='operation'>
      <button className='cancel' onClick={cancel}>CANSEL</button>
      <button className='clear' onClick={clear}>CLEAR</button>
      <button className='enter' onClick={enter}>ENTER</button>
      <button className='hide' onClick={hide}>HIDE</button>
      </div>
    </div>
    </>
  );
}

export default App;
