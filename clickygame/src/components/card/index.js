import React from "react";
import "./style.css"
//import CardBody from "../cardBody";
function Card(props) {
   return <div className="card col-md-4"  onClick={() => {props.checkIfClicked()}}>
    <div className="card-body">
       <img className="card-image" src={props.imageLink} alt={"asdf"}/> 
    </div>
  </div>
}
export default Card;