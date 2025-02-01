let amigos = [];

function adicionarAmigo() {
  const input = document.querySelector("amigo");
  const nome = input.value;

  // Validação: se o campo estiver vazio, exibe um alerta pedindo para inserir um amigo.
  if (nome === "") {
    alert("Por favor, insira o nome do amigo");
    return;
  }

  amigos.push(nome);

  input.value = "";

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    lista.innerHTML += `<li>${amigo}</li>`;
  });
}
