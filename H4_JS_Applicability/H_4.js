//img swap assignment 1
function imgSwap(){

  var randomIMG = Math.floor(Math.random() * 3) + 1;

  switch (randomIMG) {
    case 1:
    document.getElementById("image").src = "1.png";
    document.getElementById("image").blur();
    break;

    case 2:
    document.getElementById("image").src = "2.png";
    break;

    case 3:
    document.getElementById("image").src = "3.png";
    break;

    default:

  }
}
//assignment 2
function newButton(){
  var button = document.createElement("button");
  document.body.appendChild(button);
  var buttontxt = document.createTextNode("click 2");
  button.appendChild(buttontxt);

  document.getElementById("knopje").disabled = true;

  var bAttribute = document.createAttribute("onclick");
  var butonID = document.createAttribute("id");
  butonID.value = "Button2";
  bAttribute.value = "clicked()";

  button.setAttributeNode(bAttribute);
}
function clicked(){
  alert("het is gelukt");
}
//assignment 3
function styleChange(){
  var txt = document.getElementById("txt");
  txt.style.color = "red";
  txt.style.fontFamily = "stencil";
  txt.style.fontSize = "200%";
}
//assignment 4
function showForm(){
  var input1 = document.getElementById("input1");
  var voornaam = String(input1.value);

  var input2 = document.getElementById("input2");
  var achternaam = String(input2.value);


  var formOut = document.getElementById("formOut");
  formOut.innerHTML = voornaam + achternaam;
}
//assignment 5
function showChoice(){
  var choice1 = document.getElementById('items1').value;
  var choice2 = document.getElementById('items2').value;

  document.getElementById('choices').innerHTML = choice1 +" "+ choice2;
}
//assignment 6
function voegGegevenstoe(){
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
//assignment 7
function allCheck(){
  var mail = document.getElementById("mail").value;
  var name = document.getElementById("name").value;
  var land = document.getElementById("land").value
  var checklist = document.getElementById("checklist");
  var checkAT = document.getElementById("checkAT");
  var checkPoint = document.getElementById("checkPoint");
  var checkLen = document.getElementById("checkLen");
  var checkland = document.getElementById("checkland");

  if(!mail.includes("@")){checkAT.innerHTML ="@ is missing";}
  else{checkAT.innerHTML ="@ is there";}

  if(!mail.includes(".")){checkPoint.innerHTML =". is missing"}
  else{checkPoint.innerHTML =". is there"}

  if (mail.length < 4){checkLen.innerHTML = "Mail must be at least 4 charachters long";}
  else{checkLen.innerHTML = "Mail is at least 4 charachters long";}

  if (name.length < 4){nameLen.innerHTML = "Name must be at least 4 charachters long";}
  else{nameLen.innerHTML = "Name is at least 4 charachters long";}

  if (land == 0) {
    checkland.innerHTML = "Land not chosen";
  }else{
    checkland.innerHTML = "Chosen land: " + land;
  }



}
//assignment 8
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
