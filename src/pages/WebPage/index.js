import React from "react";
import { useHistory } from "react-router-dom";
import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import { Container, Title } from "./styles";

function WebPage() {
  const history = useHistory();
  return (
    <Container>
      <Banner />
      {/* <Categories /> */}
    </Container>
  );
}

export default WebPage;
