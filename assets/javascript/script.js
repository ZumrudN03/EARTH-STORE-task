const icon=document.querySelector(".fa-bag-shopping")
const closeIcon=document.querySelector(".fa-xmark")
const sidebar=document.querySelector(".side-bar")

icon.addEventListener("click",function () {
    sidebar.style.transform= "translate(0px , 0px)";
})

closeIcon.addEventListener("click",function(){
    sidebar.style.transform= "translate(330px , 0px)";
})

const bar=document.querySelector(".fa-bars")
const container=document.querySelector(".container")

bar.addEventListener("click",function(){
    container.classList.toggle("active")
})