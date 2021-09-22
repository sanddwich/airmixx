import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler'
import './ToggleMessageEl.scss'

interface ToggleMessageElProps {
  isOpen: boolean
  children?: React.ReactNode
}

export default function ToggleMessageEl(props: ToggleMessageElProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(props.isOpen)

  return (
    <Container fluid className="ToggleMessageEl p-0">
      <Row className="ToggleMessageEl__Row m-0 justify-content-center">
        <div className="ToggleMessageEl__popupCont">
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            {isOpen && <div className="ToggleMessageEl__popup">{props.children}</div>}
          </OutsideClickHandler>
        </div>
      </Row>
      <Row className="ToggleMessageEl__action m-0 justify-content-center">
        {isOpen ? (
          <img src="/img/svg/closeCircle.svg" alt="" />
        ) : (
          <img src="/img/svg/openCircle.svg" alt="" onClick={() => setIsOpen(true)} />
        )}
      </Row>
    </Container>
  )
}
