import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

function Navbar(){
  return (
    <Nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cv">Curriculum Vitae</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </Nav>
  )
}

export default Navbar;