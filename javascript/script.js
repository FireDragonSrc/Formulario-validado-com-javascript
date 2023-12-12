const texto1 = document.querySelector('.informaçoes1');
const texto2 = document.querySelector('.informaçoes2');
const texto3 = document.querySelector('.informaçoes3');
const texto4 = document.querySelector('.informaçoes4');
const form = document.querySelector(".container2");
const informacoes = [{
    nome:'nome',
    sobrenome:'sobrenome',
    peso:'peso',
    altura:'altura'
}];
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    informacoes[0].nome = nome.value;
    informacoes[0].sobrenome = sobrenome.value;
    informacoes[0].peso = peso.value;
    informacoes[0].altura = altura.value;
    texto1.innerHTML += `${informacoes[0].nome}`
    texto2.innerHTML += `${informacoes[0].sobrenome}`
    texto3.innerHTML += `${informacoes[0].peso}`
    texto4.innerHTML += `${informacoes[0].altura}`
});