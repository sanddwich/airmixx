import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ToggleMessageEl from '../../../../../SharedComponents/ToggleMessageEl/ToggleMessageEl'
import './Block2.scss'

interface Block2Props {}

const Block2 = (props: Block2Props) => {
  return (
    <Container fluid className="Block2">
      <Container className="Block2__img d-none d-sm-block">
        <img className="img-fluid d-none d-xl-flex" src="/img/2-1.jpg" alt="AIRMIX – это" />
        <img className="img-fluid d-none d-lg-flex d-xl-none" src="/img/2-2.jpg" alt="AIRMIX – это" />
        <img className="img-fluid d-none d-sm-flex d-lg-none" src="/img/2-3.jpg" alt="AIRMIX – это" />
      </Container>

      <Container fluid className="Block2__imgMob p-0 d-block d-sm-none">
        <Row className="Block2__mobTitle justify-content-center m-0">
          <h1>AIRMIX – это</h1>
        </Row>
        <Row className="Block2__mobRow m-0 justify-content-center">
          <Col className="Block2__mobCol" style={{
            backgroundImage: 'url("/img/2-mob-1-min.jpg")'
          }}>
            <div className="Block2__qblock d-flex justify-content-center">
              <div className="Block2__qblock1">
                <ToggleMessageEl isOpen={true}>
                  <h4>Гипоаллергенный мундштук</h4>
                  <p>растительный глицерин , никотин 2% , пищевой пропилен-гликоль и натуральные ароматизаторы</p>
                </ToggleMessageEl>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Block2