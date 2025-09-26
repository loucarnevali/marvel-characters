import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  h3 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  ul {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: relative;
  top: -1.5rem;
  right: -100%;
  width: 22px;
  border-radius: 4px;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
