import React from 'react'
import { useTransform } from 'framer-motion'
//import { useWrapperScroll } from '../Model'
import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay = () => {
  //const { scrollYProgress } = useWrapperScroll()
  //const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
  return (
    <Container>
      <Footer 
      //style={{ opacity }}
      >
        {/*<ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
        </ul>*/}
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
