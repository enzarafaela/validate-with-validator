import validator from 'validator';

const input = document.querySelector('#value');
const button = document.querySelector('#button');
const returnValidate = document.querySelector('.alert');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const cpfValidate = validator.isTaxID(input.value, 'pt-BR');
    if (!cpfValidate) {
        returnValidate.innerHTML = `CPF Inválido! Verifique.`;
        returnValidate.style.display = 'block';
    }
});