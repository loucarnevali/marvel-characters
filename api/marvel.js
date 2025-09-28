import crypto from 'crypto';

export default async function handler(req, res) {
  const { name = '' } = req.query;

  const publicKey = process.env.MARVEL_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_KEY;

  if (!publicKey || !privateKey) {
    return res.status(500).json({ message: 'Chaves da API não definidas' });
  }

  const ts = new Date().getTime();
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  const url = new URL('https://gateway.marvel.com/v1/public/characters');
  url.searchParams.set('ts', ts);
  url.searchParams.set('apikey', publicKey);
  url.searchParams.set('hash', hash);
  if (name) url.searchParams.set('nameStartsWith', name);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();

    const characters = data.data.results.map((char) => ({
      id: char.id,
      name: char.name,
      image: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      series: char.series.items.map((s) => s.name),
      events: char.events.items.map((e) => e.name),
    }));

    return res.status(200).json(characters);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno na API' });
  }
}
