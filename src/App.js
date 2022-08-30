import './App.css';
import React, { useState } from 'react';
import store from './store';
import MyButton from './ui/MyBytton';
import MyInput from './ui/MyInput';
function App() {
  
  const [value, setValue] = useState('')
  const addSymbol = (text) =>{
    if (text==='='){
      try{
      setValue(eval(value))}
      catch{setValue('неверное выражение')}
    }
    else if (text==='CE'){
      if (value==='неверное выражение' || value==='Infinity')
      setValue('')
      else
      setValue(value.substring(0, value.length-1))
    }
    else if (text==='C'){
      setValue('')
    }
    else if(value==='неверное выражение') 
      setValue(text) 
    else setValue(value+text)
  }
  let numbers = store.numbers.map((btn, index) => <MyButton val={btn.val} key={index} setValue={addSymbol}/>)
  let signs = store.signs.map((btn, index) => <MyButton key={index} val={btn.val} setValue={addSymbol}/>)
  return (
    <div className="App">
      <h1>Calculate</h1>
      <div className='calculate'>
        <MyInput value={value}/>
        <div className="numbers">
          {numbers}
        </div>
        <div className="signs">
          {signs}
        </div>
        
      </div>

    </div>
  );
}

export default App;
