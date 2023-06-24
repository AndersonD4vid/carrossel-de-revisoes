const frases = [
   {
      id: 1,
      nome: 'Elen',
      job: 'Web Developer',
      img: './imagens/01.jpg',
      frase: 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'
   },
   {
      id: 2,
      nome: 'Susan',
      job: 'UX/UI Designer',
      img: './imagens/02.jpg',
      frase: 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.'
   },
   {
      id: 3,
      nome: 'Jones',
      job: 'Full Stack Developer',
      img: './imagens/03.jpg',
      frase: 'Não importa que você vá devagar, contanto que você não pare.'
   },
   {
      id: 4,
      nome: 'Fabi',
      job: 'Java Developer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDM1pZdG9xDdS3QDL7Ll_uKj3Mo_1HJesiA8MZihK4o1G_qpO92_gNGoQ6dHBm5qZ5Gc&usqp=CAU',
      frase: 'A inspiração existe, porém temos que encontrá-la trabalhando.'
   },
   {
      id: 5,
      nome: 'Isa',
      job: 'Full Stack',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzt9oS52PVAQh5wCFv5xL80nQfNj8Uq9DdQme5Gk7HNSTg7RLvu3THs0_AmgKvD_eogs&usqp=CAU',
      frase: 'Coragem é saber o que não temer.'
   },
   {
      id: 6,
      nome: 'Kah',
      job: 'Backend Developer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVRFvOcnZdz65-Uy9iKOajuqMBrSqCJbP-7iFhf2k8Z9REM8_45xln1wGGdAB03uEuAk&usqp=CAU',
      frase: 'Conhecer a si mesmo é o começo de toda sabedoria.'
   },
]

// selecionar itens
const img = document.getElementById("imagem");
const autor = document.getElementById("autor");
const job = document.getElementById("job");
const frase = document.getElementById("frase");

// selecionar botao
const prevBotao = document.querySelector(".prev-botao");
const nextBotao = document.querySelector(".next-botao");
const randomBotao = document.querySelector(".random-botao");

// definir item inicial
let currentItem = 0;

// carregar item inicial
window.addEventListener('DOMContentLoaded', function () {
   showPerson();
})

// mostrar pessoa baseada no item
function showPerson() {
   const item = frases[currentItem];
   img.src = item.img;
   autor.textContent = item.nome;
   job.textContent = item.job;
   frase.textContent = item.frase;
}

// mostrar pessoa anterior
prevBotao.addEventListener("click", function () {
   currentItem--;
   if (currentItem < 0) {
      currentItem = frases.length - 1;
   }
   showPerson(currentItem);
});

// mostrar próxima pessoa
nextBotao.addEventListener("click", function () {
   currentItem++;
   if (currentItem > frases.length - 1) {
      currentItem = 0;
   }
   showPerson(currentItem);
});


// mostrar pessoa aleatória
randomBotao.addEventListener("click", function () {
   currentItem = Math.floor(Math.random() * frases.length);
   showPerson(currentItem);
})


