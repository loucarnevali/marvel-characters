import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 660px) {
    margin: 0px 40px;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 2fr 2fr;
  padding: 20px 0px 0px 50px;
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  text-align: left;
  font-size: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 24px;

    div:nth-child(2),
    div:nth-child(3) {
      display: none;
    }
  }
`;

export const StatusMessage = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
