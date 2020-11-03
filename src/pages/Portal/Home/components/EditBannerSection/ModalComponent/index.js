import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { Modal, Button, Form, Image } from 'react-bootstrap';
import { createBannerItem, deleteBannerItem, updateBannerItem } from '../../../../../../services/bannerService';

export default function ModalComponent({show, setShow, isEdit, item}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    setTitle('')
  }, [])

  const handleClose = () => {
    setShow(false);
  }

  const handleDelete = () => {

    try {
      deleteBannerItem(item._id);
    } catch(err){
      console.log(err)
    }

    setShow(false);
    window.location.reload(false);
  }

  const handleUpdateBannerItem = () => {

    try {
      updateBannerItem(item._id, title);
    } catch(err){
      console.log(err)
    }

    setShow(false);
    window.location.reload(false);
  }

  const handleCreateBannerItem = () => {
    
    try {
      createBannerItem(title, image);
    } catch(err){
      console.log(err)
    }

    setShow(false);
    // window.location.reload(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? 'Editar' : 'Adicionar'} item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {isEdit && (<Image src={`http://localhost:3333/files/${item.image}`} width="100%" />)}
        {!isEdit && (
          <>
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Upload de Arquivo</Form.File.Label>
              <Form.File.Input  onChange={(e) => setImage(e.target.files[0])} />
            </Form.File>
            
          </>
        )}
        <Form style={{marginTop: 20}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control 
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" 
              placeholder={isEdit ? item.title : 'Digite um título'}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          {isEdit && (
             <Button variant="danger" onClick={handleDelete}>
             Deletar este item
           </Button>
          )}
          <Button variant="primary" onClick={() => {
            if (isEdit){
              handleUpdateBannerItem()
            } else {
              handleCreateBannerItem()
            }
          }}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
