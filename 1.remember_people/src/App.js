import React, {useState} from 'react'
import People from './People'
import data from './data'
import './App.css';

function App() {
  const [people, setPeople]=useState(data)
  const [slideOut, setSlideOut] = useState('')
  const [slideActive, setSlideActive]=useState(false)
  function clearAction(){
    setSlideOut('slideOut')
    setSlideActive(true)
    setTimeout(()=>{
      setPeople([])
    },300)
  }
  function creatingAction(){
    setPeople(data)
    if(slideActive === true){
      setSlideOut('slideOut')
      setTimeout(()=>{
        setSlideOut('slideIn')
        setSlideActive(false)
      },10)
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h3>{people.length} people that you should meet today.</h3>
        <People slideClass ={slideOut} meeting = {people} />
        <button className="actionBtn" onClick={creatingAction}>See meeing people</button>
        <button className="clearBtn" onClick={clearAction}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
