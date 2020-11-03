import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Image, Button, Form } from 'react-bootstrap'

import { getBannerItemsRequest } from '../../../../../store/ducks/bannerItems';
import EditSectionTitle from '../../../../../components/EditSectionTitle';
import { BannerItemsContainer, ImageContainer, EditMessage, RowContainer, StyledButton, Separator, ToastContainer } from './styles';
import ModalComponent from './ModalComponent';
import { getFilteredFilesRequest } from '../../../../../store/ducks/fileSearch';
import ModalAddExistingPicture from './ModalAddExistingPicture';
import UnathorizedToast from '../../../../../components/UnathorizedToast';

export default function EditBannerSection() {
  const dispatch = useDispatch();
  const { items: bannerItems, loading } = useSelector(state => state.bannerItems);
  const { files } = useSelector(state => state.fileSearch);

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [imageName, setImageName] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    fetchBannetItems();
  }, [])

  const fetchBannetItems = () => {
    dispatch(getBannerItemsRequest());
  }

  const handleSearch = () => {
    dispatch(getFilteredFilesRequest(imageName));
  }
  
  useEffect(() => {
    if (files) console.log(files)
  }, [files])

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
                  <Image src={`https://backend-ana-lugli-fotografia.herokuapp.com/files/${item.image}`} thumbnail height={60} width={150} />
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
        <Separator />
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
              <Button variant="primary" style={{marginLeft: 20}} onClick={handleSearch}>
                Pesquisar
              </Button>
              <Button variant="danger" style={{marginLeft: 20}} onClick={() => setFormVisible(false)}>
                Cancelar
              </Button>
            </RowContainer>
            {files && files.map((item, index) => {
              return (
                <div key={index}>
                  <RowContainer >
                    <ImageContainer>
                      <Image src={`https://backend-ana-lugli-fotografia.herokuapp.com/files/${item}`} thumbnail height={60} width={150} />
                    </ImageContainer>
                    <Button style={{height: 50}} onClick={() => setVisible(true)}>Adicionar esta imagem ao Banner</Button>
                  </RowContainer>
                  <ModalAddExistingPicture setToastVisible={setToastVisible} visible={visible} setVisible={setVisible} item={item} />
                </div>
              )
            })}
        </Form.Group>
        )}
      </>
      )}
      <ModalComponent show={show} setShow={setShow} isEdit={isEdit} item={currentItem} setToastVisible={setToastVisible} />
      <ToastContainer>
        <UnathorizedToast show={toastVisible} setShow={setToastVisible} />
      </ToastContainer>
    </>
  )
}
