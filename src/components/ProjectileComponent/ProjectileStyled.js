import styled, { css } from "styled-components";

export const Projectile = styled.img`
  position: absolute;
  transform: rotate(-90deg);
  width: 55px;
  height: 10px;
  top: ${(props) => props.customstyle.top};
  right: ${(props) => props.customstyle.right};
  bottom: ${(props) => props.customstyle.bottom};
  left: ${(props) => props.customstyle.left};
`;
