import * as React from "react";
import styled from "@emotion/styled";

const A = styled.a`
  color: black;
  text-decoration: underline !important;
`;

export const OutLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = (props) => (
  <A {...props} target="_blank" rel="noref">
    {props.children}
  </A>
);
