# Marvel Characters Explorer

Aplicação desenvolvida em **React + Vite**, que consome a **API da Marvel** para listar e buscar personagens.  
O projeto utiliza **rotas serverless (Vercel Functions)** para proteger a chave da API e permitir o deploy simples na Vercel.

## Preview

[Deploy no Vercel](https://marvel-characters-wpr3.vercel.app/) 


## Tecnologias utilizadas

- React + Vite
- Styled Components
- Vercel Serverless Functions
- Marvel API

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/marvel-app.git
cd marvel-app
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto com:
*essas chaves você consegue no: https://developer.marvel.com/

```bash
MARVEL_PUBLIC_KEY=sua_chave_publica
MARVEL_PRIVATE_KEY=sua_chave_privada
```
4. Rode o projeto

```bash
npm run dev
```
