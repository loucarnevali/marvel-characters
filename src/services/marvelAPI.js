let cachedCharacters = null;

export const fetchCharacters = async (name = '') => {
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const url = new URL('https://gateway.marvel.com/v1/public/characters');
  url.searchParams.set('apikey', publicKey);

  if (name) url.searchParams.set('nameStartsWith', name);

  // if there is no name and have characters in the cache, it returns cache
  if (!name && cachedCharacters) return cachedCharacters;

  const res = await fetch(url.toString());

  if (!res.ok) {
    const data = await res.json();
    throw { status: res.status, message: data.status };
  }

  const data = await res.json();
  const characters = data.data.results.map((char) => ({
    id: char.id,
    name: char.name,
    image: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    series: char.series.items.map((s) => s.name),
    events: char.events.items.map((e) => e.name),
  }));

  // store in cache only when there is no search filter
  if (!name) cachedCharacters = characters;

  return characters;
};
