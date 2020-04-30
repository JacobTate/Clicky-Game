import React, {
  Component
} from "react";
import Container from "./components/container";
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
  }

  getItemId = event => {
   // for (let i = 0; i < this.state.pickedCars.length; i++) {
      if (this.state.pickedCars.includes(event)) {
        alert("oops you already picked that one");
        this.state.pickedCars.length = 0;
      }
      else{
        this.setPickedCarsState(event);
      }
 //   };
  
  };
  setPickedCarsState = itemId => {
    let joined = this.state.pickedCars;
    joined = joined.concat(itemId);
    this.setState({
      pickedCars: joined
    })
  }
  renderCards() {
    return ( 
      <Container imageArr = {
        this.state.image
      }
      getItemId = {
        this.getItemId.bind(this)
      }
      />
    );
  }
  render() {
    return this.renderCards();
  }
}
export default App;