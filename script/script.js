// teste gpt excluir depois //
const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto) => {
	const botaoComprar = produto.querySelector('button');
	
	botaoComprar.addEventListener('click', () => {
		alert(`Você comprou o ${produto.querySelector('h2').textContent} por ${produto.querySelector('p:nth-child(3)').textContent}!`);
	});
});
// fim //




const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = form.elements.name.value;
	const email = form.elements.email.value;
	const subject = form.elements.subject.value;
	const message = form.elements.message.value;

	if (!name || !email || !subject || !message) {
		alert('Por favor, preencha todos os campos.');
		return;
	}

	// Aqui você pode adicionar o código para enviar o formulário por e-mail ou salvar em um banco de dados, por exemplo.

	alert('Formulário enviado com sucesso!');
	form.reset();
});




const album = document.querySelector('.album');
const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += 300;
  if (currentPosition > 0) {
    currentPosition = -900;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${currentPosition}px)`;
  }
});

nextButton.addEventListener('click', () => {
  currentPosition -= 300;
  if (currentPosition < -900) {
    currentPosition = 0;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${currentPosition}px)`;
  }
});


