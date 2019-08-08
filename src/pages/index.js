import React from "react"

import Layout from '../components/Layout';
import styled from "@emotion/styled"

const Wrapper = styled.main`
    margin: 0;
    padding: 0;
    height: 100%;
`;

const Main = styled.div`
  grid-column: main;
  font-size: 1.4rem;
  padding: 1rem;
`;

export default () => {
  return (
    <Wrapper>
      <Layout>
        <Main>
          <h1>I build things.</h1>
          <p>
            I've been programming for around 5+ years already as a full stack
            developer but now i'm more biased to frontend.
          </p><br />
          <p>
            Also i have some experience building hybrid simple mobile apps.
          </p><br />
          <p>
            You can find below a link to my github repository where you can find
            practices and stuff i've done.
          </p>
        </Main>
      </Layout>
    </Wrapper>
  )
}
