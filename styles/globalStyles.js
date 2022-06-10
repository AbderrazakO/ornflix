import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
  background: none;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.bgc_1};
  padding: 0 1rem;
}

  `
