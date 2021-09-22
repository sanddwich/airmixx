import React from 'react'
import { Container } from 'react-bootstrap'
import Contacts from '../Components/Contacts/Contacts'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import './Main.scss'
import Underline from './Underline/Underline'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        <Underline />
        <Block1 />
        <Block2 />

        {/* <Contacts /> */}
      </Container>
    )
  }
}

export default Main
