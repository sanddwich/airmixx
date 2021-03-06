import React from 'react'
import { Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import './MainFooter.scss'
import { Config } from '../../../Config/Config'

interface MainFooterProps {}

interface MainFooterState {}

class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
  render() {
    return (
      <Container fluid className="MainFooter p-0 m-0 d-flex align-items-center">
        <div className="MainFooter__row">
          <div className="col-md-4 mt-5 mt-md-0 align-self-center">
            <a href={`${Config.url}politic.pdf`} target="_blank">
              Политика конфиденциальности
            </a>
          </div>
          <div className="col-md-4 mt-5 mt-md-0  MainFooter__logo">
            <ScrollAnimation animateOnce={false} offset={0} animateIn="animate__flipInX" delay={200}>
              <img className="" src="/icons/logo.svg" alt="logo" />
            </ScrollAnimation>
          </div>
          <div className="col-md-4 mt-5 mt-md-0 align-self-center">
            <a href="https://deestore.ru" target="_blank">
              Сайт разработан – deedesign
            </a>
          </div>
        </div>
      </Container>
    )
  }
}

export default MainFooter
