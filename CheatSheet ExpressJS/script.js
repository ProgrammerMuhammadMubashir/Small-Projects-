let pre=document.getElementsByTagName("pre")
Array.from(pre).forEach((preTag)=>{
    preTag.addEventListener("click",()=>{
        let codeToCopied=preTag.firstElementChild.innerText
        
        console.log(codeToCopied)
        navigator.clipboard.writeText(codeToCopied)
        
    })
})
