import styled from "@emotion/styled";
import React from "react";

import featuredImage from "../images/headshot2017_bw2.png";

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  img {
    width: 50%;
    margin: 0;
  }
`;

const FeaturedImage = () => (
  <ImgWrapper>
    <div>© 2021 Thomas Constantine Moore</div>
    <img src={featuredImage}></img>
  </ImgWrapper>
);
export default FeaturedImage;
