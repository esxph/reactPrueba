import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  const[initNum,setNum]=useState(0)

  const[num,setTitleNum]=useState(0)

  


  const setValueInit=()=>{
    
    setTitleNum(initNum)

  }


  function getNum(val){

    setNum(val.target.value)

  }

  const increaseVal=()=>{
    
    let temp=parseInt(num)
    temp++
    setTitleNum(temp)

  
  }




  return (
    <div className="App">

      <div id="sec1" class="container">

        <div class="container block">
          <h2 id="testText">Test Text</h2>
        </div>

        <div class="container">
          <h1 id="testText">{num}</h1>
        </div>

         <div id="annoyingBox">
        </div>

      </div>

      <div  class="container">
          <div id="sec2" class="row">

             <div id="greenArea" class="col">
                <h3 id="testText">Counter Start</h3>
                <input type="number" onChange={getNum}/>

             </div>

             <div id="blueArea" class="col">

                <button id="buttonSet" onClick={setValueInit}> set </button>
                
             </div>

             <div id="redArea" class="col">

               <button id="buttonGreenSet" onClick={increaseVal}>+</button>
                
             </div> 

          </div>
      </div>

    </div>
  );
}

export default App;
