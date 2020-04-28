import React, { Component } from "react";
//import CardBody from "./components/cardBody";
//import Card from "./components/card/index";
//import CardImage from "./components/cardImage";
import Container from "./components/container";
import image from "./image.json";
import "./style.css"
class App extends Component {
  state = {
    image,
    highScore: 0,
    currentScore: 0,
    isClicked: image.isClicked
  };  
   checkIfClicked = function(){
   
    if(this.state.isClicked === false){
      this.setState({
        [this.state.isClicked]: true
      });
      
    }
    else{
    alert("Game Over :(")
    this.setState({
      [this.state.isClicked]: false
    });
    };
  };
renderCards = function() {
  return (
   <Container 
   imageArr={this.state.image}
   clickEvent={this.clickEvent} 
   isClicked={this.state.clicked}
   checkIfClicked={this.checkIfClicked}
   />

     
   );
}
  render() {  
    return this.renderCards();
  }
}
export default App;