import React, { Component } from "react";
import Card from "../card";
import "./style.css"
class Container extends Component {
    shuffle (a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      };
      render () {
return (
<div className="container">
{this.shuffle(this.props.imageArr).map(image => (
         <Card
         imageId={image.id}
         imageLink={image.imageLink}
         key={image.id}
         getItemId={this.props.getItemId}
         />
       ))}
</div>
)
      }
}
export default Container;