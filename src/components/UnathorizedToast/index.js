import React from 'react'

import Toast from 'react-bootstrap/Toast'

export default function UnathorizedToast({setShow, show}) {
  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <h3 style={{color: 'red', fontWeight: 'bold'}}>Erro!</h3>
        </Toast.Header>
        <Toast.Body>Você não tem permissão para realizar essa ação.</Toast.Body>
    </Toast>
  )
}
