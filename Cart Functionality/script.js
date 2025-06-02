 let btn=document.getElementsByClassName("btn")
    let liValue=document.querySelector(".value")
    window.addEventListener("load",()=>{
let cardTitle=document.getElementsByClassName("card-title")
Array.from(cardTitle).forEach((title)=>{

    let z=localStorage.getItem(title.innerText)
if(z){
let btn=title.nextElementSibling.nextElementSibling
btn.innerText="Added"
btn.classList.add('disabled')
liValue.innerText=localStorage.getItem("Cart")
}
else{

}
})
    })



   
    Array.from(btn).forEach((btn)=>{
btn.addEventListener("click",()=>{
    if(!localStorage.getItem("Cart")){
let value=0
      value++
      let nameOfProduct=btn.previousElementSibling.previousElementSibling.innerText
      localStorage.setItem("Cart",value)
      localStorage.setItem(nameOfProduct,`Added-${value}`)
      liValue.innerText=value
  btn.innerText="Added"
  btn.classList.add('disabled')
    }
    else{
      let value=localStorage.getItem("Cart")
         value++
      let nameOfProduct=btn.previousElementSibling.previousElementSibling.innerText
      localStorage.setItem("Cart",value)
      localStorage.setItem(nameOfProduct,`Added-${value}`)
      liValue.innerText=value
  btn.innerText="Added"
  btn.classList.add('disabled')
    }
})
    })