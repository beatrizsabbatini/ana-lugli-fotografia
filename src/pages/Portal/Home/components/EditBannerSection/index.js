import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Image, Button, Form } from 'react-bootstrap'

import { getBannerItemsRequest } from '../../../../../store/ducks/bannerItems';
import EditSectionTitle from '../../../../../components/EditSectionTitle';
import { BannerItemsContainer, ImageContainer, EditMessage, RowContainer, StyledButton } from './styles';
import ModalComponent from './ModalComponent';
import { getFiles } from '../../../../../services/searchFilesService';

export default function EditBannerSection() {
  const dispatch = useDispatch();
  const { items: bannerItems, loading } = useSelector(state => state.bannerItems);

  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [imageName, setImageName] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchBannetItems();
  }, [])

  const fetchBannetItems = () => {
    dispatch(getBannerItemsRequest());
  }

  return (
    <>
      <EditSectionTitle>Edição do Banner:</EditSectionTitle>
      {bannerItems && loading == false && (
        <>
          <BannerItemsContainer>
          {bannerItems.map(item => {
            return (
              <ImageContainer key={item._id} onClick={() => {
                setIsEdit(true);
                setCurrentItem(item);
                setShow(true);
                }}>
                {item.image ? (
                  <Image src={`http://localhost:3333/files/${item.image}`} thumbnail height={60} width={150} />
                ) :
                (
                  <Image src="holder.js/171x180" thumbnail height={60} width={150} />
                )}
                <EditMessage>Editar</EditMessage>
              </ImageContainer>
            )
          })}
        </BannerItemsContainer>
        <RowContainer>
          <StyledButton onClick={() => {
            setIsEdit(false);
            setCurrentItem({});
            setShow(true);
            }}>Adicionar Imagem do computador</StyledButton>
            <StyledButton 
            variant="light"
            onClick={() => setFormVisible(true) }>Buscar imagem do Banco de Dados</StyledButton>
          
        </RowContainer>
        {formVisible && (
          <Form.Group>
            <Form.Label>Pesquise nas fotos salvas no banco de dados:</Form.Label>
            <RowContainer>
              <Form.Control 
                style={{width: 500}}
                value={imageName}
                onChange={e => setImageName(e.target.value)}
                type="text" 
                placeholder='Digite um nome de arquivo'
              />
              <Button variant="primary" style={{marginLeft: 20}} onClick={() => getFiles(imageName)}>
                Pesquisar
              </Button>
              <Button variant="danger" style={{marginLeft: 20}} onClick={() => setFormVisible(false)}>
                Cancelar
              </Button>
            </RowContainer>
        </Form.Group>
        )}
      </>
      )}
      <ModalComponent show={show} setShow={setShow} isEdit={isEdit} item={currentItem} />
    </>
  )
}
