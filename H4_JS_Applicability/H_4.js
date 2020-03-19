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
