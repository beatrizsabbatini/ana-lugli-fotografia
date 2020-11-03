import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Image, Button } from 'react-bootstrap'

import { getBannerItemsRequest, getBannerItemsSuccess } from '../../../../../store/ducks/bannerItems';
import EditSectionTitle from '../../../../../components/EditSectionTitle';
import { BannerItemsContainer, ImageContainer, EditMessage } from './styles';
import ModalComponent from './ModalComponent';

export default function EditBannerSection() {
  const dispatch = useDispatch();
  const { items: bannerItems, loading } = useSelector(state => state.bannerItems);

  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState();

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
        <Button onClick={() => {
          setIsEdit(false);
          setCurrentItem({});
          setShow(true);
          }}>Adicionar Item</Button>
        <ModalComponent show={show} setShow={setShow} isEdit={isEdit} item={currentItem} />
      </>
      )}
    </>
  )
}
