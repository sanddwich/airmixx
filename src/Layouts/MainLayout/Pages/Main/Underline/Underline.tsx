import React from 'react'
import { Container } from 'react-bootstrap'
import './Underline.scss'

interface UnderlineProps {}

export default function Underline(props: UnderlineProps) {
  return (
    <Container fluid className="Underline">
      <h1>10 свежих вкусов</h1>
    </Container>
  )
}
