const botaoCalcular = document.querySelector('#calcular');
const botaoResetar = document.querySelector('#resetar');

botaoCalcular.addEventListener('click', () => {
    const dataInicial = new Date(document.querySelector('#data-inicial').value);
    const dataFinal = new Date(document.querySelector('#data-final').value);
    const diferenca = Math.abs(dataFinal - dataInicial);
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    const mensagem = `A diferença entre as datas é de ${dias} dias.`;
    alert(mensagem);
});

botaoResetar.addEventListener('click', () => {
    document.querySelector('#data-inicial').value = '';
    document.querySelector('#data-final').value = '';
});