import React, { useEffect, useRef, useState } from 'react';
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
  DropdownMenu,
  DropdownItem,
} from './Header.styles';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Switch dark={darkMode} onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </Switch>
      <HeaderContainer>
        <Logo src={darkMode ? logoWhite : logoBlack} alt="Logo" />

        <UserGroup ref={dropdownRef}>
          <NameOccupation>
            <UserName>Louise Carnevali</UserName>
            <UserOccupation>Dev Front-end</UserOccupation>
          </NameOccupation>

          <div style={{ position: 'relative' }}>
            <UserAvatar
              src={avatar}
              alt="Avatar"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <DropdownMenu>
                <DropdownItem>Meu Perfil</DropdownItem>
                <DropdownItem>Configurações</DropdownItem>
                <DropdownItem>Sair</DropdownItem>
              </DropdownMenu>
            )}
          </div>
        </UserGroup>
      </HeaderContainer>
    </>
  );
};

export default Header;
