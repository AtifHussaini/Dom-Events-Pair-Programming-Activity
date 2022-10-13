let main = document.querySelector(".main")

main.style.backgroundColor = "black"

let image = document.querySelector("#image")

image.style.height = "200px"
image.style.width = "200px"

let subMain = document.querySelector(".subMain") 

subMain.style.height = "50vh"
subMain.style.width = "100vw"
subMain.style.border = "5px solid white"
subMain.style.display = "flex"
subMain.style.flexDirection = "column"
subMain.style.justifyContent = "center"
subMain.style.textAlign = "center"
subMain.style.alignItems = "center"
subMain.style.gap = "3rem"
subMain.style.backgroundColor = "teal"

let counter = document.querySelector(".counter")

counter.style.fontSize = "50px"


let clicks = document.querySelector(".clicks")

let count = 0

image.addEventListener("click", function() {
    
    count ++
   
    clicks.innerText = count;
})


let subMain2 = document.querySelector(".subMain2")

subMain2.style.height = subMain.style.height = "50vh"
subMain2.style.width = "100vw"
subMain2.style.border = "5px solid white"
subMain2.style.display = "flex"
subMain2.style.flexDirection = "column"
subMain2.style.marginTop = "10px"
subMain2.style.backgroundColor = "darkblue"

let para = document.querySelector(".para")

para.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In massa tempor nec feugiat nisl pretium fusce. Odio morbi quis commodo odio. Est pellentesque elit ullamcorper dignissim. Massa eget egestas purus viverra accumsan in. Egestas maecenas pharetra convallis posuere morbi leo urna. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Id nibh tortor id aliquet lectus proin nibh. Dolor sed viverra ipsum nunc aliquet bibendum. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Odio euismod lacinia at quis. Ut faucibus pulvinar elementum integer. Magna fringilla urna porttitor rhoncus dolor purus non. Quis varius quam quisque id. Tortor condimentum lacinia quis vel. Non quam lacus suspendisse faucibus interdum posuere lorem. Nunc consequat interdum varius sit amet mattis. Magnis dis parturient montes nascetur ridiculus mus. Sagittis eu volutpat odio facilisis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus."
para.style.height = "300px"
para.style.backgroundColor = "lightgray"
para.style.fontFamily = "Lucida Bright"
para.style.margin = "20px"
para.style.padding = "10px"
para.style.overflow = "scroll"

let buttons = document.querySelector(".buttons")
buttons.style.backgroundColor = "grey"
buttons.style.height = "40px"
buttons.style.margin = "20px"
buttons.style.padding = "10px"
buttons.style.display = "flex"
buttons.style.flexDirection = "row"
buttons.style.alignItems = "center"
buttons.style.justifyContent = "space-evenly"

let large = document.querySelector(".zoomIn")

large.style.border = "2px solid black"
large.style.color = "black"
large.style.padding = "5px"
large.style.backgroundColor = "white"

let small = document.querySelector(".zoomOut")

small.style.border = "2px solid black"
small.style.color = "black"
small.style.padding = "5px"
small.style.backgroundColor = "white"

let zoomLevel = 1;

large.addEventListener("click", function (){

    zoomLevel += 0.1
    para.style.zoom = zoomLevel

})

small.addEventListener("click", function (){

    zoomLevel -= 0.1
    para.style.zoom = zoomLevel

})

let input = document.querySelector(".input")

input.style.marginTop = "10px"
input.style.height = subMain.style.height = "50vh"
input.style.width = "100vw"
input.style.border = "5px solid white"
input.style.display = "flex"
input.style.flexDirection = "row"
input.style.backgroundColor = "white"
input.style.justifyContent = "center"
input.style.alignItems = "center"

let color = document.querySelector(".color")

color.style.border = "5px solid black"
color.style.width = "60vw"
color.style.height = "25px"
color.style.marginRight = "20px"
color.style.marginLeft = "20px"
color.style.backgroundColor = "white"

let inputColor = document.querySelector(".inputColor")

inputColor.style.border = "5px solid black"
inputColor.style.width = "20vw"
inputColor.style.height = "25px"
inputColor.style.marginRight = "20px"
inputColor.style.marginLeft = "5px"
inputColor.style.backgroundColor = "white"
inputColor.style.fontSize = "20px"
inputColor.style.textAlign = "center"

inputColor.addEventListener("click", function(){

    if (document.querySelector(".color").value === "green") {
        input.style.backgroundColor = "green"
    } else if (document.querySelector(".color").value === "blue") {
         input.style.backgroundColor = "blue"
    } else if (document.querySelector(".color").value === "red") {
        input.style.backgroundColor = "red"
    }  else if (document.querySelector(".color").value === "purple") {
        input.style.backgroundColor = "purple"
    } else if (document.querySelector(".color").value === "orange") {
        input.style.backgroundColor = "orange"
    } else {
        input.style.backgroundColor = "white"
    }

    
})