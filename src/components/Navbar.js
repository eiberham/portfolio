import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled"
import { FaHome } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  align-self:flex-end;
`;

const Ul = styled.ul`
  display: flex;
  color: #fff;
`;

const Li = styled.li`
  background: #fff;
  color: #333;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 2px 1rem;
  margin: 0 0.2rem;
  & > a {
    color: #141e30;
  }
`;

function Navbar(){
  return (
    <Nav>
      <Ul>
        <Li><Link to="/"><FaHome/> Home</Link></Li>
        <Li><Link to="/contact">Contact</Link></Li>
      </Ul>
    </Nav>
  )
}

export default Navbar;