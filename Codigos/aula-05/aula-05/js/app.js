//recuperar a tabela que receberá os dados a serem digitados 
const tbody  = document.querySelector('tbody');

//pegar o formulário completo -  escutador == submit  - cancelar o envio- função que gera a linha e as coluna da tabela
document.querySelector('form').addEventListener('submit', function(event){
    //cancelar o evento
    event.preventDefault();

    // recuperar os campos nesse exemplo - campos completos (TAG COMPLETA)
    const campos = [ 
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar a linha do tbody
    const tr = document.createElement('tr');

    // percorrer o array e para cada ocorrência ele irá criar uma td
    campos.forEach((campo) => {
        
        //criar uma td
        const td = document.createElement('td');

        // colocar o conteúdo que foi digitado na td 
        //innerHTML -0 EVITAR POR SEGURANÇA
        td.textContent = campo.value;

        // colocar a td na tr
        tr.appendChild(td);
    });

    // colocar a tr no tbody
    tbody.appendChild(tr);

    //limpar os campos do form
    this.reset();
});