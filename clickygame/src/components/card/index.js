import React from "react";
import "./style.css"
function Card (props) {
   return (
   <div className="card col-md-4"   onClick={() => {props.getItemId(props.imageId)}}>
    <div className="card-body">
       <img className="card-image" src={props.imageLink} alt={"asdf"}/> 
    </div>
  </div>
/* <div
      role="img"
      aria-label="click item"
      onClick={() => props.getItemId(props.imageId)}
      style={{ backgroundImage: `url("${props.imageLink}")` }}
    /> */
   )
}
export default Card;