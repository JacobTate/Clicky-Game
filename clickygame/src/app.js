import React, {Component} from "react";
import Container from "./components/container";
import Navbar from "./components/navbar";
import image from "./image.json";
import "./style.css"
class App extends Component {
  constructor() {
    super();
    this.state = {
      image,
      highScore: 0,
      currentScore: 0,
      pickedCars: []
    };
  };
  getItemId = event => {
      if (this.state.pickedCars.includes(event)) {
        alert("oops you already picked that one");
        if(this.state.currentScore >= this.state.highScore){
        this.setState({
          highScore: this.state.pickedCars.length
        })
        this.setState({
          currentScore: 0
        })
      }
        this.state.pickedCars.length = 0;
      }
      else{
        this.setPickedCarsState(event);
      };
  };
  setPickedCarsState = itemId => {
    let joined = this.state.pickedCars;
    joined = joined.concat(itemId);
    this.setState({
      pickedCars: joined
    });
    this.setState({
      currentScore: this.state.currentScore + 1
    })
    console.log(this.state.currentScore);
    
  };  
  render() {
    return ( 
      <div>
      <Navbar
      highScore={this.state.highScore}
      currentScore={this.state.currentScore}
      />
      
      <Container imageArr = {
        this.state.image
      }
      getItemId = {
        this.getItemId.bind(this)
      }
      />
      </div>
    );
  };
};
export default App;