const botaoMensagem = document.getElementById("mensagemBtn");
const areaMensagem = document.getElementById("mensagem");
const textoDaMensagem =
  "✨ If every man says all he can,\nIf every man is true,\nDo I believe the sky above,\nIs Caribbean blue? ✨";
const textoBotaoVerMensagem = "Clique para ver a mensagem!";
const textoBotaoOcultarMensagem = "Clique para fechar a mensagem.";

let mostrandoMensagem = false;

botaoMensagem.textContent = textoBotaoVerMensagem;

// ............Evento de clique............
// Se o usuário clica no botão, ele exibe a letra da música e altera seu texto.
// Ao clicar novamente, a música é ocultada e o texto do botão alterado.
botaoMensagem.addEventListener("click", function () {
  if (mostrandoMensagem) {
    areaMensagem.textContent = "";
    areaMensagem.style.display = "none";
    botaoMensagem.textContent = textoBotaoVerMensagem;
    mostrandoMensagem = false;
  } else {
    areaMensagem.textContent = textoDaMensagem;
    areaMensagem.style.display = "block";
    botaoMensagem.textContent = textoBotaoOcultarMensagem;
    mostrandoMensagem = true;
  }
});
