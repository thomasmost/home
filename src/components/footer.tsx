import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-height: 100px;
  transition: 0.5s;
  div {
    line-height: 2em;
  }
  img {
    width: 33%;
    max-width: 400px;
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;
