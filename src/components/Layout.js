import React from "react";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from "@emotion/styled"

const Container = styled.section`
  background: white;
  box-shadow: 0 3px 16px 0 #cccccc;
  width: 800px;
  padding: 10px 8px;
  margin: auto;
  display: grid;
  grid-template-rows: 20vh 30vh 20vh;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 10px;
  grid-template-areas: "head head head"
                       "main main main"
                       "foot foot foot";
`;

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Navbar />
        </Header>
        <main>
          {children}
        </main>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout;