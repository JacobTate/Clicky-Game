import React, { Component } from "react";
//import CardBody from "./components/cardBody";
import Card from "./components/card/index";
//import CardImage from "./components/cardImage";
//import Container from "./components/container";
import image from "./image.json";
class App extends Component {
  state = {
    image
  };  
  // renderCards = () => {
  //   {this.state.image.forEach(i => {
  //     <Card createCard={this.createCard} id={i.id} key={i.id}>
  //      <CardBody >
  //        <CardImage >
  //        </CardImage>
  //      </CardBody>
  //     </Card>
  //   })}
  // };
  render() {
    return (
     <div className="container">
          {this.state.image.map(image => (
          <Card
            id={image.id}
            key={image.id}
            imageLink={image.imageLink}
          />
        ))}
     </div>

      
    );
  }
}
export default App;