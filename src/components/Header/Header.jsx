import React from 'react';
import logoBlack from '../../assets/logo-black.svg';
import logoWhite from '../../assets/logo-white.svg';
import avatar from '../../assets/dog-icon.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';

import {
  HeaderContainer,
  Logo,
  UserGroup,
  NameOccupation,
  UserName,
  UserOccupation,
  UserAvatar,
  Switch,
} from './Header.styles';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Switch dark={darkMode} onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </Switch>
      <HeaderContainer>
        <Logo src={darkMode ? logoWhite : logoBlack} alt="Logo" />
        <UserGroup>
          <NameOccupation>
            <UserName>Louise Carnevali</UserName>
            <UserOccupation>Dev Front-end</UserOccupation>
          </NameOccupation>
          <UserAvatar src={avatar} alt="Avatar" />
        </UserGroup>
      </HeaderContainer>
    </>
  );
};

export default Header;
