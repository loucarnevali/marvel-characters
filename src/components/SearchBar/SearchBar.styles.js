import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  width: 100%;

  @media (max-width: 375px) {
    align-items: center;
    margin: 1rem 0 3rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 375px) {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 295px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  pointer-events: none;
`;

export const Input = styled.input`
  padding: 8px 40px 8px 12px;
  width: 100%;
  font-size: 0.8rem;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border-color 0.2s;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.inputFocus};
    box-shadow: 0 0 5px ${(props) => props.theme.inputFocus};
  }
`;
