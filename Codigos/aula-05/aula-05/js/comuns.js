// console.log
// mostrar o que foi processado - o dado que foi recuperado - mostrar erro 
// JS é  case sensitive - Não precisa de ponto e vírgula das linhas - Boa prática 
console.log('Olá, eu sou o console');
console.log('Em que posso ajudar ?');

// variáveis NÃO SÃO TIPADAS
// FAZ TIPAGEM AUTOMÁTICA
// DUAS PALAVRAS RESERVADAS
let nomeUsuario = 'Israel Marques';
let idadeUsuario = 51;
let emailUsuario = 'profisrael.copi@fiap.com.br';
let noite = true;

//exibir no console
console.log(nomeUsuario);
console.log(emailUsuario);

//concatenar  NÃO FAÇA ASSIM
console.log('Olá eu sou o ' + nomeUsuario + ' minha idade é ' + idadeUsuario);

// templateString = LEMBRAR COMECA E TERMINA CRASE `ESCREVER O QUE QUISER ${VARIÁVEL}`
console.log(`Olá eu sou o ${nomeUsuario} eu tenho ${idadeUsuario} anos.`);

// verificar o tipo da variável
console.log(nomeUsuario, typeof nomeUsuario);
console.log(idadeUsuario, typeof idadeUsuario);
console.log(noite, typeof(noite));

noite = 789.333;
console.log(noite, typeof noite);

// não usar var para declarar variáveis
var senhaUsuario = '23123213';

const DATANASCIMENTO = '02/12/1970';
console.log(DATANASCIMENTO);

//GERA UM ERRO POIS  É UMA CONSTANTE
// DATANASCIMENTO = '01/01/2001'

let primeiroNumero = 2;
let segundoNumero = 3;
console.log(`${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}`);
console.log(`${primeiroNumero} - ${segundoNumero} = ${primeiroNumero - segundoNumero}`);
console.log(`${primeiroNumero} * ${segundoNumero} = ${primeiroNumero * segundoNumero}`);
console.log(`${primeiroNumero} / ${segundoNumero} = ${primeiroNumero / segundoNumero}`);
console.log(`${primeiroNumero} % ${segundoNumero} = ${primeiroNumero % segundoNumero}`);
// ** potência
console.log(`${primeiroNumero} ** ${segundoNumero} = ${primeiroNumero ** segundoNumero}`);


primeiroNumero = 2;
segundoNumero = '2';
//igualdade ===
console.log(`${primeiroNumero} === ${segundoNumero} = ${primeiroNumero === segundoNumero}`);

// array 
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);
console.table(pessoas);
console.log(pessoas.length);

// inserir novo conteúdo no fim do array
pessoas.push('Eu mesmo');
console.log(pessoas);

// retirar o último conteúdo
pessoas.pop();
console.log(pessoas);

// inserir novo conteúdo no início do array
pessoas.unshift('Eu mesmo');
console.log(pessoas);

// retirar o primeiro valor do array
pessoas.shift();
console.log(pessoas);

//retirando dois elementos do array
pessoas.splice(2,2);
console.log(pessoas);

// inserindo conteúdo
pessoas.splice(2,0,'Ele', 'Nós', 'Nós denovo')
console.log(pessoas);

const coisas = ['eu', 123456, true, 987.99, false, 'noite'];
console.log(coisas);

// funções
function mensagem(){
    alert('Olá, sou uma função');
}
// chamando a função
// mensagem();

// atribuir uma função a um botão - RECUPERAR O BOTÃO NO HTML

// recuperar o botão - atribuir o evento  - chama a função
document.getElementById('btn-1').addEventListener('click', mensagem);
document.getElementById('btn-2').addEventListener('dblclick', mensagem);
document.getElementById('btn-3').addEventListener('mouseover', mensagem);
document.getElementById('btn-4').addEventListener('mouseout', mensagem);