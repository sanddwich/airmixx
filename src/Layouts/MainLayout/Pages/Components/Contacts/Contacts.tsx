import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import FormDataIface from '../../../../../Redux/interfaces/AdditionalInterfaces/FormDataIface'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import './Contacts.scss'
import { Config } from '../../../../../Config/Config'
import { connect } from 'react-redux'
import { setModalWindow } from '../../../../../Redux/actions/modal'
import axios from 'axios'
import LoaderHorizontal from '../../../../../SharedComponents/LoaderHorizontal/LoaderHorizontal'

interface ContactsProps {
  setModalWindow: (isActive: boolean) => void
}

const Contacts = (props: ContactsProps) => {
  const [loading, setLoading] = useState<boolean>(false)

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

  const sendFormData = async (data: FormDataIface): Promise<any> => {
    setLoading(true)
    const mailSettings = { ...Config.mailSettings, userName: data.name, userPhone: data.phone, siteUrl: Config.url }
    axios
      .post(mailSettings.apiPath, mailSettings)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          props.setModalWindow(true)
        } else {
          console.log('Ошибка отправки сообщения')
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))

    // props.setModalForm(false)
    // props.setModalThanks(true)
  }

  return (
    <Element name="Contacts">
      <Container fluid className="Contacts">
        <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeInUp">
          <Container className="Contacts__cont">
            <div className="Contacts__block1">
              <div className="row">
                <Col md={8} xs={12} className="Contacts__question">
                  <h1>Готовы оформить заказ или остались вопросы?</h1>
                  <p>Оставьте заявку. Мы свяжемся с вами и ответим на все возникшие вопросы</p>
                </Col>
                <Col md={4} xs={12} className="Contacts__form p-0">
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
                    {loading ? (
                      <LoaderHorizontal />
                    ) : (
                      <div className="Contact__buttonEl" onClick={handleSubmit((data) => onClickHandler(data))}>
                        Отправить заявку
                      </div>
                    )}
                  </Row>
                  <p className="pt-3">
                    Оставляя заявку, вы соглашаетесь с{' '}
                    <a href={`${Config.url}/polotic.pdf`} target="_blank">
                      политикой конфиденциальности
                    </a>
                  </p>
                </Col>
              </div>
            </div>
          </Container>
        </ScrollAnimation>

        <Container className="Contacts__cont Container2">
          <Row className="Contacts__Row m-0">
            <Col xl={6} className="Contacts__Col p-0">
              <h1 className="contactsHeader">Или свяжитесь с нами самостоятельно</h1>
            </Col>
          </Row>
          <Row className="Contacts__Row pt-5 m-0 justify-content-between align-items-center">
            <div className="Contacts__El phone">
              <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeIn" delay={100}>
                <a href="tel:89299250008">+7 (929) 925-00-08</a>
              </ScrollAnimation>
            </div>
            <div className="Contacts__El phone">
              <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeIn" delay={300}>
                <a href="tel:89608586777">+7 (960) 858-67-77</a>
              </ScrollAnimation>
            </div>
            <div className="Contacts__El mail">
              <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeIn" delay={500}>
                <a href="mailto:airmix_pods@mail.ru">airmix_pods@mail.ru</a>
              </ScrollAnimation>
            </div>
            <div className="Contacts__El">
              <ScrollAnimation animateOnce={true} offset={200} animateIn="animate__fadeIn" delay={700}>
                <a href={Config.socialLinks[0].url} target="_blank">
                  <img className="hvr-grow" src="/icons/wa.svg" alt="" />
                </a>
                <a href={Config.socialLinks[1].url} target="_blank">
                  <img className="pl-5 pr-5 hvr-grow" src="/icons/tg.svg" alt="" />
                </a>
                <a href={Config.socialLinks[2].url} target="_blank">
                  <img className="hvr-grow" src="/icons/insta.svg" alt="" />
                </a>
              </ScrollAnimation>
            </div>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}

const mapDispatchToProps = {
  setModalWindow,
}

export default connect(null, mapDispatchToProps)(Contacts)
