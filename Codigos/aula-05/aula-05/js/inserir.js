// pegar o botão, atribuir o evento e criar uma função
document.getElementById('alterarConteudo').addEventListener('click', () => {
    // recuperar o campo com  a informação digitada

    const novaInformação = document.getElementById('dados').value;
    console.log(novaInformação);

    // recuperando a div que receberá os dados
    const novoConteudo = document.getElementById('conteudo');

    // escrever no elemento recuperado o conteúdo digitado
    novoConteudo.textContent = novaInformação;
});


//inserir novo conteúdo
// pegar o botão
document.getElementById('insereConteudo').addEventListener('click', () =>{

    // recuperar o valor digitado
    const conteudo = document.getElementById('novosDados').value;

    // pegar a div onde será criada uma nova tag
    const nova = document.getElementById('novaTag');

    // criar o elemento h2
    const novoH2 = document.createElement('h2'); 

    // passar conteúdo digitado para o h2
    novoH2.textContent = conteudo;

    //colocar o h2 na div
    nova.appendChild(novoH2);
})