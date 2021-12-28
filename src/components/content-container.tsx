import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Courier New", serif;
  margin-left: 20px;
  height: 100%;
  p {
    font-size: 1.2em;
    line-height: 1.5em;
    a {
      text-decoration: underline !important;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
