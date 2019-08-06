import React from "react";
import styled from "@emotion/styled"

import { FaGithubSquare, FaLinkedin, FaCodepen } from "react-icons/fa";

const Foot = styled.footer`
  grid-area: foot;
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  background: #141e30;
  width: 100%;
  padding: 1em;
  color: white;
  & > a {
    color: white;
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <a href="https://github.com/wwleak"><FaGithubSquare/></a>
      <a href="https://github.com/wwleak"><FaLinkedin/></a>
      <a href="https://github.com/wwleak"><FaCodepen/></a>
      © 2019 ABRAHAM
    </Foot>
  )
}

export default Footer;