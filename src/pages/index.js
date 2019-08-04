import React from "react"
import styled from '@emotion/styled';

import Nav from "../components/Nav";

const Div = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 3rem;
  display: grid;
  grid-template-rows: 20vh 30vh 1fr;
`;

const Header = styled.header ` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 1rem;
`;

const Section = styled.section`

`;

export default () => {
  return (
    <Div>
      <Header>
        Abraham.
        <Nav />
      </Header>
      <Section>
        <p>
          Hey everyone, i love building things, been programming seven years ago
          already as a fullstack developer but now i'm more biased to frontend.
          Also i have some experience building hybrid simple mobile apps.

          You can find below a link to my github repository where you can find
          practices and stuff i've done.
        </p>

        <a href="https://github.com/wwleak">Repository</a>
      </Section>
    </Div>
  )
}
