// manipulação de html via js - DOM - Document Object Model

// usando id ---- ÚNICO
const getID1 = document.getElementById('tabela-personagens');
console.log(getID1);

const getID2 = document.querySelector('#personagem-um');
console.log(getID2);

//pela class ---- REPETIÇÃO
const getClass1 = document.getElementsByClassName('nome-personagem');
console.log(getClass1);

// querySelector - primeiro que ele encontra - 
// querySelectorAll - pega todos
const getClass2 = document.querySelectorAll('.nome-personagem');
console.log(getClass2);
console.log(getClass2[3].textContent);
getClass2[3].textContent = 'Princesa Leia';

//pegar pela tag
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);

const getTag2 = document.querySelectorAll('td');
console.log(getTag2);