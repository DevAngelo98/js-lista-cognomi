var listaCognomi = ["Inglima", "Carusotto", "Gallo"];
var cognomeInserito = prompt("Inserisci il tuo cognome");
var precedente;
var presente = false;
var pos;

//Stampo i cognomi non in ordine
document.getElementById("listanon").innerHTML = "<li>" + "Lista non ordinata: " + "</li>" + "<br>";
for(var i=0; i<listaCognomi.length; i++){

  precedente = document.getElementById("listanon").innerHTML;
  document.getElementById("listanon").innerHTML = precedente + "<li>" + listaCognomi[i] + "</li>";

  if(cognomeInserito == listaCognomi[i]){
    presente = true;
  }
}

//Verifico la presenza del cognome inserito 
if(presente==false){
  listaCognomi.push(cognomeInserito);
}

listaCognomi.sort();


//Stampo cognomi ordinati 
document.getElementById("listaord").innerHTML = "<li>" + "Lista ordinata: " + "</li>" + "<br>";
for(var i=0; i<listaCognomi.length; i++){
  precedente = document.getElementById("listaord").innerHTML;
  document.getElementById("listaord").innerHTML = precedente + "<li>" + listaCognomi[i] + "</li>";

  if(listaCognomi[i] == cognomeInserito){
    pos = i+1;
  }

}

document.getElementById("pos").innerHTML = "<li>" + "Posizione del cognome inserito nella lista ordinata:" + "</li>" + "<br>";
document.getElementById("pos").innerHTML += "<li>" + (pos) + "</li>";
