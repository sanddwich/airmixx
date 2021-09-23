import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AirmixIconCard.scss'

interface AirmixIconCardProps {
  children?: React.ReactNode
  icon?: string
  img?: string
}

const AirmixIconCard = (props: AirmixIconCardProps) => {
  return (
    <Container fluid className="AirmixIconCard p-0">
      <Row className="AirmixIconCard__Row1 m-0">
        <div className="AirmixIconCard__imgCont">
          {props.img && <img className="AirmixIconCard__img" src={props.img} alt="" />}
        </div>
      </Row>
      <Row className="AirmixIconCard__Row2 m-0 justify-content-center">
        <div className="AirmixIconCard__iconCont">
          {props.icon && <img className="AirmixIconCard__icon" src={props.icon} alt="" />}
        </div>
      </Row>
      <Row className="AirmixIconCard__Row3 m-0">
        <Col className="AirmixIconCard__cardCont d-flex align-items-center justify-content-center">{props.children}</Col>
      </Row>
    </Container>
  )
}

export default AirmixIconCard
