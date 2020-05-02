import React from "react";
function Navbar ({highScore, currentScore}) {
  return(
    <nav className="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">High Score: {highScore}</span>
  <span className="navbar-brand mb-0 h1">Your Score: {currentScore}</span>
</nav>
  )
}
export default Navbar;