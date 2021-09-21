import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import AirmixProductCard from './AirmixProductCard/AirmixProductCard'
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  return (
    <Container fluid className="Block1 p-0">
      <Row className="Block1__Row m-0">
        {Config.productCards.map((card, index) => {
          return (
            <Col key={index} md={6} className="Block1__Col p-0">
              <AirmixProductCard img={card.img} title={card.title} />
            </Col>
          )
        })}
      </Row>
      <Row className="Block1__descr m-0 justify-content-center">
        <div className="Block1__descrCont">
          <h4>Состав:</h4>
          <p>растительный глицерин , никотин 2% , пищевой пропилен-гликоль и натуральные ароматизаторы</p>
        </div>
      </Row>
    </Container>
  )
}

export default Block1
