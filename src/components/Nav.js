import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled"

/*const Head = styled.header`
  grid-area: nav;
`;*/

function Nav(){
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cv">Curriculum Vitae</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;