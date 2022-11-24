import React from 'react'
import { Header } from './Header'
import { Modal } from './Modal'
import { Information } from './Information'
import { useModal } from './useModal'
import './App.scss'


function App() {
  const [isOpenModalLogin, openModalLogin, closeModalLogin] = useModal(false)

  return (
    <React.Fragment>
      <Header isOpen={openModalLogin}/>
      <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}/>
      <Information/>
    </React.Fragment>
  )
}

export default App
