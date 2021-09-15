import React from 'react'
import { Container } from 'react-bootstrap'
import './MainFooter.scss'

interface MainFooterProps {}

interface MainFooterState {}

class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
  render() {
    return (
      <Container fluid className="MainFooter p-0 m-0 d-flex align-items-center">
        <div className="MainFooter__row">
          <div className="col-md-4 mt-5 mt-md-0 align-self-center">
            <a href="/files/politics.pdf" target="_blank">
              Политика конфиндециальности
            </a>
          </div>
          <div className="col-md-4 mt-5 mt-md-0  MainFooter__logo">
            <img className="" src="/icons/logo.svg" alt="logo" />
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
