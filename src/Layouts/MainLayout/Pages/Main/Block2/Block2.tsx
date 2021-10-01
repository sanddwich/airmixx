import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ToggleMessageEl from '../../../../../SharedComponents/ToggleMessageEl/ToggleMessageEl'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import './Block2.scss'

interface Block2Props {}

const Block2 = (props: Block2Props) => {
  return (
    <Element name="Block2">
      <Container fluid className="Block2">
        <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeInUp">
          <Container className="Block2__img d-none d-sm-block">
            <img className="img-fluid d-none d-xl-flex" src="/img/2-1.jpg" alt="AIRMIX – это" />
            <img className="img-fluid d-none d-lg-flex d-xl-none" src="/img/2-2.jpg" alt="AIRMIX – это" />
            <img className="img-fluid d-none d-sm-flex d-lg-none" src="/img/2-3.jpg" alt="AIRMIX – это" />
          </Container>
        </ScrollAnimation>

        <Container fluid className="Block2__imgMob p-0 d-block d-sm-none">
          <Row className="Block2__mobTitle justify-content-center m-0">
            <h1>AIRMIX – это</h1>
          </Row>
          <Row className="Block2__mobRow m-0 justify-content-center">
            <Col
              className="Block2__mobCol"
              style={{
                backgroundImage: 'url("/img/2-mob-1-min.jpg")',
              }}
            >
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock1">
                  <ToggleMessageEl isOpen={true}>
                    <h4>Гипоаллергенный мундштук</h4>
                    <p>растительный глицерин , никотин 2% , пищевой пропилен-гликоль и натуральные ароматизаторы</p>
                  </ToggleMessageEl>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock2">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={300}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Фильтр</h4>
                      <p>Блокирует попадание жидкости в пололость рта</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock3">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={500}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Содержит брендовую высококачественную ароматизированную жидкость</h4>
                      <p>объёмом 3,5 мл</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock4">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={700}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Прочный корпус</h4>
                      <p>из нержавеющей стали</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock5">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={900}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Надежный высокомощный аккумулятор</h4>
                      <p>объёмом 550 mAh</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock6">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1100}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Тяга</h4>
                      <p>Мягкая тяга делает курение комфортным</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="Block2__qblock d-flex justify-content-center">
                <div className="Block2__qblock7">
                  <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1300}>
                    <ToggleMessageEl isOpen={false}>
                      <h4>Подача воздуха</h4>
                      <p>Светодионый индикатор подачи воздуха в устройство</p>
                    </ToggleMessageEl>
                  </ScrollAnimation>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}

export default Block2
