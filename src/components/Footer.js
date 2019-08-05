import React from "react";
import styled from "@emotion/styled"

const Foot = styled.footer`
  grid-area: foot;
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  background: #eee;
  width: 100%;
  padding: 1em;
`;

const Footer = () => {
  return (
    <Foot>
      <a href="https://github.com/wwleak">Github</a>
      <a href="https://github.com/wwleak">Linked in</a>
      © 2019 ABRAHAM
    </Foot>
  )
}

export default Footer;