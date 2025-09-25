import styled from 'styled-components';

export const CharacterRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  gap: 12px;
  align-items: center;
  padding: 20px 0px 20px 50px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${(props) => props.theme.text};
  text-align: left;
  box-shadow: ${({ theme }) => theme.boxShadow};

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    transform: translateY(-2px);
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    padding: 12px;
  }
`;

export const CharacterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 50px;
`;

export const CharacterImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
`;

export const CharacterName = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const InfoList = styled.ul`
  font-size: 0.8rem;

  @media (max-width: 660px) {
    display: none;
  }
`;
