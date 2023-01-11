import styled, { css } from "styled-components";

export const Tower = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: ${(props) => props.customstyle.top};
  right: ${(props) => props.customstyle.right};
  bottom: ${(props) => props.customstyle.bottom};
  left: ${(props) => props.customstyle.left};
`;
