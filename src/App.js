import React, {useState} from 'react';
import './App.css';
import {TabGroup, ToggleGroup, Checkbox} from './Button.js'
import 'react-pro-sidebar/dist/css/styles.css';
import {InfoSummary} from './components/Pages/InfoSummary'
import {AboutSummary} from './components/Pages/AboutSummary'
import {Visualizations} from './components/Pages/Visualization'
import {Home} from './components/Pages/Home'
import background from "./images/farming-background.jfif";

function App() {
  const [display, setDisplay] = useState("Home");

  const [dual_display, checkDualDisplay] = useState(false);

  function changeDisplay(newDisplay) {
    setDisplay(newDisplay);
  }

  function changeDual(){
    checkDualDisplay(!dual_display)
  }

  function getDisplay(){
    if(dual_display){
      return(
        <div class='parent flex-parent'>
          <div class='child flex-child'><Visualizations/></div>
          <div class='child flex-child'><Visualizations/></div>
        </div>
        );
    }else{
      return(<Visualizations/>)
    }
  }
  if (display === "Visualizations") {
    return (
      <div id="outerContainer" class='font-metropolis'>
        <div id="heading">
          <img src='https://safeparty.ucdavis.edu/sites/default/files/inline-images/ucdavis_logo_gold_0.png' id="logo"/>
          <TabGroup changeFunc={changeDisplay}/>
        </div>
          <div>
          <Checkbox label={"Compare"} checked={false} onChange={changeDual}/>
        </div>
          {getDisplay()}
      </div>
    );
  }

  else if (display === "Info") {
    return (
      <div id="outerContainer" class='font-metropolis'>
        <div id="heading">
          <img src='https://safeparty.ucdavis.edu/sites/default/files/inline-images/ucdavis_logo_gold_0.png' id="logo"/>
          <TabGroup changeFunc={changeDisplay}/>
        </div>
          <InfoSummary />
      </div>
    );
  }
  if (display === "About") {
    return (
      <div id="outerContainer" class='font-metropolis'>
        <div id="heading">
          <img src='https://safeparty.ucdavis.edu/sites/default/files/inline-images/ucdavis_logo_gold_0.png' id="logo"/>
          <TabGroup changeFunc={changeDisplay}/>
        </div>
        <AboutSummary/>

      </div>
    );
  }
  return (
    <div id="outerContainer" class='font-metropolis'>
      <div id="heading">
        <img src='https://safeparty.ucdavis.edu/sites/default/files/inline-images/ucdavis_logo_gold_0.png' id="logo"/>
        <TabGroup changeFunc={changeDisplay}/>
      </div>
      <div  style={{ backgroundImage: `url(${background})` }}>
        <Home/>
      </div>
        
    </div>
  );
}

export default App;
