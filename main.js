const btn = document.querySelector(".boy__button");
const input = document.querySelector(".boy__input");
input.style.display = "none"
btn.style.display ="block"
btn.style.cssText="align-items:center"
btn.addEventListener("click", (el) => {
    if(input.style.display=="none"){
        input.style.display ="block"
    }
});
btn.addEventListener("click", (el)=>{
    if(btn.style.display="block")
    {
        btn.style.display="none"
    }
})
