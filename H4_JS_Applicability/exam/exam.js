
function checkPerson(){
  var fName = document.getElementById("firtsName").value;
  var sName = document.getElementById("surName").value;
  var points = document.getElementById("Points").value;
  var list = document.getElementById("list");
  var checked = 0;

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }


  //lenght check
  if (fName.length >= 3){checked++;
//charachter check
    if (/^[a-z]+$/i.test(fName) == true) {checked++;

    }else {
      //create list element with the error
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Firstname contains unusable charachters");
      node.appendChild(textnode);
      list.appendChild(node);
      checked--;

    }
  }else{
    //create list element with the error
    var node = document.createElement("LI");
    var textnode = document.createTextNode("firtsName must be at least 3 charachters long");
    node.appendChild(textnode);
    list.appendChild(node);
    checked--;

}



  //lenght check
  if (sName.length >= 3){checked++;
      //charachter check
    if (/^[a-z]+$/i.test(sName) == true) {checked++;}
    else {
      //create list element with the error
      var node = document.createElement("LI");
      var textnode = document.createTextNode("surName contains unusable charachters");
      node.appendChild(textnode);
      list.appendChild(node);
      checked--;

    }
  }
  else{
    //create list element with the error
    var node = document.createElement("LI");
    var textnode = document.createTextNode("surName must be at least 3 charachters long");
    node.appendChild(textnode);
    list.appendChild(node);
    checked--;

  }

  //point between 1 & 100
  if (points >= 1 && points <= 100) {checked++;}
  else {
    //create list element with the error
    var node = document.createElement("LI");
    var textnode = document.createTextNode("The assigned point are to high or to low");
    node.appendChild(textnode);
    list.appendChild(node);
  }

if (checked == 5) {
// console.log(checked);
// console.log("Firstname checked: " + fName);
// console.log("surName checked: " + sName);
// console.log("points checked: " + points);
addPerson();
}


}

function addPerson(){
  var form = document.getElementById("invoerFormulier");
  var newData = [];

  for(i = 0; i < form.length; i++){
    newData[i] = form.elements[i].value;
  }
  var table = document.getElementById("uitvoerTabel");
  var newRow = table.insertRow();

  for(var i = 0; i < 3; i++){
    var newCel = newRow.insertCell(i);
    newCel.innerHTML = newData[i];
  }
}
