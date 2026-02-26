const musica = document.getElementById("musicaFundo");
const toggleMusicaBtn = document.getElementById("toggleMusica");

// Começa pausada
musica.pause();
musica.volume = 0.5; // volume médio

toggleMusicaBtn.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        toggleMusicaBtn.textContent = "🔊 Pausar Música";
    } else {
        musica.pause();
        toggleMusicaBtn.textContent = "🎵 Tocar Música";
    }
});
