import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import {
  Container,
  HeaderRow,
  StatusMessage,
} from './CharacterContainer.styles';
import CharacterModal from '../CharacterModal/CharacterModal';
import Pagination from '../Pagination/Pagination';
import { getMarvelErrorMessage } from '../../utils/marvelErrors';
import { fetchCharacters } from '../../services/marvelAPI';
import Skeleton from '../../utils/Skeleton';

const CharactersContainer = ({ search }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const itemsPerPage = 4;

  // load all characters
  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      setStatusMessage('');
      try {
        const chars = await fetchCharacters();
        setAllCharacters(chars);
        setCharacters(chars);
      } catch (err) {
        console.error(err);
        setStatusMessage(getMarvelErrorMessage(err.status, err.message));
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  // filter locally
  useEffect(() => {
    if (!search) {
      setCharacters(allCharacters);
      setStatusMessage('');
    } else {
      const filtered = allCharacters.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase()),
      );
      setCharacters(filtered);
      setStatusMessage(
        filtered.length === 0 ? 'Nenhum personagem encontrado.' : '',
      );
      setCurrentPage(1);
    }
  }, [search, allCharacters]);

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

      {loading ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : statusMessage ? (
        <StatusMessage>{statusMessage}</StatusMessage>
      ) : (
        charactersToShow.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => setSelectedChar(char)}
          />
        ))
      )}

      <CharacterModal
        character={selectedChar}
        onClose={() => setSelectedChar(null)}
      />

      {!loading && characters.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default CharactersContainer;
