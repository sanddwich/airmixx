import React from 'react'
import { Container } from 'react-bootstrap'
import ModalWindow from '../ModalWindow/ModalWindow'
import './AirmixToggle.scss'

interface AirmixToggleProps {}

const AirmixToggle = (props: AirmixToggleProps) => {
  const closeHandler = (): void => {
    
  }

  return (
    <Container fluid className="AirmixToggle p-0">
      <ModalWindow closeHandler={() => closeHandler()}></ModalWindow>
    </Container>
  )
}