import React from "react";
import styled from "@emotion/styled"

const Head = styled.header`
  grid-area: head;
  color: white;
  background: #141e30;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }
`;

function Header({children}){
  return (
    <Head>
      <img src="http://lorempixel.com/400/200/" alt="picture"/>
      {children}
    </Head>
  )
}

export default Header;