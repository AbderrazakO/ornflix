import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from '../styles/Themes'
import Header from '../layouts/Header/Header'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header>
        <button onClick={toggleTheme}>Switch</button>
      </Header>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
