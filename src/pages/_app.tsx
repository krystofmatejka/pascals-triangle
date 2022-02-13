import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Head from 'next/head'
import {CssColors} from '@/src/constants'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
  }

  :root {
    --number-width: 20px;
    ${CssColors.Dark}: #1a1a1a;
    ${CssColors.Light}: #e0e0e0;
    ${CssColors.LightHighlighted}: #c7c7c7;
    ${CssColors.Highlight1}: #5afda8;
    ${CssColors.Highlight2}: #52e196;
    ${CssColors.Highlight3}: #30b06d;
  }
`

const App = ({Component, pageProps}) => (
  <>
    <Head>
      <title>Pascal's Triangle</title>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com'/>
      <link href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' rel='stylesheet'/>
    </Head>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
)

export default App
