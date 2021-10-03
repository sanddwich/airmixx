import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import './Certificate.scss'

interface CertificateProps {}

interface CertificateState {}

class Certificate extends React.Component<CertificateProps, CertificateState> {
  render() {
    return (
      <Element name="Certificate">
        <Container fluid className="Certificate d-block">
          <Container className="Certificate__cont">
            <h1>Сертифицированный продукт</h1>
            <Row className="Certificate__rectRow">
              <div className="Certificate__rect">
                <p>
                  Наш продукт прошел все необходимые лабораторные исследования и отвечает международным стандартам
                  качества.
                </p>
                <p>
                  У нас имеются сертификаты мирового уровня как на готовое изделие, так и на отдельные его
                  комплектующие: на металлический корпус, ароматизационную жидкость, аккумуляторные батареи, фильтр.
                </p>
                <p>Поэтому в качестве нашего продукта вы можете быть полностью уверены!</p>
              </div>
            </Row>

            <div className="Certificate__images d-none d-xl-flex justify-content-center align-items-center">
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={100}>
                <img className="img-fluid hvr-grow-shadow" src="/img/redbull.png" alt="redbull" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={200}>
                <img className="img-fluid hvr-grow-shadow" src="/img/greentea.png" alt="greentea" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={300}>
                <img className="img-fluid hvr-grow-shadow" src="/img/orangepear.png" alt="orangepear" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={400}>
                <img className="img-fluid hvr-grow-shadow" src="/img/pineapple.png" alt="pineapple" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={500}>
                <img className="img-fluid hvr-grow-shadow" src="/img/lushice.png" alt="lushice" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={600}>
                <img className="img-fluid hvr-grow-shadow" src="/img/strawberry.png" alt="strawberry" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={700}>
                <img className="img-fluid hvr-grow-shadow" src="/img/peach.png" alt="peach" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={800}>
                <img className="img-fluid hvr-grow-shadow" src="/img/cherryice.png" alt="cherryice" />
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInUp" delay={900}>
                <img className="img-fluid hvr-grow-shadow" src="/img/tobacco.png" alt="tobacco" />
              </ScrollAnimation>
            </div>

            <Row className="Certificate__images2 m-0 d-flex d-xl-none">
              <img className="img-fluid" src="/img/cert-1.png" alt="" />
            </Row>
          </Container>
        </Container>
      </Element>
    )
  }
}

export default Certificate
