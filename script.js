document.addEventListener('DOMContentLoaded', () => {

    // --- NOVO: DEFINIR VARIÁVEIS DE SOM ---
    const soundCorrect = document.getElementById('sound-correct');
    const soundWrong = document.getElementById('sound-wrong');

    soundCorrect.volume = 0.1; // Define o volume para 10%
    soundWrong.volume = 0.1;   // Define o volume para 10%
    // --- SEÇÃO 1: NAVEGAÇÃO ENTRE TELAS ---
    const screens = document.querySelectorAll('.screen');
    const menuButtons = document.querySelectorAll('.menu-button');
    const backButtons = document.querySelectorAll('.back-to-menu');

    // Função para mostrar uma tela específica e esconder as outras
    function showScreen(screenId) {
        screens.forEach(screen => {
            if (screen.id === screenId) {
                screen.classList.add('visible');
            } else {
                screen.classList.remove('visible');
            }
        });
    }

    // Event Listeners para os botões do menu
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game');
            showScreen(gameId);
            // Inicia o jogo específico quando a tela é mostrada
            if (gameId === 'game-quiz') initQuiz();
            if (gameId === 'game-dragdrop') initDragDrop();
            if (gameId === 'game-memory') initMemoryGame();
        });
    });

    // Event Listeners para os botões "Voltar ao Menu"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showScreen('menu-container');
        });
    });

    // --- FIM DA SEÇÃO DE NAVEGAÇÃO ---

    // --- SEÇÃO 3: JOGO 1 - LÓGICA DO QUIZ ---

    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const quizFeedbackEl = document.getElementById('quiz-feedback');
    const quizNextBtn = document.getElementById('quiz-next');
    const quizScoreEl = document.getElementById('quiz-score');

    let currentQuestionIndex = 0;
    let quizScore = 0;
    let quizQuestions = [];

    function initQuiz() {
        // Embaralha e seleciona 10 perguntas do banco de dados
        quizQuestions = shuffleArray(database).slice(0, 10);
        currentQuestionIndex = 0;
        quizScore = 0;
        quizScoreEl.textContent = `Pontuação: 0`;
        loadQuizQuestion();
    }

    function loadQuizQuestion() {
        quizFeedbackEl.textContent = '';
        quizFeedbackEl.className = '';
        quizNextBtn.style.display = 'none';
        quizOptionsEl.innerHTML = '';
        // Reabilita os botões (caso o jogo seja reiniciado)
        quizOptionsEl.querySelectorAll('button').forEach(btn => btn.disabled = false);


        if (currentQuestionIndex >= quizQuestions.length) {
            quizQuestionEl.textContent = 'Fim de Jogo!';
            quizFeedbackEl.textContent = `Você acertou ${quizScore} de ${quizQuestions.length}!`;
            return;
        }

        const question = quizQuestions[currentQuestionIndex];
        quizQuestionEl.textContent = question.estrutura; // Mostra a estrutura

        // Gera opções de resposta
        const correctAnswer = question.funcao;
        let options = [correctAnswer];

        // Pega 3 funções aleatórias diferentes da correta
        let allFunctions = [...new Set(database.map(item => item.funcao))]; // Lista única de funções
        allFunctions = allFunctions.filter(f => f !== correctAnswer); // Remove a correta
        options = options.concat(shuffleArray(allFunctions).slice(0, 3)); // Adiciona 3 aleatórias

        // Embaralha as 4 opções
        options = shuffleArray(options);

        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkQuizAnswer(option, correctAnswer, button));
            quizOptionsEl.appendChild(button);
        });
    }

    function checkQuizAnswer(selectedOption, correctAnswer, button) {
        // Desabilita todos os botões após a resposta
        quizOptionsEl.querySelectorAll('button').forEach(btn => btn.disabled = true);

        const question = quizQuestions[currentQuestionIndex]; // Pega a pergunta atual

        if (selectedOption === correctAnswer) {
            soundCorrect.play(); // <-- Som de acerto
            quizFeedbackEl.textContent = 'Correto!';
            quizFeedbackEl.className = 'correct';
            button.style.backgroundColor = 'var(--correct-color)';
            quizScore++;
        } else {
            soundWrong.play(); // <-- Som de erro

            // --- Explicação ---
            const explicacao = question.explicacao || 'Consulte o material para revisar esta função.';

            quizFeedbackEl.innerHTML = `
                <span class="wrong">Errado! A resposta é: ${correctAnswer}.</span>
                <br>
                <strong>Por quê?</strong> ${explicacao}
            `;
            quizFeedbackEl.className = ''; // Remove a classe 'wrong' principal
            // --- FIM DA ADIÇÃO (Explicação) ---

            button.style.backgroundColor = 'var(--wrong-color)';
        }
        quizScoreEl.textContent = `Pontuação: ${quizScore}`;
        quizNextBtn.style.display = 'block';
    }

    quizNextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuizQuestion();
    });


    // --- SEÇÃO 4: JOGO 2 - LÓGICA DO DRAG & DROP ---

    const moleculeSourceEl = document.getElementById('molecule-source');
    const dropZonesEl = document.querySelectorAll('.drop-zone');
    const dragFeedbackEl = document.getElementById('drag-feedback');
    let dragMolecules = [];
    let correctDrops = 0;

    function initDragDrop() {
        // Pega 5 moléculas aleatórias para o jogo
        dragMolecules = shuffleArray(database).slice(0, 5);
        correctDrops = 0;
        dragFeedbackEl.textContent = '';
        moleculeSourceEl.innerHTML = '';
        
        // Limpa as drop zones de moléculas de jogos anteriores
        dropZonesEl.forEach(zone => {
            const children = Array.from(zone.children);
            children.forEach(child => {
                if (child.classList.contains('molecule-drag')) {
                    child.remove();
                }
            });
        });

        // Cria os elementos arrastáveis
        dragMolecules.forEach((molecule, index) => {
            const el = document.createElement('div');
            el.classList.add('molecule-drag');
            el.textContent = molecule.estrutura; // ou molecule.nome
            el.setAttribute('draggable', 'true');
            el.dataset.id = index;
            el.dataset.category = molecule.categoria;
            moleculeSourceEl.appendChild(el);

            el.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.id);
                e.target.classList.add('dragging');
            });

            el.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
        });
    }

    // --- CORREÇÃO AQUI ---
    // Adiciona os event listeners para CADA drop zone usando o forEach
    dropZonesEl.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessário para permitir o drop
            zone.classList.add('over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');

            const id = e.dataTransfer.getData('text/plain');
            // Previne erro se o drop for inválido
            if (!id) return; 

            const draggedEl = document.querySelector(`.molecule-drag[data-id='${id}']`);
            // Previne erro se o elemento já foi movido
            if (!draggedEl) return; 

            const correctCategory = draggedEl.dataset.category;
            const dropCategory = zone.dataset.category;

            if (correctCategory === dropCategory) {
                soundCorrect.play(); // <-- Som de acerto
                // Acertou
                draggedEl.remove(); // Remove da lista de arrastar
                zone.appendChild(draggedEl); // Adiciona na zona correta
                draggedEl.setAttribute('draggable', 'false');
                draggedEl.style.cursor = 'default';
                draggedEl.style.backgroundColor = 'var(--correct-color)';
                draggedEl.style.color = 'white';
                dragFeedbackEl.textContent = 'Correto!';
                dragFeedbackEl.className = 'correct';
                correctDrops++;
                if (correctDrops === dragMolecules.length) {
                    dragFeedbackEl.textContent = 'Parabéns! Você classificou todas!';
                }
            } else {
                soundWrong.play(); // <-- Som de erro
                // Errou
                dragFeedbackEl.textContent = 'Categoria errada! Tente novamente.';
                dragFeedbackEl.className = 'wrong';
            }
        });
    });
    // --- FIM DA CORREÇÃO ---


    // --- SEÇÃO 5: JOGO 3 - LÓGICA DO JOGO DA MEMÓRIA ---
    // (Esta seção estava fora do 'DOMContentLoaded', agora está dentro)

    const memoryGridEl = document.getElementById('memory-grid');
    const memoryTriesEl = document.getElementById('memory-tries');
    const memoryResetBtn = document.getElementById('memory-reset');

    let memoryCards = [];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false; // Trava o tabuleiro enquanto checa o par
    let tries = 0;
    let matches = 0;

    memoryResetBtn.addEventListener('click', initMemoryGame);

    function initMemoryGame() {
        memoryGridEl.innerHTML = '';
        tries = 0;
        matches = 0;
        memoryTriesEl.textContent = tries;
        lockBoard = false;
        firstCard = null;
        secondCard = null;

        // Pega 6 pares aleatórios do banco de dados (total 12 cartas)
        const pairsData = shuffleArray(database).slice(0, 6);

        let cards = [];
        pairsData.forEach((item, index) => {
            // Carta 1: Estrutura
            cards.push({
                type: 'estrutura',
                content: item.estrutura,
                pairId: index
            });
            // Carta 2: Função/Categoria
            cards.push({
                type: 'funcao',
                content: `${item.funcao} (${item.categoria})`,
                pairId: index
            });
        });

        memoryCards = shuffleArray(cards);

        // Cria os elementos das cartas no HTML
        memoryCards.forEach((cardData, index) => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.dataset.index = index;
            card.dataset.pairId = cardData.pairId;

            // Frente da carta (visível)
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');
            cardFront.textContent = 'Q'; // Símbolo de "Química"

            // Verso da carta (conteúdo)
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');
            cardBack.textContent = cardData.content;

            card.appendChild(cardFront);
            card.appendChild(cardBack);

            card.addEventListener('click', flipCard);
            memoryGridEl.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return; // Impede clique duplo

        this.classList.add('flipped');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true; // Trava o tabuleiro
        tries++;
        memoryTriesEl.textContent = tries;

        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.pairId === secondCard.dataset.pairId;

        if (isMatch) {
            soundCorrect.play(); // <-- Som de acerto
            disableCards();
        } else {
            soundWrong.play(); // <-- Som de erro
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matches++;
        if (matches === 6) { // 6 pares
            setTimeout(() => {
                alert(`Parabéns! Você venceu em ${tries} tentativas!`);
            }, 500);
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1200); // Tempo para ver a segunda carta
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }


    // --- SEÇÃO 6: FUNÇÕES UTILITÁRIAS ---
    // (Esta seção também estava fora, agora está dentro)

    // Função para embaralhar um array (Algoritmo Fisher-Yates)
    function shuffleArray(array) {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

// --- FIM DO SCRIPT ---
// Esta é a chave '});' que fecha o 'DOMContentLoaded' lá do topo.
});