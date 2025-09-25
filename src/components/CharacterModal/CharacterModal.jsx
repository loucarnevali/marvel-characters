import React from 'react';
import { Backdrop, CloseButton, ModalContent } from './CharacterModal.styles';

function CharacterModal({ character, onClose }) {
  if (!character) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <img src={character.image} alt={character.name} />
        <h2>{character.name || '-'}</h2>

        <h3>Séries:</h3>
        <ul>
          {character.series.length > 0 ? (
            character.series.slice(0, 5).map((s, i) => <li key={i}>{s}</li>)
          ) : (
            <li>-</li>
          )}
        </ul>

        <h3>Eventos:</h3>
        <ul>
          {character.events.length > 0 ? (
            character.events.slice(0, 5).map((e, i) => <li key={i}>{e}</li>)
          ) : (
            <li>-</li>
          )}
        </ul>
      </ModalContent>
    </Backdrop>
  );
}

export default CharacterModal;
