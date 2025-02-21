import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;
  
  ${({ removed }) => css`
    opacity: ${removed ? 0.3 : 1};
    color: ${removed ? '#F00' : '#FFF'};
  `}
`

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;