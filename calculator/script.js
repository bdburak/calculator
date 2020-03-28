var input = document.getElementById('input');
var tmp = input.value;

function Display(char) {
  //|| (input.value == "0" && char == "0")
  if (input.value == "0") {
    input.value =char;
  }
  else {
    input.value +=char;
  }

}
function Eval() {
  input.value = eval(input.value);
}
function DeleteAll() {
  input.value = "0";
}
function DeleteLast() {
  if (input.value != "0") {
    input.value = input.value.slice(0,-1);
  }
  if (input.value == "") {
    input.value = "0";
  }
}
