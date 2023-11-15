const icon=document.querySelector(".fa-bag-shopping")
const closeIcon=document.querySelector(".fa-xmark")
const sidebar=document.querySelector(".side-bar")

icon.addEventListener("click",function () {
    sidebar.style.transform= "translate(0% , 0%)";
})

closeIcon.addEventListener("click",function(){
    sidebar.style.transform= "translate(100% , 0%)";
})

const bar=document.querySelector(".fa-bars")
const container=document.querySelector(".container")

bar.addEventListener("click",function(){
    container.classList.toggle("active")
})