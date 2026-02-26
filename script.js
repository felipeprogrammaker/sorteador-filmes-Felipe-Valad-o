// Lista de filmes com poster
const filmes = [
    { titulo: "Shrek", genero: "Comédia", sinopse: "Um ogro que embarca em uma aventura para salvar uma princesa.", imagem: "https://upload.wikimedia.org/wikipedia/pt/5/5d/Shrek.jpg" },
    { titulo: "Interestelar", genero: "Ficção", sinopse: "Exploração espacial em busca de um novo lar para a humanidade.", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bc/Interstellar_film_poster.jpg" },
    { titulo: "It - A Coisa", genero: "Terror", sinopse: "Um grupo de crianças enfrenta um palhaço aterrorizante.", imagem: "https://upload.wikimedia.org/wikipedia/pt/5/55/IT2017poster.jpg" },
    { titulo: "Titanic", genero: "Romance", sinopse: "Uma história de amor a bordo de um navio trágico.", imagem: "https://upload.wikimedia.org/wikipedia/pt/f/fd/Titanic_poster.jpg" },
    { titulo: "Deadpool", genero: "Comédia", sinopse: "Um anti-herói irreverente busca vingança e diversão.", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/77/Deadpool_poster.jpg" },
    { titulo: "A Origem", genero: "Ficção", sinopse: "Um ladrão invade sonhos para plantar ideias.", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Inception_ver3.jpg" },
    { titulo: "O Exorcista", genero: "Terror", sinopse: "Uma menina é possuída por uma entidade maligna.", imagem: "https://upload.wikimedia.org/wikipedia/pt/5/55/O_Exorcista.jpg" },
    { titulo: "Diário de uma Paixão", genero: "Romance", sinopse: "Amor duradouro enfrentando desafios da vida.", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Notebook.jpg" }
];

// Sugestões de comidas com emoji
const comidas = {
    "Comédia": ["🍿 Pipoca", "🥤 Refrigerante", "🌮 Nachos"],
    "Ficção": ["🌮 Nachos", "🍹 Suco de frutas", "🍟 Batata frita"],
    "Terror": ["🍫 Chocolate amargo", "⚡ Energético", "🍕 Pizza"],
    "Romance": ["🍓 Morangos", "🍷 Vinho", "🍫 Chocolate"]
};

// Elementos do DOM
const sortearBtn = document.getElementById("sortearBtn");
const filmeSorteado = document.getElementById("filmeSorteado");
const tituloFilme = document.getElementById("tituloFilme");
const sinopseFilme = document.getElementById("sinopseFilme");
const generoFilme = document.getElementById("generoFilme");
const imagemFilme = document.getElementById("imagemFilme");
const comidasSugeridas = document.getElementById("comidasSugeridas");
const listaComidas = document.getElementById("listaComidas");
const cardsContainer = document.querySelector(".cards-container");

// Função para sortear filme
sortearBtn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * filmes.length);
    const filme = filmes[index];

    tituloFilme.textContent = filme.titulo;
    sinopseFilme.textContent = filme.sinopse;
    generoFilme.textContent = filme.genero;
    imagemFilme.src = filme.imagem;
    imagemFilme.alt = `Poster de ${filme.titulo}`;
    filmeSorteado.classList.remove("hidden");

    // Comidas
    listaComidas.innerHTML = "";
    comidas[filme.genero].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("comida-item");
        div.textContent = item;
        listaComidas.appendChild(div);
    });
    comidasSugeridas.classList.remove("hidden");

    // Animação simples
    filmeSorteado.style.transform = "scale(0.9)";
    setTimeout(() => filmeSorteado.style.transform = "scale(1)", 100);
});

// Gerar cards de filmes completos
filmes.forEach(filme => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${filme.imagem}" alt="Poster de ${filme.titulo}">
        <h3>${filme.titulo}</h3>
        <p><strong>Gênero:</strong> ${filme.genero}</p>
        <p>${filme.sinopse}</p>
        <p><strong>Comidas:</strong> ${comidas[filme.genero].join(", ")}</p>
    `;
    cardsContainer.appendChild(card);
});

// Música de fundo com fade
const musica = document.getElementById("musicaFundo");
const toggleMusicaBtn = document.getElementById("toggleMusica");

musica.volume = 0;

function fadeIn(audio, duracao = 2000) {
    let passo = 50;
    let incremento = passo / duracao;
    audio.play();
    let fade = setInterval(() => {
        if (audio.volume < 1) audio.volume = Math.min(audio.volume + incremento, 1);
        else clearInterval(fade);
    }, passo);
}

function fadeOut(audio, duracao = 2000) {
    let passo = 50;
    let decremento = passo / duracao;
    let fade = setInterval(() => {
        if (audio.volume > 0) audio.volume = Math.max(audio.volume - decremento, 0);
        else { audio.pause(); clearInterval(fade); }
    }, passo);
}

toggleMusicaBtn.addEventListener("click", () => {
    if (musica.paused || musica.volume === 0) {
        fadeIn(musica, 2000);
        toggleMusicaBtn.textContent = "🔊 Pausar Música";
    } else {
        fadeOut(musica, 2000);
        toggleMusicaBtn.textContent = "🎵 Tocar Música";
    }
});