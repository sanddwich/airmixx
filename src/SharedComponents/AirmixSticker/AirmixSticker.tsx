import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AirmixSticker.scss'

interface AirmixStickerProps {
  children?: React.ReactNode
  width: number
}

const AirmixSticker = (props: AirmixStickerProps) => {
  return (
    <div
      className="AirmixSticker hvr-grow-shadow d-flex justify-content-center align-items-center"
      style={{ width: props.width ? props.width : 'inherit' }}
    >
      {props.children}
    </div>
  )
}

export default AirmixSticker
