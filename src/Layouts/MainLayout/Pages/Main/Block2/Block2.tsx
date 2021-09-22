import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block2.scss'

interface Block2Props {}

interface PopupMessagesInterface {
  id: number
  isOpen: boolean
}

const Block2 = (props: Block2Props) => {
  const [popupMessages, setPopupMessages] = useState<Array<PopupMessagesInterface>>([
    {id: 1, isOpen: true},
    {id: 2, isOpen: false},
    {id: 3, isOpen: false},
    {id: 4, isOpen: false},
    {id: 5, isOpen: false},
    {id: 6, isOpen: false},
  ])

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
                <img src={`${popupMessages[0].isOpen ? "/img/svg/closeCircle.svg" : "/img/svg/openCircle.svg"}`} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Block2