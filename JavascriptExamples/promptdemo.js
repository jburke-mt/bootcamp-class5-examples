function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Name: " + person;
    }
  }