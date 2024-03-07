// cursor animation
function cursor() {
    let cursor = document.querySelector('#cursor');
    let body = document.querySelector('body');

    body.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x + "px",
            y: e.y + "px", 
        });
    });
}
cursor();

// section1 abertura animation
function section1() {
    
    let tl = gsap.timeline();
    tl.from(".header", {
        y: -50,
        opacity: 0,
        duration: 2,
    }); 
    
    tl.from(".text-content h1, .text-content p", {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 0.5,
    }); 

}
section1();

function section2() {
    let sectionTwo = document.querySelector('#section2');
    let cursor = document.querySelector('#cursor');
    let body = document.querySelector('body');
    let textOverlay = document.querySelector('.text-overlay p');
    let readAloudButton = document.getElementById('read-aloud-btn');
    let stopReadingButton = document.getElementById('stop-reading-btn');
    let musicControlButton = document.getElementById('stop-reading-btn'); // Corrigido para selecionar o botão correto
    let backgroundMusic = document.getElementById('background-music');
    let video = document.querySelector('#section2 video');
    let isSpeaking = false; // Variável para controlar se a leitura em voz alta está ocorrendo

    // Adicionar ícone de áudio
    sectionTwo.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            width: "50px",
            height: "50px",
            innerHTML: "<i class='fas fa-pause'></i>",
            fontSize: "15px",
            color: "#87CEEB",
            margin: "10px"
        });

        // Trocar cor
        gsap.to(body, {
            background: "#161515",
            color: "transparent",
        });

        // Adicionar o texto em uma linha
        textOverlay.innerHTML = "Eu, aos 15 anos, como 95% dos programadores 'hacking', fui incentivado a conhecer esse mundo com o objetivo de achar que poderia fazer tudo. Passava dias explorando sources de diversos sites para entender como funcionavam e onde encontrar erros utilizando um Samsung Galaxy Win 2. Então...";
    });

    // Somente aparecer depois de entrar na section2
    sectionTwo.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            width: "10px",
            height: "10px",
            margin: 0,
            innerHTML: "",
        });

        // Limpa o texto para a próxima entrada
        textOverlay.innerHTML = "";
    });

    // Função para ler texto em voz alta
    let speechSynthesisUtterance;
function readTextAloud(text) {
    speechSynthesisUtterance = new SpeechSynthesisUtterance();
    speechSynthesisUtterance.text = text;
    speechSynthesisUtterance.volume = 1;
    speechSynthesisUtterance.rate = 2;
    speechSynthesisUtterance.pitch = 1;

    // Obtém uma lista de vozes disponíveis
    const voices = window.speechSynthesis.getVoices();

    // Procura pela voz chamada "Microsoft Daniel - Portuguese (Brazil)" na lista de vozes
    const voice = voices.find(voice => voice.name === 'Microsoft Daniel - Portuguese (Brazil)');

    // Se encontrar a voz "Microsoft Daniel", define essa voz, caso contrário, use a primeira voz em português disponível
    speechSynthesisUtterance.voice = voice || voices.find(voice => voice.lang === 'pt-BR');

    window.speechSynthesis.speak(speechSynthesisUtterance);
    isSpeaking = true; // Define a variável como true quando a leitura é iniciada
    readAloudButton.innerHTML = "<i class='fa-solid fa-ear-listen'></i> Pause"; // Altera o botão para exibir apenas o ícone
}
    

    // Evento de clique no botão "Ler em Voz Alta"
    readAloudButton.addEventListener('click', () => {
        readAloudButton.classList.toggle('active'); // Alterna a classe 'active' ao clicar
        if (readAloudButton.classList.contains('active')) {
            // Se o botão estiver ativo, execute a função de leitura em voz alta
            const textToRead = textOverlay.textContent;
            readTextAloud(textToRead);
        } else {
            // Se o botão não estiver ativo, cancele a leitura em voz alta
            window.speechSynthesis.cancel();
            readAloudButton.innerHTML = "<i class='fa-solid fa-ear-listen'></i> Voz"; // Altera o botão para exibir apenas o ícone
        }
    });

    // Função para controlar a reprodução e a pausa da música de fundo
    function toggleBackgroundMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); // Se a música estiver pausada, reproduz
        } else {
            backgroundMusic.pause(); // Se a música estiver sendo reproduzida, pausa
        }
    }

    // Evento de clique no botão "Música"
    musicControlButton.addEventListener('click', () => {
        musicControlButton.classList.toggle('active'); // Alterna a classe 'active' ao clicar
        toggleBackgroundMusic(); // Chama a função para controlar a música de fundo
    });

    // Botão para parar a leitura em voz alta
    stopReadingButton.addEventListener('click', () => {
        stopReadingButton.classList.toggle('active'); // Alterna a classe 'active' ao clicar
        window.speechSynthesis.cancel();
        readAloudButton.innerHTML = "<i class='fa-solid fa-ear-listen'></i> Voz"; // Altera o botão para exibir apenas o ícone
    });

    // Adicionar evento de clique no vídeo para pausar e retomar
    video.addEventListener('click', (event) => {
        // Verificar se o alvo do clique é o próprio vídeo
        if (event.target === video) {
            // Verificar se o vídeo está pausado
            if (video.paused) {
                // Retomar a reprodução do vídeo
                video.play();
            } else {
                // Pausar o vídeo
                video.pause();
            }
        }
    });
}

section2();






// section4 animation
function section4() {
    let sectionFour = document.querySelector('#section4');
    let cursor = document.querySelector('#cursor');

    sectionFour.addEventListener("mouseenter", () => {
        
        gsap.to(cursor, {
            background: "transparent",
        });

        // Trocar cor
        gsap.to(sectionFour, {
            background: "#161515",
            color: "#fff",
        });
    });

    // Projects 

    let parentEl = document.querySelector('.bg');
    let childEl = document.querySelectorAll(".first-project .first");

    childEl.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            let ids = item.getAttribute("data-id");
            let bgEl = document.querySelector(`.id-${ids}`);
            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none";
            });

            bgEl.style.display = "block";

            gsap.to(cursor, {
                width: "100px",
                height: "50px",
                border: "1px solid #8f76f3",
                borderRadius: "5px",
                duration: "0.1",
                innerHTML: "<p>Ver Projetos</p>",
                fontSize: "10px",
            });
        });

        // leave

        item.addEventListener("mouseleave", () => {
            let ids = item.getAttribute("data-id");
            let bgEl = document.querySelector(`.id-${ids}`);
            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none";
            });

            bgEl.style.display = "none";

            gsap.to(cursor, {
                width: "10px",
                height: "10px",
                border: "1px solid #8f76f3",
                duration: "0.1",
                innerHTML: "",
                margin: "10px",
            });
        });
    });
}
section4();

// Section5 
