function Hello(){
  alert("Something error")
}

function myhome(x) {
  location.href = "#home"
}

function myabout(x) {
  location.href = '#about';
}

function myeducation(x) {
  location.href = '#education';
}

function myvision(x) {
  location.href = "#vision";
}

function myskills(x) {
  location.href = "#skills";
}

function myexperience(x){
  location.href="#experience";
}


// responsive
function closeNav() {
  document.getElementById("menu").style.width = "0%";
}

function openNav() {
  document.getElementById("menu").style.width = "100%";
}