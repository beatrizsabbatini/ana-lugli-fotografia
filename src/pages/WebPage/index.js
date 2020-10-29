import React from "react";
import About from "./sections/About";

import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Contact from "./sections/Contact";
import InstagramPosts from "./sections/InstagramPosts";
import { Container } from "./styles";

function WebPage() {

  return (
    <Container>
      <Banner />
      <Categories />
      <About />
      {/* <InstagramPosts />
      <Contact /> */}
    </Container>
  );
}



export default WebPage;
