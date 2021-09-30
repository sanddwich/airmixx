import React from 'react'
import { Container } from 'react-bootstrap'
import './ButtonComponent.scss'

interface ButtonComponentProps {
  children?: React.ReactNode
  onClickHandler?: () => void
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <Container fluid className="ButtonComponent">
      {props.children}
    </Container>
  )
}

export default ButtonComponent