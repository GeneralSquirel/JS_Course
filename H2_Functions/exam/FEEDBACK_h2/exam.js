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

function berekenBtwViaKnop(){

var outputwaarde = +document.getElementById("output").value;

var btw = outputwaarde / 1.21 * 0.21;
var exclbtw = outputwaarde / 1.21;

var totaalTekst = "De btw is: "+btw+"<br />"
totaalTekst += "Excl is: "+exclbtw+"<br />"

document.getElementById("uitkomt_via_knop").innerHTML = totaalTekst;

}


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


function inputOutput()
{
//ik doe hieronder het volgende
//in de var voornaamAchternaam sla ik de output (return value) op van de functie aanroep van de functie printNaam() die ik hieronder definieer
//zoals je ziet, geef ik de functie 2 inputs: in dit geval mijn voornaam en mijn achternaam
//hij moet Roberto Postma (dus met een spatie) teruggeven
var voornaamAchternaam = printNaam('Roberto','Postma');//is mijn voor en achternaam

document.getElementById("uitkomt_via_knop").innerHTML = voornaamAchternaam;

}

function printNaam(voornaam,achternaam)
{
	
	var outputWaarde = '';//deze waarde geef ik aan 't eind terug als output dmv het return keyword
	
	outputWaarde += voornaam;//hier voeg ik voornaam (dus Roberto in 't voorbeeld) toe... want, de functie wordt aangeroepen met de waarde Roberto en Postma
	//dmv += plak je het eraan vast (ipv dat je de waarde overschrijft)
	outputWaarde += ' ';//hetzelfde voor het eraan plakken van de spatie
	outputWaarde += achternaam;//hetzelfde voor het eraan plakken van de achternaam
	
	return outputWaarde;//hier retourneert de functie de uitkomst waarde naar de plaats waar hij wordt aangeroepen (in de functie hierboven dus).
	//daar zul je zien dat voornaamAchternaam in dit geval deze output waarde krijgt...
}
