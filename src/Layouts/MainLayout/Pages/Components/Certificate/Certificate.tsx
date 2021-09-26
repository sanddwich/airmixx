import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Certificate.scss'

interface CertificateProps {}

interface CertificateState {}

class Certificate extends React.Component<CertificateProps, CertificateState> {
  render() {
    return (
      <div className="Certificate ">
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

        <div className="Certificate__images img-fluid">
          <img className="img-fluid" src="/img/redbull.png" alt="redbull" />
          <img className="img-fluid" src="/img/greentea.png" alt="greentea" />
          <img className="img-fluid" src="/img/orangepear.png" alt="orangepear" />
          <img className="img-fluid" src="/img/pineapple.png" alt="coconut" />
          <img className="img-fluid" src="/img/lushice.png" alt="coconut" />
          <img className="img-fluid" src="/img/strawberry.png" alt="coconut" />
          <img className="img-fluid" src="/img/peach.png" alt="coconut" />
          <img className="img-fluid" src="/img/cherryice.png" alt="coconut" />
          <img className="img-fluid" src="/img/tobacco.png" alt="coconut" />
        </div>
      </div>
    )
  }
}

export default Certificate
