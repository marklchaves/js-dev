let output = document.getElementById("size");
let selVal = document.getElementById("sel-val");
let slider = document.getElementById("myRange");
let units = document.getElementById("units");

output.innerHTML = slider.value + units.value; 
output.style.fontSize = slider.value + units.value;

selVal.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value + units.value;
  output.style.fontSize = this.value + units.value;
  selVal.innerHTML = slider.value; 
} 
units.oninput = function() {
    output.innerHTML = slider.value + this.value;
    output.style.fontSize = slider.value + this.value;
} 