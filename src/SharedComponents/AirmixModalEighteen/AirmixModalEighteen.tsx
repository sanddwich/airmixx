import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import './AirmixModalEighteen.scss'
import { setModalEighteen } from '../../Redux/actions/modal'

interface AirmixModalEighteenProps {
  setModalEighteen: (isActive: boolean) => void
}

const AirmixModalEighteen = (props: AirmixModalEighteenProps) => {
  useEffect(() => {
    bodyBlock()
  }, [])

  const bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const closeButtonHandler = (): void => {
    bodyUnBlock()
    props.setModalEighteen(false)
  }

  const closeWindow = (): void => {
    window.open('about:blank', '_self')
    window.close()
  }

  return (
    <div className="AirmixModalEighteen d-flex justify-content-center align-items-center">
      <div className="AirmixModalEighteen__window">
        {/* <Row className="AirmixModalEighteen__closeRow m-0 d-flex justify-content-end">
          <div className="AirmixModalEighteen__closeCont">
            <img src="/icons/exit.svg" alt="" onClick={() => closeButtonHandler()} />
          </div>
        </Row> */}
        <Row className="AirmixModalEighteen__content m-0 justify-content-center align-items-center">
          <h3>Вам уже есть 18 лет?</h3>
          <Row className="AirmixModalEighteen__buttons m-0">
            <div className="AirmixModalEighteen__button mr-3 hvr-sweep-to-right" onClick={() => closeButtonHandler()}>
              Да
            </div>
            <div className="AirmixModalEighteen__button ml-3 hvr-sweep-to-right" onClick={() => closeWindow()}>
              Нет
            </div>
          </Row>
        </Row>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setModalEighteen,
}

export default connect(null, mapDispatchToProps)(AirmixModalEighteen)
