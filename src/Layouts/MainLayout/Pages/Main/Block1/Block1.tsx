import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import AirmixProductCard from './AirmixProductCard/AirmixProductCard'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  return (
    <Element name="Block1">
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
        <ScrollAnimation animateOnce={true} offset={100} animateIn="animate__fadeInRightBig">
          <Row className="Block1__descr m-0 justify-content-center">
            <div className="Block1__descrCont">
              <h4>Состав:</h4>
              <p>растительный глицерин, никотин 2%, пищевой пропиленгликоль и натуральные ароматизаторы</p>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
    </Element>
  )
}

export default Block1
