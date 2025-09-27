// let cachedCharacters = null;

export const fetchCharacters = async (name = '') => {
  const url = new URL('http://localhost:5174/api/marvel');
  if (name) url.searchParams.set('name', name);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || 'Erro ao carregar personagens');
  }

  return res.json();
};
