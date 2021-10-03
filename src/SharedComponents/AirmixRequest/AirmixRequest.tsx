import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { connect } from 'react-redux'
import FormDataIface from '../../Redux/interfaces/AdditionalInterfaces/FormDataIface'
import './AirmixRequest.scss'
import { hideRequestModal, setModalWindow } from '../../Redux/actions/modal'
import axios from 'axios'
import { Config } from '../../Config/Config'
import LoaderHorizontal from '../LoaderHorizontal/LoaderHorizontal'

interface AirmixRequestProps {
  hideRequestModal: () => void
  setModalWindow: (isActive: boolean) => void
}

const AirmixRequest = (props: AirmixRequestProps) => {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    bodyBlock()
  }, [])

  const bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const closeButtonHandler = (): void => {
    bodyUnBlock()
    props.hideRequestModal()
  }

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
          props.hideRequestModal()
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
    <div className="AirmixRequest d-flex justify-content-center align-items-center">
      <div className="AirmixRequest__window animated animate__fadeInUpBig">
        <Row className="AirmixRequest__closeRow m-0 d-flex justify-content-end">
          <div className="AirmixRequest__closeCont">
            <img src="/icons/exit.svg" alt="" onClick={() => closeButtonHandler()} />
          </div>
        </Row>
        <Row className="AirmixRequest__content m-0 justify-content-center align-items-center">
          <h3>Оставьте заявку</h3>
          <p>Мы свяжемся с вами и ответим на все ваши вопросы</p>

          <div className="Contacts__form">
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
                  Отправить
                </div>
              )}
            </Row>
          </div>

          <h6>
            Оставляя заявку, вы соглашаетесь{' '}
            <a href={`${Config.url}/polotic.pdf`} target="_blank">
              политикой конфиденциальности
            </a>
          </h6>
        </Row>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  hideRequestModal,
  setModalWindow,
}

export default connect(null, mapDispatchToProps)(AirmixRequest)
