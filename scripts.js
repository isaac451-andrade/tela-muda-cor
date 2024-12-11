// constantes do DOM
const btnShuffle = document.getElementById('shuffle');
const caixaCores = document.querySelector('.caixa-cores');
const telaCores = document.querySelector('.container-cores');
// Lista de cores
let listaCores = ['red', 'yellow', 'blue', 'green', 'deeppink', 'aquamarine', 'purple', 'greenyellow', 'blueviolet', 'brown', 'chocolate', 'cyan'];

function shuffleColors() { 
    listaCores.sort((a, b) => Math.random() - 0.5);
    const coresAntigas = document.querySelectorAll('.caixa-cores .cor div');
    for(let i = 0; i <listaCores.length; i++){
        const prenchimentoCor = coresAntigas[i];
        prenchimentoCor.style.backgroundColor = listaCores[i];
    }
}

btnShuffle.addEventListener('click', shuffleColors);

function loadInitialColors() {
    for(let cor of listaCores){
        const itemCor = document.createElement('div');
        itemCor.classList.add('cor');
        const prenchimentoCor = document.createElement('div');
        prenchimentoCor.style.backgroundColor = cor;
        prenchimentoCor.style.width = '35px';
        prenchimentoCor.style.height = '35px';
        prenchimentoCor.style.transition = 'background-color 0.5s ease-in-out';
        prenchimentoCor.addEventListener('click', (event) => {
            const corClicada = event.target.style.backgroundColor;
            telaCores.style.backgroundColor = corClicada;
        })

        itemCor.appendChild(prenchimentoCor);
        caixaCores.appendChild(itemCor);
    }
}



loadInitialColors();

