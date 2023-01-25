const fecharModal = document.querySelector(".fechar-modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
    video.setAttribute("src", linkDoVideo);
});





