import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }

  :root {
    --number-width: 40px;
    --highlight-1: #e0e0e0;
    --highlight-2: #5afda8;
    --highlight-3: #52e196;
  }
`

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App
