import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AirmixIconCard from '../../../../../SharedComponents/AirmixIconCard/AirmixIconCard'
import './Block3.scss'

interface Block3Props {}

const Block3 = (props: Block3Props) => {
  return (
    <Container fluid className="Block3">
      <Container className="Block3__contaner">
        <Row className="Block3__Row m-0">
          <Col lg={6} className="Block3__Col">
            <div className="Block3__card1">
              <AirmixIconCard img="/img/3-1.png" icon="/img/svg/3-1.svg">
                Только оригинальные комплектующие
              </AirmixIconCard>
            </div>
          </Col>
          <Col lg={6} className="Block3__Col">
            <div className="Block3__card2">
              <AirmixIconCard img="/img/3-2.png" icon="/img/svg/3-2.svg">
                Контролируем производство на каждом этапе
              </AirmixIconCard>
            </div>
          </Col>
        </Row>
        <Row className="Block3__Row m-0">
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card3">
              <AirmixIconCard icon="/img/svg/3-3.svg">Низкая цена</AirmixIconCard>
            </div>
          </Col>
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card4">
              <AirmixIconCard img="/img/3-4.png" icon="/img/svg/3-4.svg">
                Высокое качество продукта
              </AirmixIconCard>
            </div>
          </Col>
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card5">
              <AirmixIconCard img="/img/3-5.png" icon="/img/svg/3-5.svg">
                До 1 000 затяжек
              </AirmixIconCard>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Block3
