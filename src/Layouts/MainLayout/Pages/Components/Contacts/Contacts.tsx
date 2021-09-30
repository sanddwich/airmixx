import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import FormDataIface from '../../../../../Redux/interfaces/AdditionalInterfaces/FormDataIface'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import InputMasked from '../../../../../SharedComponents/InputMasked/InputMasked'
import InputString from '../../../../../SharedComponents/InputString/InputString'
import './Contacts.scss'

interface ContactsProps {}

const Contacts = (props: ContactsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataIface>()

  const [phoneLength] = useState(11)
  const [phoneError, setPhoneError] = useState<boolean>(false)

  const onClickHandler = (data: FormDataIface): void => {
    const phoneString = data.phone.match(/\d+/g)?.join('') as string
    phoneString.length < phoneLength ? setPhoneError(true) : sendFormData(data)
  }

  const sendFormData = (data: FormDataIface): void => {
    console.log(data)
  }

  return (
    <Container fluid className="Contacts p-0">
      <Container className="Contacts__cont">
        <div className="Contacts__block1">
          <div className="row">
            <div className="Contacts__question col-md-6">
              <h1>Готовы оформить заказ или остались вопросы?</h1>
              <p>Оставьте заявку. Мы свяжемся с вами и ответим на все возникшие вопросы</p>
            </div>
            <div className="Contacts__form col-md-6">
              <Row className="Contacts__input m-0">
                <Col className="Contacts__inputCol p-0">
                  <input
                    type="text"
                    placeholder="Введите имя"
                    {...register('name', {
                      required: { value: true, message: 'Обязательное для заполнения поле' },
                      minLength: { value: 3, message: 'Минимальная длина строки 3 символа' },
                      pattern: { value: /^[\s-_а-яА-Я]+$/i, message: 'Только кириллические символы' },
                    })}
                  />

                  {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </Col>
              </Row>
              <Row className="Contacts__input m-0">
                <Col className="Contacts__inputCol p-0">
                  <ReactInputMask
                    mask="+7 (999) 999-99-99"
                    placeholder="Номер телефона"
                    type="tel"
                    onFocus={() => setPhoneError(false)}
                    {...register('phone', {
                      required: { value: true, message: 'Обязательное для заполнения поле' },
                    })}
                  />

                  {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                  {phoneError && <small className="text-danger">Номер телефона введен неполностью</small>}
                </Col>
              </Row>
              <Row className="Contacts__button m-0">
                <div className="Contact__buttonEl" onClick={handleSubmit((data) => onClickHandler(data))}>
                  Связаться с нами
                </div>
              </Row>
              <p className="pt-3">Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="Contacts__cont Container2">
        <Row className="Contacts__Row m-0">
          <Col xl={6} className="Contacts__Col p-0">
            <h1 className="contactsHeader">Или свяжитесь с нами самостоятельно</h1>
          </Col>
        </Row>
        <Row className="Contacts__Row pt-5 m-0 justify-content-between align-items-center">
          <div className="Contacts__El phone"><a href="tel:89299250008">+7 (929) 925-00-08</a></div>
          <div className="Contacts__El phone"><a href="tel:89608586777">+7 (960) 858-67-77</a></div>
          <div className="Contacts__El mail"><a href="mailto:airmix_pods@mail.ru">airmix_pods@mail.ru</a></div>
          <div className="Contacts__El">
            <img src="/icons/wa.svg" alt="" />
            <img className="pl-5 pr-5" src="/icons/tg.svg" alt="" />
            <img src="/icons/insta.svg" alt="" />
          </div>
        </Row>
      </Container>
    </Container>
  )
}

export default Contacts
