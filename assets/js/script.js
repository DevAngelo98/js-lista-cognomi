var listaCognomi = ["Inglima", "Carusotto", "Gallo"]
var cognomeInserito = prompt("Inserisci il tuo cognome");
var precedente;
var presente = false;

//Stampo i cognomi non in ordine
document.getElementById("listanon").innerHTML = "<li>" + "Lista non ordinata: " + "</li>" + "<br>";
for(var i=0; i<listaCognomi.length; i++){

  if(cognomeInserito == listaCognomi[i]){
    presente = true;
  }

  precedente = document.getElementById("listanon").innerHTML;
  document.getElementById("listanon").innerHTML = precedente + "<li>" + listaCognomi[i] + "</li>";

}

//Verifico la presenza del cognome inserito 
if(presente==false){
  listaCognomi.push(cognomeInserito);
}


//Stampo cognomi ordinati 
document.getElementById("listaord").innerHTML = "<li>" + "Lista ordinata: " + "</li>" + "<br>";
listaCognomi.sort();
for(var i=0; i<listaCognomi.length; i++){
  precedente = document.getElementById("listaord").innerHTML;
  document.getElementById("listaord").innerHTML = precedente + "<li>" + listaCognomi[i] + "</li>";
}




