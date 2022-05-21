// console.log("we moved in with javascript")

const toggle = document.getElementById("night")
const body = document.getElementById("bodyy")
const container = document.getElementsByClassName("container")

toggle.addEventListener("click", () =>{
    console.log("clicked night mode")
    body.classList.toggle("body_night")
    
})