import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../../Redux'
import { ModalState } from '../../../../Redux/interfaces/interfaces'
import AirmixRequest from '../../../../SharedComponents/AirmixRequest/AirmixRequest'
import AirmixSuccess from '../../../../SharedComponents/AirmixSuccess/AirmixSuccess'
import Certificate from '../Components/Certificate/Certificate'
import Contacts from '../Components/Contacts/Contacts'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import Block3 from './Block3/Block3'
import Block4 from './Block4/Block4'
import './Main.scss'
import Underline from './Underline/Underline'

interface MainProps {
  modal: ModalState
}

const Main = (props: MainProps) => {
    return (
      <Container fluid className="Main p-0">

        {props.modal.modalRequestForm.isActive && <AirmixRequest />}
        {props.modal.modalWindow.isActive && <AirmixSuccess />}

        <Underline />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Certificate />
        <Contacts />
      </Container>
    )
}

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)