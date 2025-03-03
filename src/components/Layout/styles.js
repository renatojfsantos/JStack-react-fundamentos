import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme}) => theme.headerBackgroundColor};
  margin-top: ${({ theme }) => theme.spacing.medium}px;
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: ${({ theme }) => theme.borderRadius};

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: ${({ theme }) => theme.spacing.medium}px;
    }
  }
`