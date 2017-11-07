"use strict";
let myArray = [{"actor":"Martin Freeman", "character":"Bilbo Baggins"}];
showArray();

document.getElementById("btnAdd").addEventListener("click", function(ev){
  ev.preventDefault();
  let actor = document.getElementById("actor").value;
  let character = document.getElementById("character").value;
  let item = {};
  item.actor = actor;
  item.character = character;
  myArray.push( item );  //add the object to the array
  //clear the form
  document.getElementById("actor").value = "";
  document.getElementById("character").value = ""
  showArray();
});

document.getElementById("btnDel").addEventListener("click", function(ev){
  let actor = document.getElementById("actor").value;
  let character = document.getElementById("character").value;
  myArray.forEach(function(item, index){
    if(item.actor == actor && item.character == character){
      myArray.splice(index, 1);  //remove this one item from the array
      //if BOTH the actor and character match
    }
  });
  showArray();
});

function showArray(){
  let output = document.getElementById("output");
  output.innerHTML = "";
  myArray.forEach(function(item){
    output.innerHTML += '<p>' + item.actor + " - " + item.character + '</p>';
    //bad practice warning
  });
}