import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import NavigationBar from "../../../../components/NavigationBar";
import BannerSlider from '../../../../components/BannerSlider';
import { getBannerItemsRequest } from "../../../../store/ducks/bannerItems";

function Banner() {
  const dispatch = useDispatch();
  const { items: bannerItems } = useSelector(state => state.bannerItems);

  useEffect(() => {
    dispatch(getBannerItemsRequest());
  }, [])

  console.log(bannerItems)

  return (
    <>
    <NavigationBar />
    <BannerSlider items={bannerItems} />
</>
  );
}

export default Banner;
