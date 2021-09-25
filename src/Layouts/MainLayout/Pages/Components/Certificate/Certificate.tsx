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
        <p>
          Наш продукт прошел все необходимые лабораторные исследования и отвечает международным стандартам качества. У
          нас имеются сертификаты мирового уровня как на готовое изделие, так и на отдельные его комплектующие: на
          металлический корпус, ароматизационную жидкость, аккумуляторные батареи, фильтр. Поэтому в качестве нашего
          продукта вы можете быть полностью уверены!
        </p>
      </div>
    )
  }
}

export default Certificate
