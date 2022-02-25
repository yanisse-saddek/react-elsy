import React from "react";
import './App.css';
import {Box} from "./components/Box"
import './components/styles/global.css';

  const tempMin = -20
  const tempMax = 40
  const heartMin = 80
  const heartMax = 180
  const stepsMin = 0
  const stepsMax = 50000

class App extends React.Component{
  constructor(props){
    super(props)
    this.changeValues = this.changeValues.bind(this)
    this.state = {
      water:1.5,
      heart:3,
      temperature:-10,
      steps:3000
    }
  }
  calculateWater = () =>{
    var total = 1.5;
    if(this.state.temperature >= 20){
      var temperature = this.state.temperature - 19
      for(var i=temperature; i!==0; i--){
        total+= 0.02
      }
    }
    if(this.state.heart >= 120){
      var heart = this.state.heart - 19
      for(var i=heart; i!==0; i--){
        total+= 0.0008
      }
    }
    if(this.state.steps >= 120){
      var steps = this.state.steps - 19
      for(var i=steps; i!==0; i--){
        total+= 0.00002
      }
    }

    total = total.toFixed(3)
    this.setState({
      water: total
    })
  }

  changeValues = (e)=>{
    var newValue = e.target.value
    var icon = e.target.name
    // if(icon === "heart"){
      this.setState({
        [icon]: newValue
      })       
    // }


this.calculateWater()
}

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
            <Box name="water" valeur={this.state.water} icon="local_drink" color="#3A85FF" value="1.5" unit="L"/>
            <Box name="steps" min={stepsMin} max={stepsMax} onChange={this.changeValues} valeur={this.state.steps} icon="directions_walk" color="black" value="3000" unit="steps"/>
            <Box name="heart" min={heartMin} max={heartMax} onChange={this.changeValues} valeur={this.state.heart} icon="favorite" color="red" value="120" unit="bpm"/>
            <Box name="temperature" min={tempMin} max={tempMax} onChange={this.changeValues} valeur={this.state.temperature} icon="wb_sunny" color="yellow" value="-10" unit="°C"/>
        </div>
      </div>
    );
  }
}
export default App;



