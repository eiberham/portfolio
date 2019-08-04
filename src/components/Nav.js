import React from "react";
import { Link } from "gatsby";

function Nav(){
  return (
    <nav>
      <ul>
        <li><Link to="/cv">Curriculum Vitae</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;