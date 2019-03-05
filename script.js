//bind HTML id'sreredws
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");
//koppel eventlistener
submitButton.addEventListener('click', ajax);
// ajax functie
function ajax() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseHere.innerHTML = this.responseText;
    }
  };
  let httpString = "form_1.php?firstName=" + firstName.value + "&age=" + age.value + "&lastName=" + lastName.value + "&Email=" + Email.value;
  //debuggen laat de http string zien
  console.log(httpString);
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send(); //doe het
}
