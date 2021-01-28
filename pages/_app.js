import Head from "next/head";
import Router from "next/router";

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
    html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        //Primary Meta Tags
        <title>Alura Quiz Narutinho</title>
        <meta name="title" content="Alura Quiz Narutinho"/>
        <meta name="description" content="Esse é um projetinho dos desafios propostos na Imersão Alura React"/>

        //Open Graph / Facebook
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aluraimersion.pedroesmerio.vercel.app"/>
        <meta property="og:title" content="Alura Quiz Narutinho"/>
        <meta property="og:description" content="Esse é um projetinho dos desafios propostos na Imersão Alura React"/>
        <meta property="og:image" content="../assets/img/print.png"/>

        //Twitter
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Alura Quiz Narutinho"/>
        <meta property="twitter:description" content="Esse é um projetinho dos desafios propostos na Imersão Alura React"/>
        <meta property="twitter:image" content="../assets/img/print.png"/>

        //Fonts
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,900;1,400;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
