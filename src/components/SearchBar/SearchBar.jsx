import React from 'react';
import searchIcon from '../../assets/search.svg';
import {
  SearchContainer,
  Title,
  Label,
  Input,
  InputWrapper,
  SearchIcon,
} from './SearchBar.styles';

function SearchBar({ value, onChange }) {
  return (
    <SearchContainer>
      <Title>Busca de personagens</Title>
      <Label>Nome do personagem</Label>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <SearchIcon src={searchIcon} alt="Buscar" />
      </InputWrapper>
    </SearchContainer>
  );
}

export default SearchBar;
