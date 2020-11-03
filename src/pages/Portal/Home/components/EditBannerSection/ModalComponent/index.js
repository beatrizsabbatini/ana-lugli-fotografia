import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { Modal, Button, Form, Image } from 'react-bootstrap';

import { createBannerItem, deleteBannerItem, updateBannerItem } from '../../../../../../services/bannerService';

export default function ModalComponent({show, setShow, isEdit, item, setToastVisible}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    setTitle('')
  }, [])

  const handleClose = () => {
    setShow(false);
  }

  const handleDelete = () => {

      deleteBannerItem(item._id).then(() => {
        setShow(false);
        window.location.reload(false);
      }).catch(err => {
        if (err.response.status === 401){
          setShow(false);
          setToastVisible(true);
        }
      })
  }

  const handleUpdateBannerItem = async () => {

      updateBannerItem(item._id, title).then(() => {
        setShow(false);
        window.location.reload(false);
      })
      .catch(err => {
        if (err.response.status === 401){
          setShow(false);
          setToastVisible(true);
        }
      })

  }

  const handleCreateBannerItem = async () => {
    
    createBannerItem(title, image).then(() => {
      setShow(false);
      window.location.reload(false);
    })
    .catch(err => {
      if (err.response.status === 401){
        setShow(false);
        setToastVisible(true);
      }
    })
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
          <Form.Group>
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
