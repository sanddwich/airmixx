import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MainHeader.scss'

interface MainHeaderProps {}

interface MainHeaderState {}

class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  render() {
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
                <div className="MainHeader__phone">+7 (929) 925-00-08</div>
                <div className="MainHeader__phoneCallback">обратный звонок</div>
              </div>
            </Row>
          </Container>
          <Container className="MainHeader__main">
            <Row className="MainHeader__content m-0 h-100 align-items-center">
              <Col xs={8} className="p-0">
                <div className="MainHeader__title">Новинка в мире электронных испарителей</div>
                <div className="MainHeader__button hvr-sweep-to-right">Ознакомиться с линейкой</div>
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
                <div className="MainHeader__phone">+7 (929) 925-00-08</div>
                <div className="MainHeader__phoneCallback">обратный звонок</div>
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
}

export default MainHeader
