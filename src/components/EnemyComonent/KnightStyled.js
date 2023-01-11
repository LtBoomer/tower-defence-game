import styled, { css } from "styled-components";

export const Knight = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: scaleX(-1);
  top: ${(props) => props.customstyle.top};
  right: ${(props) => props.customstyle.right};
  bottom: ${(props) => props.customstyle.bottom};
  left: ${(props) => props.customstyle.left};
  display: ${(props) => (props.customstyle.dead ? "none" : "default")};
  trandsitionduration: 3s;
`;
