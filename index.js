const handleSearch = async (event) => {
  event.preventDefault();

  const texto = document.getElementById("query");
  const shows = document.getElementById("shows");
  const message = document.querySelector('#message');
  shows.innerHTML = '';
  message.innerHTML = 'Procurando.';

  const endpoint = `https://api.tvmaze.com/search/shows?q=${texto.value}`
  const resposta = await fetch (endpoint);
  const show = await resposta.json();

  if (show.length === 0) {

    message.innerHTML = 'Não encontrado'
    return;
  }

message.innerHTML = '';

show.forEach((entry) => {

  shows.insertAdjacentHTML(
    'BEFOREEND',
    `<li>
        <img class="poster" src="${entry?.show?.image?.medium || ''}" />
        <span class="show-name">${entry?.show?.name || ''}</span>
        </li>`);
});
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
