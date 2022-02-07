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
    --number-width: 40px;
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
      <link href='/opensans-regular.ttf' rel='stylesheet'/>
    </Head>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
)

export default App
