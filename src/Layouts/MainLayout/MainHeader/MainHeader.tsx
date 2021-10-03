import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { scroller } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import { showRequestModal } from '../../../Redux/actions/modal'
import './MainHeader.scss'
import { connect } from 'react-redux'

interface MainHeaderProps {
  showRequestModal: () => void
}

const MainHeader = (props: MainHeaderProps) => {
  const scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    })
  }

  return (
    <Container fluid className="MainHeader p-0">
      <Container
        fluid
        className="MainHeader__bg p-0 d-none d-sm-block"
        style={{
          backgroundImage: `url("/img/mainBg.jpg")`,
        }}
      >
        <Container className="MainHeader__cont">
          <Row className="MainHeader__Row justify-content-between align-items-center m-0">
            <div className="MainHeader__logoNav d-flex justify-content-start">
              <div className="MainHeader__logo">
                <NavLink to="/">
                  <ScrollAnimation animateOnce={false} offset={0} animateIn="animate__flipInX" delay={200}>
                    <img src="/img/svg/logo.svg" alt="" />
                  </ScrollAnimation>
                </NavLink>
              </div>
              <div className="MainHeader__nav d-none d-lg-flex justifu-content-start align-items-center">
                <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={900}>
                  <div className="MainHeader__navEl hvr-underline-from-left" onClick={() => scrollTo('Block3', 0)}>
                    Преимущества
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1000}>
                  <div className="MainHeader__navEl hvr-underline-from-left" onClick={() => scrollTo('Block2', 0)}>
                    О продукте
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1100}>
                  <div className="MainHeader__navEl hvr-underline-from-left" onClick={() => scrollTo('Block4', 0)}>
                    Оптовикам
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1200}>
                  <div className="MainHeader__navEl hvr-underline-from-left" onClick={() => scrollTo('Certificate', 0)}>
                    Сертификаты
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1300}>
                  <div className="MainHeader__navEl hvr-underline-from-left" onClick={() => scrollTo('Block1', 0)}>
                    Каталог
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="MainHeader__phone d-block">
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeIn" delay={1400}>
                <div className="MainHeader__phone">
                  <a href="tel:89299250008">+7 (929) 925-00-08</a>
                </div>
                <div className="MainHeader__phoneCallback" onClick={() => props.showRequestModal()}>
                  обратный звонок
                </div>
              </ScrollAnimation>
            </div>
          </Row>
        </Container>
        <Container className="MainHeader__main">
          <Row className="MainHeader__content m-0 h-100 align-items-center">
            <Col xs={8} className="p-0">
              <div className="MainHeader__title">Новинка в мире электронных испарителей</div>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInLeft" delay={1500}>
                <div className="MainHeader__button hvr-sweep-to-right" onClick={() => scrollTo('Block1', 0)}>
                  Ознакомиться с линейкой
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className="MainHeader__bg d-block d-sm-none p-0"
        style={{
          backgroundImage: `url("/img/mainBgMobile.jpg")`,
        }}
      >
        <Container className="MainHeader__cont">
          <Row className="MainHeader__Row justify-content-between align-items-center m-0">
            <div className="MainHeader__logoNav d-flex justify-content-start">
              <div className="MainHeader__logo">
                <img src="/img/svg/logo.svg" alt="" />
              </div>
              <div className="MainHeader__nav d-none d-lg-flex justifu-content-start align-items-center">
                <div className="MainHeader__navEl hvr-underline-from-left">Преимущества</div>
                <div className="MainHeader__navEl hvr-underline-from-left">О продукте</div>
                <div className="MainHeader__navEl hvr-underline-from-left">Оптовикам</div>
                <div className="MainHeader__navEl hvr-underline-from-left">Оптовикам</div>
                <div className="MainHeader__navEl hvr-underline-from-left">Каталог</div>
              </div>
            </div>
            <div className="MainHeader__phone d-block">
              <div className="MainHeader__phone">
                <a href="tel:89299250008">+7 (929) 925-00-08</a>
              </div>
              <div className="MainHeader__phoneCallback" onClick={() => props.showRequestModal()}>
                обратный звонок
              </div>
            </div>
          </Row>
        </Container>
        <Container className="MainHeader__main">
          <Row className="MainHeader__content m-0 h-100 align-items-center">
            <Col className="p-0">
              <div className="MainHeader__title">Новинка в мире электронных испарителей</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  showRequestModal,
}

export default connect(null, mapDispatchToProps)(MainHeader)
