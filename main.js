window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>50)
})



// show hide faqs

const faqs= document.querySelectorAll('.faq')

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open")


        //changin the icon opne close

        const icon=faq.querySelector(".faq__icon i")
        if(icon.className=="fa-solid fa-plus"){
            icon.className="fa-solid fa-minus"
        }else{
            icon.className="fa-solid fa-plus"
        }
    })
})



const menu=document.querySelector(".nav__menu")
const menuBtn=document.querySelector("#open-menu-btn")
const closeBtn=document.querySelector("#close-menu-btn")

menuBtn.addEventListener("click",()=>{
    menu.style.display="flex"
    menuBtn.style.display="none"
    closeBtn.style.display="inline-block"
})

closeBtn.addEventListener("click",()=>{
    menu.style.display="none"
    menuBtn.style.display="inline-block"
    closeBtn.style.display="none"
})