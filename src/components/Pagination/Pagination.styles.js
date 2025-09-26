import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const PageButton = styled.button`
  padding: ${({ isArrow }) => (isArrow ? '0' : '0.5rem 1rem')};
  font-size: ${({ isArrow }) => (isArrow ? '1.5rem' : '0.9rem')};

  background-color: ${({ active, isArrow, theme }) =>
    active ? theme.primary : isArrow ? 'transparent' : theme.pageBg};

  color: ${({ active, isArrow, theme }) =>
    active ? '#fff' : isArrow ? theme.arrowColor : theme.text};

  border: ${({ isArrow, active, theme }) =>
    isArrow
      ? 'none'
      : `1px solid ${active ? theme.primary : theme.pageBorder}`};

  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active, isArrow, theme }) =>
      active ? theme.primary : isArrow ? 'transparent' : theme.pageHover};

    color: ${({ active, isArrow, theme }) =>
      active ? '#fff' : isArrow ? theme.primary : '#fff'};

    border-color: ${({ active, isArrow, theme }) =>
      active ? theme.primary : isArrow ? 'none' : theme.pageHover};
  }
`;
