import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
  }

  body {
    font-family:'Poppins', sans-serif;
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`
export const lightTheme = {
  bg: {
    primary: '#ffffff',
    secondary: '#f3f5f7',
    inset: '000000',
    input: 'rgba(65,67,78,0.12)',
  },
  text: {
    primary: '#023047',
    secondary: '#535b73',
    tertiary: '#464d65',
  },
}

//
export const darkTheme = {
  bg: {
    primary: '#070d23',
    secondary: '#222c4f',
    inset: '#724cf9',
    input: 'rgba(65,67,78,0.12)',
  },
  text: {
    primary: '#ffffff',
    secondary: '#535b73',
    tertiary: '#464d65',
  },
}
