import React from 'react'
import Modal from 'react-modal'
import { TextInput } from '../common/TextInput'

const Register = ({ children, visible }) => {
  return (
    <Modal
      contentLabel="Sign Up"
      isOpen={visible}
      onRequestClose={() => {}}
    >
      <div className="container">
        <div>
          <h4>Don't worry it's free!</h4>
        </div>

        <div>
          {children}
        </div>
      </div>
    </Modal>
  )
}

export {Register}