import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AirmixSticker from '../../../../../SharedComponents/AirmixSticker/AirmixSticker'
import './Block4.scss'
import { showRequestModal } from '../../../../../Redux/actions/modal'
import { Element } from 'react-scroll'
import { connect } from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block4Props {
  showRequestModal: () => void
}

const Block4 = (props: Block4Props) => {
  return (
    <Element name="Block4">
      <Container fluid className="Block4">
        <Container className="Block4__Cont" style={{ backgroundImage: 'url("/img/4-1.jpg")' }}>
          <Row className="Block4__halfHeader d-flex justify-content-center m-0">
            <Col lg={8} xs={12} className="p-0">
              <h1>Вас заинтересовала продукция?</h1>
            </Col>
          </Row>

          <Row className="Block4__Row m-0 align-items-center">
            <Col lg={6} className="Block4__ColContent">
              <ScrollAnimation animateOnce={true} offset={100} animateIn="animate__fadeInLeft">
                {/* <div className="Block4__titleDiv d-flex align-items-center">
                  <div className="Block4__titleImg">
                    <img src="/img/svg/4-1.svg" alt="" />
                  </div>
                  <div className="Block4__titleText">Мелкий опт</div>
                </div>
                <Row className="Block4__buttons m-0">
                  <AirmixSticker width={225}>от 150 штук – 330 рублей</AirmixSticker>
                  <AirmixSticker width={225}>от 500 штук – 300 рублей</AirmixSticker>
                  <AirmixSticker width={225}>от 1 500 штук – 280 рублей</AirmixSticker>
                </Row> */}

                <Row className="Block4__titleText m-0">
                  Хотите стать эксклюзивным дистрибьютором Airmix в своём регионе?
                </Row>
              </ScrollAnimation>

              <ScrollAnimation animateOnce={true} offset={100} animateIn="animate__fadeInLeft">
                {/* <div className="Block4__titleDiv d-flex align-items-center">
                  <div className="Block4__titleImg">
                    <img src="/img/svg/4-2.svg" alt="" />
                  </div>
                  <div className="Block4__titleText">Крупный опт</div>
                </div>
                <Row className="Block4__buttons m-0">
                  <AirmixSticker width={480}>
                    Чтобы получить дилерскую эксклюзивную цену, свяжитесь с нами
                  </AirmixSticker>
                </Row> */}

                <Row className="Block4__titleText2 m-0" style={{ fontWeight: 'normal' }}>
                  Оставьте заявку и с Вами свяжется менеджер
                </Row>
              </ScrollAnimation>

              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__zoomIn" delay={0}>
                <Row className="Block4__buttons m-0">
                  <div className="Block4__button" onClick={() => props.showRequestModal()}>
                    Связаться с нами
                  </div>
                </Row>
              </ScrollAnimation>
            </Col>
            <Col lg={6} className="Block4__ColImg">
              <img className="d-flex d-xl-none img-fluid" src="/img/4-1.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}

const mapDispatchToProps = {
  showRequestModal,
}

export default connect(null, mapDispatchToProps)(Block4)
