var data = new Date();
var D = data.getDate();
var M = data.getMonth();
var Y = data.getFullYear();

var inputDay;
var inputMonth;
var inputYear;

var interest;
var amount;
var doubled;
var newAmount;

function showData(){
  getToday();
  CheckDate();
  intrests();
}

function getToday() {

  //see month
  switch (M) {
    case 0:
    document.getElementById("Date").innerHTML = "-January-" + Y;
    break;

    case 1:
    document.getElementById("Date").innerHTML = D + "-February-" + Y;
    break;

    case 2:
    document.getElementById("Date").innerHTML = D + "-March-" + Y;
    break;

    case 3:
    document.getElementById("Date").innerHTML = D + "-April-" + Y;
    break;

    case 4:
    document.getElementById("Date").innerHTML = D + "-May-" + Y;
    break;

    case 5:
    document.getElementById("Date").innerHTML = D + "-June-" + Y;
    break;

    case 6:
    document.getElementById("Date").innerHTML = D + "-July-" + Y;
    break;

    case 7:
    document.getElementById("Date").innerHTML = D + "-August-" + Y;
    break;

    case 8:
    document.getElementById("Date").innerHTML = D + "-September-" + Y;
    break;

    case 9:
    document.getElementById("Date").innerHTML = D + "-October-" + Y;
    break;

    case 10:
    document.getElementById("Date").innerHTML = D + "-November-" + Y;
    break;

    case 11:
    document.getElementById("Date").innerHTML = D + "-December-" + Y;
    break;
  }
}

function CheckDate(){
  var input1 = document.getElementById('input1').value;
  var format = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", '"', "\\", "|", "/", ",", ".", "<", ">", "?"];

  //get split charachter en replace them with -
  format.forEach(arrayPos => {
    while(input1.includes(arrayPos)) {
      input1 = input1.replace(arrayPos, "-");
    }
  });

  //array splits
  var input1Gesplit = input1.split("-");

  inputDay = input1Gesplit[0];
  inputMonth = input1Gesplit[1];
  inputYear = input1Gesplit[2];


  if(inputDay <= 31 && inputDay >= 1){
    if (inputMonth <= 12 && inputMonth >= 1 ){
      if (inputYear <= Y ) {
        document.getElementById("youDate").innerHTML = input1 ;
      }else {alert("Not good year");}
    }else {alert("Not good month");}
  }else {alert("Not good day");}

}

function intrests(){
  amount = parseInt(document.getElementById('input2').value);
  interest = parseInt(document.getElementById('input3').value);

  doubled = amount * 2;
  var int = (interest / 100) + 1;
  var i = 0;

  while (amount < doubled) {
    newAmount = amount * int;
    amount = newAmount;
    i++;
    console.log(i);
    document.getElementById("eachYear").innerHTML += "<li>" + i + " Year(s): " + amount.toFixed(2) + "</li>";
  }

  document.getElementById("Intrest").innerHTML =  "end of when doubled: " + newAmount.toFixed(2);
  document.getElementById("yearly").innerHTML =  "Yearly intrest: " + int;
  document.getElementById("IntYears").innerHTML = "years of intrest: " + i;
}
