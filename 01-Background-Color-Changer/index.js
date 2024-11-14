// set of colors
const colors = [
  "#ff33ee",
  "#ee33ff",
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
  "#ffffff"

]

// storing elements for manipulation
const bgHexCode = document.querySelector("#bg-hex-code");
const hexCode = document.querySelector("#hex-code");
const body = document.body;


// function for handling change events
const changeColor=()=>{
 const randomColors = colors[Math.floor(Math.random() * colors.length)]
  body.style.backgroundColor = randomColors;
  bgHexCode.innerText = randomColors;
  // if(randomColors === "#ffffff"){
  //   hexCode.style.color = "#000";
  
  // }
  
  
}



// onload function for first time loading
window.onload(changeColor());