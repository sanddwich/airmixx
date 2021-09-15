import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Contacts.scss'

interface ContactsProps {}

interface ContactsState {}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  render() {
    return (
      <Container className="Contacts ">
        <div className="Contacts__block1">
          <div className="Contacts__question col-md-6">
            <h1>Готовы оформить заказ или остались вопросы?</h1>
            <p>Оставьте заявку. Мы свяжемся с вами и ответим на все возникшие вопросы</p>
          </div>
          <div className="Contacts__form col-md-6">
            <ButtonComponent>Отправить заявку</ButtonComponent>
          </div>
        </div>
      </Container>
    )
  }
}

export default Contacts
