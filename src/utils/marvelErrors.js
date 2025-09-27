export const getMarvelErrorMessage = (status, message) => {
  switch (status) {
    case 401:
      return 'Acesso negado. Verifique a chave da API.';
    case 403:
      return 'Requisição proibida.';
    case 409:
      return 'Chave ou hash da API faltando ou inválido.';
    case 405:
      return 'Método não permitido.';
    default:
      return message || 'Ocorreu um erro ao buscar os personagens.';
  }
};
