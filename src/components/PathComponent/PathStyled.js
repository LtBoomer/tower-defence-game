import styled, { css } from "styled-components";

export const Box = styled.div`
  width: ${(props) => props.customStyle.width};
  height: ${(props) => props.customStyle.height};
  background: brown;
  position: absolute;
  top: ${(props) => props.customStyle.top};
  right: ${(props) => props.customStyle.right};
  bottom: ${(props) => props.customStyle.bottom};
  left: ${(props) => props.customStyle.left};
`;
