import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler'
import './ToggleMessageEl.scss'

interface ToggleMessageElProps {
  isOpen: boolean
  children?: React.ReactNode
}

export default function ToggleMessageEl(props: ToggleMessageElProps) {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <Container fluid className="ToggleMessageEl p-0">
        <Row className="ToggleMessageEl__Row m-0 justify-content-center">
          <div className="ToggleMessageEl__popupCont">
            {isOpen && <div className="ToggleMessageEl__popup animated animate__fadeInUp">{props.children}</div>}
          </div>
        </Row>
        <Row className="ToggleMessageEl__action m-0 justify-content-center">
          {isOpen ? (
            <img src="/img/svg/closeCircle.svg" alt="" onMouseDown={() => setIsOpen(false)} />
          ) : (
            <img src="/img/svg/openCircle.svg" alt="" onMouseDown={() => setIsOpen(true)} />
          )}
        </Row>
      </Container>
    </OutsideClickHandler>
  )
}
