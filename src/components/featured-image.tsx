import styled from "@emotion/styled";
import React from "react";

import featuredImage from "../images/headshot2017_crop.png";

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  img {
    width: 50%;
    max-width: 400px;
    margin: 0;
  }
`;

const FeaturedImage = () => <img src={featuredImage}></img>;
export default FeaturedImage;
