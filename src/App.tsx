import './App.scss'
import { Container, ModalDialog } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import { connect } from 'react-redux'
import { RootState } from './Redux'
import { setModalWindow } from './Redux/actions/modal'
import { ModalState, ToastState } from './Redux/interfaces/interfaces'
import ToastComponent from './SharedComponents/ToastComponent/ToastComponent'
import MobileMenu from './SharedComponents/MobileMenu/MobileMenu'
import ModalWindow from './SharedComponents/ModalWindow/ModalWindow'

interface AppProps {
  toast: ToastState
  modal: ModalState
  setModalWindow: any
}

const App = (props: AppProps) => {
  return (
    <Container fluid className="App p-0">

      <Switch>
        {/* <Route path="/admin" component={AdminLayout} /> */}
        <Route path="/" component={MainLayout} />
      </Switch>
    </Container>
  )
}

const mapDispatchToProps = {
  setModalWindow,
}

const mapStateToProps = (state: RootState) => {
  const toast = state.toast
  const modal = state.modal
  return {
    toast,
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
