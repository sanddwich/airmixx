import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Certificate.scss'

interface CertificateProps {}

interface CertificateState {}

class Certificate extends React.Component<CertificateProps, CertificateState> {
  render() {
    return (
      <Container fluid className="Certificate d-none d-sm-block">
        <Container className="Certificate__cont">
          <h1>Сертифицированный продукт</h1>
          <div>
            <p>
              Наш продукт прошел все необходимые лабораторные исследования и отвечает международным стандартам качества.
            </p>
            <p>
              У нас имеются сертификаты мирового уровня как на готовое изделие, так и на отдельные его комплектующие: на
              металлический корпус, ароматизационную жидкость, аккумуляторные батареи, фильтр.
            </p>
            <p>Поэтому в качестве нашего продукта вы можете быть полностью уверены!</p>
          </div>

          <div className="Certificate__images d-none d-xl-flex justify-content-center align-items-center">
            <img className="img-fluid" src="/img/redbull.png" alt="redbull" />
            <img className="img-fluid" src="/img/greentea.png" alt="greentea" />
            <img className="img-fluid" src="/img/orangepear.png" alt="orangepear" />
            <img className="img-fluid" src="/img/pineapple.png" alt="pineapple" />
            <img className="img-fluid" src="/img/lushice.png" alt="lushice" />
            <img className="img-fluid" src="/img/strawberry.png" alt="strawberry" />
            <img className="img-fluid" src="/img/peach.png" alt="peach" />
            <img className="img-fluid" src="/img/cherryice.png" alt="cherryice" />
            <img className="img-fluid" src="/img/tobacco.png" alt="tobacco" />
          </div>

          <Row className="Certificate__images2 m-0 d-flex d-xl-none">
            <img className="img-fluid" src="/img/cert-1.png" alt="" />
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Certificate
