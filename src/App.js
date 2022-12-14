import React, { useState } from 'react'
import Button from './components/Button';
import ListComponent from './components/ListComponent';
import './App.css'

function App() {
  const [content,setContent] = useState([]);
  function addList(){
    setContent([...content,"Your List item"]);
  }
  return(
    <>
      <div className='App'>
        <Button addList = {addList} name="Add"/>
        {content.map((item)=>{
          return <ListComponent/>
        })}
      </div>
    </>
  )
}

export default App;
