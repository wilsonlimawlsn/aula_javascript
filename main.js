/*
var nome = "Wilson Lima";
var idade = 32;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos.");
console.log(nome);
console.log(idade2 + idade);
console.log(frase.replace("Japão", "Brasil"));
//alert(idade + idade2);
//alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); //adiciona na lista
lista.pop(); // retira da lista
//console.log(lista[1]); mostra no console o item na posição 1
console.log(lista); /* mostra o conteudo da lista *//*
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*

var frutas = [{nome:"maça", cor:"vermelha"},{nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome)

 */

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

 */

/*
var idade = prompt("Qual sua idade?");

//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("menor de idade");
}

 */
/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
    alert(count);
}


 */
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());

 */
/*
function soma(n1, n2){
    return n1 + n2;
}
/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;


}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/

function clicou(){
    document.getElementById("agredecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agredecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com.br/");
    //window.location.href = "https://google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}