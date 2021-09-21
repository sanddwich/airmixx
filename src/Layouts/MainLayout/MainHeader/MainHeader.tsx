import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainHeader.scss'

interface MainHeaderProps {}

interface MainHeaderState {}

class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  render() {
    return (
      <Container fluid className="MainHeader p-0">
        <Container
          fluid
          className="MainHeader__bg p-0"
          style={{ 
            backgroundImage: `url("/img/mainBg.jpg")`, 
            backgroundRepeat: 'no-repeat', 
            // backgroundSize: 'cover',
          }}
        >
          <Container className="MainHeader__cont">
            <Row className="MainHeader__Row justify-content-between align-items-center m-0">
              <div className="MainHeader__logoNav d-flex justify-content-start">
                <div className="MainHeader__logo">
                  <img src="/img/svg/logo.svg" alt="" />
                </div>
                <div className="MainHeader__nav d-none d-md-flex justifu-content-start align-items-center">
                  <div className="MainHeader__navEl">Преимущества</div>
                  <div className="MainHeader__navEl">О продукте</div>
                  <div className="MainHeader__navEl">Оптовикам</div>
                  <div className="MainHeader__navEl">Оптовикам</div>
                  <div className="MainHeader__navEl">Каталог</div>
                </div>
              </div>
              <div className="MainHeader__phone d-block">
                <div className="MainHeader__phone">+7 (929) 925-00-08</div>
                <div className="MainHeader__phoneCallback">обратный звонок</div>
              </div>
            </Row>
          </Container>
          <Container fluid className="MainHeader__main p-0"></Container>
        </Container>
      </Container>
    )
  }
}

export default MainHeader
