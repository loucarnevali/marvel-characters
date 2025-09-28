export const fetchCharacters = async (name = '') => {
  let url = `/api/marvel`;
  if (name) url += `?name=${encodeURIComponent(name)}`;

  const res = await fetch(url);
  if (!res.ok) {
    const data = await res.json();
    throw { status: res.status, message: data.message };
  }

  return res.json();
};
