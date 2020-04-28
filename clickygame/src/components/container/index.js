import React from "react";
import Card from "../card";
import "./style.css"
function Container(props) {
   var shuffle = function(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        console.log(a);
        
        return a;
      }
return (
<div className="container">
{shuffle(props.imageArr).map(image => (
         <Card
         imageArr={props.imageArr}
         imageLink={image.imageLink}
         key={image.id}
         shuffle={shuffle}
         checkIfClicked={props.checkIfClicked}
         />
       ))}
</div>
)
}
export default Container;