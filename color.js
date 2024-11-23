
let box = document.querySelector('#ba');
if(box.body.style.backgroundColor == "aqua"){
    box.addEventListener('click' , (e) =>{
        box.style.backgroundColor = "green";
})
}