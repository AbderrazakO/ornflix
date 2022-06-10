import { Header, Button, HeadSection, Title } from './style'
import { LeftArrow, More } from './icons'

const Index = ({ children }) => {
  // console.log(prop)
  //
  return (
    <Header>
      <HeadSection>
        {children}
        <Button aria-label='Go Back'>
          <LeftArrow />
        </Button>
        <Title>Discover</Title>
        <Button aria-label='Go Back'>
          <More />
        </Button>
      </HeadSection>
      <nav>
        <div>ORNFLIX</div>
      </nav>
    </Header>
  )
}

export default Index
