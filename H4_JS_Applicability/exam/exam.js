
function checkPerson(){
  var fName = document.getElementById("firtsName").value;
  var sName = document.getElementById("surName").value;
  var point = document.getElementById("Points").value
  //error list
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");

  //lenght check
  if (fName.length > 3){
    one.innerHTML = "firtsName is at least 3 charachters long";
    //charachter check
    if (/^[a-z]+$/i.test(fName) == true) {
      two.innerHTML = "Firstname contains no special charachters";
      console.log("Firstname checked: " + fName);
    }else {two.innerHTML = "Firstname contains unusable charachters";}
  }else{one.innerHTML = "firtsName must be at least 3 charachters long";}



  //lenght check
  if (sName.length > 3){
    three.innerHTML = "surName is at least 3 charachters long";
    //charachter check
    if (/^[a-z]+$/i.test(sName) == true) {
      four.innerHTML = "surName contains no special charachters";
      console.log("surName checked: " + sName);
    }
    else {four.innerHTML = "surName contains unusable charachters";}
  }
  else{three.innerHTML = "surName must be at least 3 charachters long";}


  //is higher than zero and not NaN
  // addPerson();

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
