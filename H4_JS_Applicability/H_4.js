//img swap assignment 1
function imgSwap(){

  
  switch (document.getElementById('image').getAttribute('src')) {
    case "1.png":
    document.getElementById("image").src = "2.png";
    break;

    case "2.png":
    document.getElementById("image").src = "3.png"
    break;

    case "3.png":
    document.getElementById("image").src = "1.png"
    break;
    default:

  }
}
//assignment
