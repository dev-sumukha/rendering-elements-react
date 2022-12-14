import React, { useState } from 'react'
import Button from './components/Button';
import ListComponent from './components/ListComponent';
import './App.css'

function App() {
  const [component,setComponent] = useState(["sample component"]);

  function addComponent(){
    setComponent([...component,"sample component"]);
  }

  return(
    <>
      <div className='App'>
        <Button addComponent={addComponent} text="call component"/>
        <ListComponent text="sample Component"/>
        {component.map((item)=>(<ListComponent text={item}/>))}

      </div>
    </>
  )
}

export default App;
