import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import FormDataIface from '../../Redux/interfaces/AdditionalInterfaces/FormDataIface'
import './AirmixSuccess.scss'
import { setModalWindow } from '../../Redux/actions/modal'

interface AirmixSuccessProps {
  setModalWindow: (isActive: boolean) => void
}

const AirmixSuccess = (props: AirmixSuccessProps) => {
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
    props.setModalWindow(false)
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

  const sendFormData = (data: FormDataIface): void => {
    console.log(data)
  }

  return (
    <div className="AirmixSuccess d-flex justify-content-center align-items-center">
      <div className="AirmixSuccess__window">
        <Row className="AirmixSuccess__closeRow m-0 d-flex justify-content-end">
          <div className="AirmixSuccess__closeCont">
            <img src="/icons/exit.svg" alt="" onClick={() => closeButtonHandler()} />
          </div>
        </Row>
        <Row className="AirmixSuccess__content m-0 justify-content-center align-items-center">
          <h3>Спасибо за заявку!</h3>
          <p>В ближайшее время мы свяжемся с вами</p>

          <div className="Contact__buttonEl" onClick={() => closeButtonHandler()}>
            Вернуться на сайт
          </div>
        </Row>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setModalWindow,
}

export default connect(null, mapDispatchToProps)(AirmixSuccess)
