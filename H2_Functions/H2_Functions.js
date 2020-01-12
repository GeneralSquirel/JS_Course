// assignment 1
function assignment1(price, btw){
  var res = price * btw;
  alert("with BTW: " + res + " || " + "Without BTW: " + price);
}
// assignment 2
function assignment2(num1, num2, result){
  var input1 = document.getElementById("num2.1");
  var num1 = +input1.value;
  var input2 = document.getElementById("num2.2");
  var num2 = +input2.value;

  result = (num1+num2)/2;
  document.getElementById("res").innerHTML = result;
}
// assignment 3
function assignment3_1(num1, num2, result){
  var num1 = 1;
  var num2 = 2;

  if (num1 > num2) {
    // console.log("first number is higher: " + num1);
    var result = num1;
    document.getElementById("res3").innerHTML = result;
  }
  else{
    // console.log("Second number is higher: " + num2);
    var result = num2;
    document.getElementById("res3").innerHTML = result;
  }
}
function assignment3_2(num1, num2, num3, result){
  var num1 = 1;
  var num2 = 4;
  var num3 = 3;

  if (num1 > num2 && num1 > num3){
    // console.log("first number is highest: " + num1);
    var result = num1;
    document.getElementById("res3").innerHTML = result;
  }
  else if(num2 > num1 && num2 > num3){
    // console.log("Second number is highest: " + num2);
    var result = num2;
    document.getElementById("res3").innerHTML = result;
  }
  else if(num3 > num1 && num3 > num2)
  {
    // console.log("third number is highest: " + num3;
    var result = num3;
    document.getElementById("res3").innerHTML = result;
  }else {

  }
}
// assignment6
var vak6 = document.getElementById("as6");

vak6.onclick = function() {f_Color(vak6, "orange")};
vak6.onmouseup = function() {f_Color(vak6, "green")};
vak6.onmousedown = function() {f_Color(vak6, "blue")};
vak6.onmouseout = function() {f_Color(vak6, "yellow")};
vak6.onmouseover = function() {f_Color(vak6, "red")};

function f_Color(element, color){
  element.style.background = color;
}
// function fclick(){document.getElementById("as6").style.background = "darkgrey";}
// function fOver(){document.getElementById("as6").style.background = "red";}
// function fOut(){document.getElementById("as6").style.background = "blue";}
// function fUp(){document.getElementById("as6").style.background = "green";}
// function fDown(){document.getElementById("as6").style.background = "yellow";}


// assignment7
var vak7 = document.getElementById("as7");

vak7.onclick = function() {f_Color(this, "orange")};
vak7.onmouseup = function() {f_Color(this, "green")};
vak7.onmousedown = function() {f_Color(this, "blue")};
vak7.onmouseout = function() {f_Color(this, "yellow")};
vak7.onmouseover = function() {f_Color(this, "red")};

function f_Color(element, color){
  element.style.background = color;
}
// assignment8
function salarySum(){
//salary * 12 = year // year * 1.08
var input1 = document.getElementById("as8");
var salary = +input1.value;
var year_salary = (salary * 12) * 1.08;
var rounded = year_salary.toFixed(2);
//console.log(rounded);
document.getElementById("Pas8").innerHTML ="€" + rounded; 
}
