console.log(document);

console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFechar = document.querySelector(".fechar-modal");
const video =document.getElementById("video");


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
});

botaoFechar.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});

