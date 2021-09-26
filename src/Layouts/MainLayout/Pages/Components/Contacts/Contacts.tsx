import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import InputMasked from '../../../../../SharedComponents/InputMasked/InputMasked'
import InputString from '../../../../../SharedComponents/InputString/InputString'
import './Contacts.scss'

interface ContactsProps {}

interface ContactsState {
  name: string
  phone: string
}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  constructor(props: ContactsProps) {
    super(props)
    this.state = { name: '', phone: '' }
  }

  nameChangeHandler = () => {
    console.log(11)
  }
  phoneChangeHandler = () => {
    console.log(22)
  }

  render() {
    return (
      <div className="Contacts container-md">
        <div className="Contacts__block1">
          <div className="row">
            <div className="Contacts__question col-md-6">
              <h1>Готовы оформить заказ или остались вопросы?</h1>
              <p>Оставьте заявку. Мы свяжемся с вами и ответим на все возникшие вопросы</p>
            </div>
            <div className="Contacts__form col-md-6">
              <InputString
                value={this.state.name}
                placeholder="Ваше имя"
                controlChangeHandler={this.nameChangeHandler}
              />
              <InputString
                placeholder="Номер телефона"
                value={this.state.phone}
                controlChangeHandler={this.phoneChangeHandler}
              />
              <ButtonComponent>Отправить заявку</ButtonComponent>
              <p>Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts
