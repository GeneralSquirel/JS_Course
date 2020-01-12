var input = document.getElementById("input");
var output = document.getElementById("output");

function clear(input){input.value = ''}
function reset(output){
  window.location.reload(true);
}
function subtotal(num1, num2){
  var total = num1 + num2;

  return total;
}
//print numbers does not work 
// function show(){
//   var btw_cost = subtotal_value - (subtotal_value/(1+BTW));
//
//   document.getElementById("btw").innerHTML = "btw: " + btw_cost.toFixed(2);
//   document.getElementById("excl_btw").innerHTML = "btw exclusive: " + (subtotal_value - btw_cost).toFixed(2);
//   document.getElementById("total").innerHTML = "btw inclusive: " + subtotal_value.toFixed(2);
// }

document.getElementById("input").onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  var BTW = 0.21;
  var input_num = 0;
  //see if enter is pressed
  if (keyCode === 13){
    //check if it, is a number
    if (!isNaN(Number(input.value)) && !isNaN(Number(output.value))) {
      input_num = Number(input.value);
      output_num = Number(output.value);
      //clear field
      clear(input);
      var subtotal_value = subtotal(input_num, output_num);
      output.value = subtotal_value;

      var btw_cost = subtotal_value - (subtotal_value/(1+BTW));
//auto print numbers
      document.getElementById("btw").innerHTML = "btw: " + btw_cost.toFixed(2);
      document.getElementById("excl_btw").innerHTML = "btw exclusive: " + (subtotal_value - btw_cost).toFixed(2);
      document.getElementById("total").innerHTML = "btw inclusive: " + subtotal_value.toFixed(2);


    }
    else {
      if(isNaN(Number(input.value))) {
        alert("input has a non numeric value");
      }
      if(isNaN(Number(output.value))) {
        alert("output has a non numeric value");
      }
    }
    return false;
  }
}
