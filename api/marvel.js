import express from 'express';
import fetch from 'node-fetch';
import crypto from 'crypto';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

const port = 5174;

app.get('/api/marvel', async (req, res) => {
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
    if (!response.ok) {
      return res.status(response.status).json({ message: data.status });
    }

    const characters = data.data.results.map((char) => ({
      id: char.id,
      name: char.name,
      image: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      series: char.series.items.map((s) => s.name),
      events: char.events.items.map((e) => e.name),
    }));

    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno na API' });
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
