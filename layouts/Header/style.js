import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 50px;
  position: relative;
`
export const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 15%;
  background-color: ${({ theme }) => theme.bg.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.text.primary};
  }
`

export const HeadSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  padding: 0.75rem 0;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  font-size: 1.25rem;
`
