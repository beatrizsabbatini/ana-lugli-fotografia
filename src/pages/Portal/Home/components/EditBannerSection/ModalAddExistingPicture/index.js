import React, { useState } from 'react'
import { Button, Modal, Image, Form } from 'react-bootstrap'
import { createBannerItem, createBannerItemWithExistingFile } from '../../../../../../services/bannerService';

export default function ModalAddExistingPicture({visible, setVisible, item, setToastVisible}) {
  const [title, setTitle] = useState('');

  const handleClose = () => {
    setVisible(false);
  }

  const handleCreateBannerItem = async () => {
    
    createBannerItemWithExistingFile(title, item).then(() => {
      setVisible(false);
      window.location.reload(false);
    }).catch(err => {
      if (err.response.status === 401){
        setVisible(false);
        setToastVisible(true);
      }
    })
  }

  return (
    <Modal show={visible} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Adicionar item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Image src={`https://backend-ana-lugli-fotografia.herokuapp.com/files/${item}`} width="100%" />
    <Form style={{marginTop: 20}}>
      <Form.Group>
        <Form.Label>Título</Form.Label>
        <Form.Control 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Digite um título"
        />
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleCreateBannerItem}>
        Salvar
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
