import styled from "styled-components";

export const ItemInfo = styled.p`
  color: var(--text);
  font-size: 24px;
`;

export const ItemBox = styled.div`
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #366bf3, rgba(0, 0, 0, 0));
  padding: 20px;
  width: 235px;
  height: 120px;
`;
