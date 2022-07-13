// store id of sliders in a variable

let borderRange = document.getElementById("border-range");
let paddingRange = document.getElementById("padding-range");
let contentRange = document.getElementById("content-range");

// store id of color-picker in a variable

let borderColor = document.getElementById("border-color");
let paddingColor = document.getElementById("padding-color");
let contentColor = document.getElementById("content-color");

// get the classes of all the divs using querySelector

let borderBox = document.querySelector(".border");
let paddingBox = document.querySelector(".padding");
let contentBox = document.querySelector(".content");

// attach event listener to each slider and color picker

borderRange.addEventListener("change", function(){
 borderBox.style.padding = borderRange.value + "px"
})
paddingRange.addEventListener("change", function(){
 paddingBox.style.padding = paddingRange.value + "px"
})
contentRange.addEventListener("change", function(){
 contentBox.style.padding = contentRange.value + "px"
})

// add event listener to the color pickers

borderColor.addEventListener("change", function(){
 borderBox.style.backgroundColor = borderColor.value
})
paddingColor.addEventListener("change", function(){
 paddingBox.style.backgroundColor = paddingColor.value
})
contentColor.addEventListener("change", function(){
 contentBox.style.backgroundColor = contentColor.value
})


