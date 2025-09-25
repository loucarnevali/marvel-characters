import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Container, HeaderRow } from './CharacterContainer.styles';
import CharacterModal from '../CharacterModal/CharacterModal';
import Pagination from '../Pagination/Pagination';

function CharactersContainer() {
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

  const itemsPerPage = 4;
  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const charactersToShow = characters.slice(startIndex, endIndex);

  return (
    <Container>
      <HeaderRow>
        <div>Personagem</div>
        <div>Séries</div>
        <div>Eventos</div>
      </HeaderRow>

      {charactersToShow.map((char) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}

export default CharactersContainer;
