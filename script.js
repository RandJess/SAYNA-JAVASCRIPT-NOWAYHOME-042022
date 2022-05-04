let btnS = [...document.getElementsByClassName("btn")];
let imageInwhiteS = [...document.querySelectorAll(".imageInwhite")]
let inUnderlineS = [...document.getElementsByClassName("inUnderline")]
let h1 = [...document.getElementsByTagName("h1")]
let myDiv = document.querySelector('.myDiv')
let img7 = document.getElementsByTagName("img")[7]
let img11 = document.getElementsByTagName("img")[11]
let button6 = document.getElementsByClassName("button6")

inversion1 ={
    backgroundColor: "#b11313",
    color: "#ffffff",
    borderColor: "#ffffff",
}
inversion2={
    border: "none",
    color: "#b11313",
    backgroundColor: "#ffffff",
}
inversion3 ={
    backgroundColor: "#b11313",
    color: "#ffffff",
    borderColor: "#ffffff"
}
inversion4 ={
    backgroundColor: "#b11313",
    color: "#ffffff",
    borderColor: "#ffffff"
}
inversion5 ={
    backgroundColor: "#b11313",
    color: "#ffffff",
    borderColor: "#ffffff"
}
inversion6={
    color: "#114c92",
    borderColor: "none",
}
inversion7={
    backgroundColor: "#000000",
    color: "#ffffff",
}
let listObet =[
    inversion1,
    inversion2,
    inversion3,
    inversion4,
    inversion5,
    inversion6,
    inversion7,
]


btnS.forEach( (btn, i) => {
    btn.addEventListener("mouseover", () =>{
        Object.assign( btn.style, listObet[i])
    })
    btn.addEventListener("mouseout", () =>{
        btn.style = "none"
    })

}
);
// -------------------------------------------------------------
imageInwhiteS.forEach((imageInwhite)=>{
    imageInwhite.addEventListener("mouseover", () =>{
        Object.assign( imageInwhite.style,{
            backgroundColor : '#4eecec',
            filter : "invert(100%)",
        })
    })
    imageInwhite.addEventListener("mouseout", ()=>{
        imageInwhite.style = "none"
    })
})

// -------------------------------------------------------------
inUnderlineS.forEach((inUnderline)=>{
    inUnderline.addEventListener("mouseover", ()=>{
        console.log("lol");
        Object.assign( inUnderline.style,{
            textDecoration: "underline",
            color: "white",
        })
    })
    inUnderline.addEventListener("mouseout",()=>{
        inUnderline.style = "none"
    })
})

// -------------------------------------------------------------
h1.forEach((i)=>{
    i.classList.add('animated')

})
// -------------------------------------------------------------
myDiv.classList.add('imgFade')
// -------------------------------------------------------------
img7.classList.add('imgHome2')
img11.classList.add('imgSpiderSvg')
window.onscroll = function(){
    if (window.pageYOffset>=1000) {
        img7.style.opacity= "45%"
    }else{
        img7.style.opacity= "100%"
    }
    if (window.pageYOffset>=1840 ) {
        img7.style.display="none"
        img11.style.display="block"
    }else{
        img7.style.display="block"
        img11.style.display="none"
    }
    if(window.pageYOffset>=2100){
        img11.style.opacity="35%"
    }

}
// -------------------------------------------------------------

button6.addEventListener("click", function(){
    let formSpidermanS = [...document.querySelectorAll(".form-spiderman")]
    let formNewsletterS = [...document.querySelectorAll(".form-newsletter")]
    let modalBody= document.getElementsByClassName("modal-body")

    formSpidermanS.forEach((formSpiderman)=>{
        if (formSpiderman.value="") {
            modalBody.TEXT
            formSpiderman.focus();
            return false;
        } else {
            
        }
    })
})