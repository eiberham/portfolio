import React from "react";
import styled from "@emotion/styled"

const Head = styled.header`
  grid-area: head;
  color: white;
  background: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({children}){
  return (
    <Head>
      Abraham.
      {children}
    </Head>
  )
}

export default Header;