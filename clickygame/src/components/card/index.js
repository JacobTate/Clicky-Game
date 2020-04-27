import React from "react";
import "./style.css"
//import CardBody from "../cardBody";
function Card(props) {
  return <div className="card col-md-4">
    <div className="card-body">
       <img className="card-image" src={props.imageLink} alt={"car image"}/> 
    </div>
  </div>
}
export default Card;