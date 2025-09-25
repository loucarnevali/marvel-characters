import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Container, HeaderRow } from './CharacterContainer.styles';
import CharacterModal from '../CharacterModal/CharacterModal';

function CharactersContainer() {
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);

  useEffect(() => {
    const publicKey = '2ffb5aacf55e1ae022425812efd6c255';
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=10`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const chars = data.data.results.map((char) => ({
          id: char.id,
          name: char.name,
          image: `${char.thumbnail.path}.${char.thumbnail.extension}`,
          series: char.series.items.map((s) => s.name),
          events: char.events.items.map((e) => e.name),
        }));
        setCharacters(chars);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!characters || characters.length === 0) {
    return <p>Carregando personagens...</p>;
  }

  return (
    <Container>
      <HeaderRow>
        <div>Personagem</div>
        <div>Séries</div>
        <div>Eventos</div>
      </HeaderRow>

      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          onClick={() => setSelectedChar(char)}
        />
      ))}

      <CharacterModal
        character={selectedChar}
        onClose={() => setSelectedChar(null)}
      />
    </Container>
  );
}

export default CharactersContainer;
