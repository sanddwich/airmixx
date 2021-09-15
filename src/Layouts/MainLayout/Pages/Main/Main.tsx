import React from 'react'
import { Container } from 'react-bootstrap'
import Contacts from '../Components/Contacts/Contacts'
import './Main.scss'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        <Contacts />
      </Container>
    )
  }
}

export default Main
