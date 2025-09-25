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
  grid-template-columns: 3fr 2fr 2fr;
  padding: 20px 0px 0px 50px;
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  text-align: left;
  font-size: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    div:nth-child(2),
    div:nth-child(3) {
      display: none;
    }
  }
`;
