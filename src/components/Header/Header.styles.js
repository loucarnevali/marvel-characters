import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;

  @media (max-width: 660px) {
    padding: 3rem 1rem 1rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 130px;

  @media (max-width: 660px) {
    height: 35px;
  }
`;

export const UserGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 660px) {
    gap: 0.8rem;
  }
`;

export const NameOccupation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0rem;
    flex-wrap: wrap;
    min-width: 0;
    max-width: 200px;
  }
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const UserOccupation = styled.span`
  font-size: 14px;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
  background-color: #f5f5f5;

  @media (max-width: 660px) {
    width: 40px;
    height: 40px;
  }
`;

export const Switch = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => (props.dark ? '#333' : '#ddd')};
  color: ${(props) => (props.dark ? '#fff' : '#000')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  font-size: 1rem;

  @media (max-width: 660px) {
    top: 0.5rem;
    right: 1rem;
  }
`;
