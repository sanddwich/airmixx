import React from 'react'
import { Container } from 'react-bootstrap'
import './AirmixProductCard.scss'

interface AirmixProductCardProps {
  img: string
  title: string
}

export default function AirmixProductCard(props: AirmixProductCardProps) {
  return (
    <Container fluid className="AirmixProductCard p-0">
      <Container
        fluid
        className="AirmixProductCard__img d-none d-xl-block"
        style={{
          backgroundImage: `url("${props.img}")`,
        }}
      ></Container>

      <Container fluid className="AirmixProductCard__imgMob d-none d-sm-flex d-xl-none justify-content-center p-0">
        <img className="img-fluid" src={`${props.img}`} alt={`${props.title}`} />
      </Container>

      <Container
        fluid
        className="AirmixProductCard__imgIphone d-block d-sm-none p-0"
        style={{
          backgroundImage: `url("${props.img}")`,
        }}
      ></Container>
    </Container>
  )
}
