import React from "react";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"
import { css, Global } from "@emotion/core"
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.section`
  background: white;
  box-shadow: 0 3px 16px 0 #cccccc;
  width: 800px;
  padding: 10px 8px;
  margin: auto;
  display: grid;
  grid-template-rows: 20vh 30vh 20vh;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-template-areas: "head head head"
                       "main main main"
                       "foot foot foot";
`;

const Layout = ({children}) => {
  const {
    site:{siteMetadata:site}
  } = useStaticQuery(graphql`
      {
          site{
              siteMetadata{
                  title
                  description
              }
          }
      }
  `)
  return (
    <React.Fragment>
      <Helmet>
        <title>{site.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Helmet>
      <Global
        styles={css`
        body {
          background: #f2f2f2;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-family: 'Roboto', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
        }
        p {
          margin: 0;
          width: 100%;
          text-align: justify;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}
      />
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