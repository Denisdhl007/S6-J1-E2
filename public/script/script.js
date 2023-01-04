/*

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

function revInt(num) {
// Use toString() to convert it into a String
// Use the split() method to return a new array: -123 => ['-', '1','2','3']
// Use the reverse() method to reverse the new created array: ['-', '1','2','3'] => ['3','2','1','-'];
// Use the join() method to join all elements of the array into a string
  let val = num.toString().split('').reverse().join('');
    // If the entered number was negative, then that '-' would be the last character in
   //  our newly created String, but we don't want that, instead what we want is
  //  for it to be the first one. So, this was the solution from the top of my head.
// The endsWith() method determines whether a string ends with the characters of a specified string
  if (val.endsWith('-')) {
    val = '-' + val;
      return parseInt(val);
  }
      return parseInt(val);
}
console.log(revInt(851));


//better way/shorter

function reverseInt(n) {
      return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
console.log(reverseInt(851));



// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2    x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// Test 1
function modulo(a, b){
    a = prompt("Entrez un nombre");
    b = prompt("Entrez un nbr");
    var res;
    if (a<b){
        res=a;}
    else{
    res= modulo(a-b,b);}
    return res;
    }


    
// Test 2
let x = `nbr1`;
    nbr1 = prompt("Entrez un nombre");
    if (nbr1 % 2 == 0)
    {
      alert('even');
    }
    else
    {
      alert('odd')
    }

//Test3

function divPar2(nbr) {
    nbr = prompt("Entrez un nombre pour voir si il est divisible par 2");
    mod = nbr % 2;

    switch (mod) {
        case 0:
            alert(`Le num ${nbr} est divisible par 2 ${nbr}:2 = ${mod}`);
            break;
        case 1:
            alert("Ce nombre n'est pas divisible par 2");
            break;
        default:
            alert("Ce n'est pas un nombre");
            break;
    }
}

divPar2();


// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// Test1
function logIn(password){
  password = prompt("Entrez un password");
  if(password == "mdp") {
    alert("Logged In");
  } 
  else {
    alert("wrong user/pass");
    }
}
logIn();

// Test 2
function logIn(pass) {
  do
      pass = prompt("Entrez le mdp");
  while (pass != "mdp");
  alert("Vous êtes connecté");
}
logIn();










// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des n premiers nombres naturels.
// Par exemple, si on appelle la fonction avec 5 en entrée, elle devra renvoyer 15 (1 + 2 + 3 + 4 + 5).


function sum(n){
  n = prompt("Entrez un nombre naturel");
  let result = 0;
  for (let index = 1; index <= n; index++) {
    result += index;       
}
  alert(result);
}
sum();
*/



// Écrivez une fonction qui prend un nombre en entrée et qui renvoie vrai si ce nombre est un nombre premier, et faux sinon.
// Un nombre premier est un nombre qui n'est divisible que par 1 et par lui-même.
// Par exemple, 2 est un nombre premier, alors que 4 ne l'est pas (il est divisible par 2).

/*
// COMMENT AMELIORER TEST 1??
// Test 1
function nbrPrem(n){
  n = prompt("Entrez un nombre premier");
  if (n % 1 === n) {
    alert('ok');
  }
  else if (n % n === 1) {
    alert('ok');
  }
  else {
    alert('pas ok');
  }
}
nbrPrem();




// Test 2
function nbrPremier(nbr) {
  for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
  return nbr > 1;
};

console.log(nbrPremier(2));




// Écrivez une fonction qui prend un tableau de chaînes de caractères en entrée et qui renvoie une nouvelle liste contenant les chaînes de caractères triées par ordre alphabétique.
// Par exemple, si on appelle la fonction avec ["girafe", "chien", "chat", "oiseau"] en entrée, elle devra renvoyer ["chat", "chien", "girafe", "oiseau"].

// Test 1
let names  = ["girafe", "chien", "chat", "oiseau"] 
let sortedNames = names.sort();
console.log(sortedNames);

// Test2
function tri(names) {
  console.log(names.sort())
}
tri(["girafe", "chien", "chat", "oiseau"]);



// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des chiffres de ce nombre.
// Par exemple, si on appelle la fonction avec 123 en entrée, elle devra renvoyer 6 (1 + 2 + 3).


function nbre (n){
  n = prompt("Entrez un nombre");
  

}

nbre();


*/

// Écrivez une fonction qui prend un tableau de nombres en entrée et qui renvoie vrai si le tableau est un palindrome (c'est-à-dire si le tableau est le même lorsqu'on le lit de droite à gauche ou de gauche à droite), et faux sinon.
// Par exemple, si on appelle la fonction avec [1, 2, 3, 2, 1] en entrée, elle devra renvoyer vrai. Si on l'appelle avec [1, 2, 3, 4, 5] en entrée, elle devra renvoyer faux.
// ﻿

let tab3;
function tabPal(param){
  tab3 = [...param].reverse();
  console.log(param, tab3);
  if(param.every((value, index) => value === tab3[index])){
    console.log("vrai");
}else{
    console.log("faux");
}
}
tabPal([1, 2, 3, 4, 5]);
tabPal([1, 2, 3, 2, 1]);
