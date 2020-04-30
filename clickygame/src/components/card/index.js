import React from "react";
import "./style.css"
function Card (props) {
    // checkIfClicked  () {
    //   if(!this.state.isClicked){
    //     this.setState({
    //     isClicked: true
    //     });
    //   }
    //   else{
    //   alert("Game Over :(")
    //   this.setState({
    //     isClicked: false
    //   });
    //   };
    // };  
   return (
   <div className="card col-md-4"   onClick={() => {props.getItemId(props.imageId)}}>
    <div className="card-body">
       <img className="card-image" src={props.imageLink} alt={"asdf"}/> 
    </div>
  </div>
   )
}
export default Card;