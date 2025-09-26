import React from 'react';
import {
  CharacterRow,
  CharacterInfo,
  CharacterImage,
  CharacterName,
  InfoList,
} from './CharacterCard.styles';

function CharacterCard({ character, onClick }) {
  return (
    <CharacterRow onClick={onClick}>
      <CharacterInfo>
        <CharacterImage
          src={character.image || 'https://via.placeholder.com/60x60?text=-'}
          alt={character.name || '-'}
        />
        <CharacterName>{character.name || '-'}</CharacterName>
      </CharacterInfo>

      {/* Only on larger screens */}
      <InfoList>
        {character.series.length > 0 ? (
          character.series.slice(0, 3).map((s, i) => <li key={i}>{s}</li>)
        ) : (
          <li>-</li>
        )}
      </InfoList>

      <InfoList>
        {character.events.length > 0 ? (
          character.events.slice(0, 3).map((e, i) => <li key={i}>{e}</li>)
        ) : (
          <li>-</li>
        )}
      </InfoList>
    </CharacterRow>
  );
}

export default CharacterCard;
