const c11 = ["may hatdog sa cart" , "Sinusulit ang mga sales." , "maraming vouchers para makatipid" , "multiple accounts para sa newbie discount" , "check out sa last minute sale"];
let random = Math.floor(Math.random() * 5);
document.getElementById("b1").innerHTML= c11.at(random);
if(random == 4){
    random = -1;
}
random += 1;
document.getElementById("b2").innerHTML= c11.at(random);
if(random == 4){
    random = -1;
}
random += 1;
document.getElementById("b3").innerHTML= c11.at(random);
if(random == 4){
    random = -1;
}
random += 1;
document.getElementById("b4").innerHTML= c11.at(random);
if(random == 4){
    random = -1;
}
random += 1;
document.getElementById("b5").innerHTML= c11.at(random);
// i
const c12 = ["puyat sa midnight sale" , "may shoppe" , "may lazada" , "2 ang nasa cart" , "may food delivery app"];
let random1 = Math.floor(Math.random() * 5);
document.getElementById("i1").innerHTML= c12.at(random1);
if(random1 == 4){
    random1 = -1;
}
random1 += 1;
document.getElementById("i2").innerHTML= c12.at(random1);
if(random1 == 4){
    random1 = -1;
}
random1 += 1;
document.getElementById("i3").innerHTML= c12.at(random1);
if(random1 == 4){
    random1 = -1;
}
random1 += 1;
document.getElementById("i4").innerHTML= c12.at(random1);
if(random1 == 4){
    random1 = -1;
}
random1 += 1;
document.getElementById("i5").innerHTML= c12.at(random1);
// n
const c123 = ["may damit sa cart" , "may sapatos sa cart" , "may naka order ngayon" , "address ng sti ang nakalagay" , "naka cod ang mga order"];
let random12 = Math.floor(Math.random() * 5);
document.getElementById("n1").innerHTML= c123.at(random12);
if(random12 == 4){
    random12 = -1;
}
random12 += 1;
document.getElementById("n2").innerHTML= c123.at(random12);
if(random12 == 4){
    random12 = -1;
}
random12 += 1;
document.getElementById("n3").innerHTML= c123.at(random12);
if(random12 == 4){
    random12 = -1;
}
random12 += 1;
document.getElementById("n4").innerHTML= c123.at(random12);
if(random12 == 4){
    random12 = -1;
}
random12 += 1;
document.getElementById("n5").innerHTML= c123.at(random12);
// g
const c1234 = ["Cart items worth 500" , "Cart items worth 400" , "Cart items worth 150" , "Cart items worth 200" , "Cart items worth 0"];
let random123 = Math.floor(Math.random() * 5);
document.getElementById("g1").innerHTML= c1234.at(random123);
if(random123 == 4){
    random123 = -1;
}
random123 += 1;
document.getElementById("g2").innerHTML= c1234.at(random123);
if(random123 == 4){
    random123 = -1;
}
random123 += 1;
document.getElementById("g3").innerHTML= c1234.at(random123);
if(random123 == 4){
    random123 = -1;
}
random123 += 1;
document.getElementById("g4").innerHTML= c1234.at(random123);
if(random123 == 4){
    random123 = -1;
}
random123 += 1;
document.getElementById("g5").innerHTML= c1234.at(random123);
// o
const c12345 = ["nanonood ng live for discount" , "may short sa cart" , "may gadget sa cart" , "may order last week" , "may voucher"];
let random1234 = Math.floor(Math.random() * 5);
document.getElementById("o1").innerHTML= c12345.at(random1234);
if(random1234 == 4){
    random1234 = -1;
}
random1234 += 1;
document.getElementById("o2").innerHTML= c12345.at(random1234);
if(random1234 == 4){
    random1234 = -1;
}
random1234 += 1;
document.getElementById("o3").innerHTML= c12345.at(random1234);
if(random1234 == 4){
    random1234 = -1;
}
random1234 += 1;
document.getElementById("o4").innerHTML= c12345.at(random1234);
if(random1234 == 4){
    random1234 = -1;
}
random1234 += 1;
document.getElementById("o5").innerHTML= c12345.at(random1234);

let k = 0;
let k2 = 0;
let k3 = 0;
let box = document.querySelector('#ba');
    box.addEventListener('click' , (e) =>{
            if (k == 0) {
                box.style.background = "linear-gradient(to bottom right, orange, red)";
                k += 1;
                if(k == 1 && k2 == 1 && k3 == 1 && k4 == 1 && k5 ==1){
                    alert("You win Talk to Yuan");
                }
                if (k == 1 && k7 == 1 && k13 == 1 && k19 == 1 && k25 == 1) {
                    alert("You win Talk to Yuan");
                }
            }else{
                box.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k -= 1;
            }
        })
let box2 = document.querySelector('#ba2');
    box2.addEventListener('click' , (e) =>{
            if (k2 == 0) {
                box2.style.background = "linear-gradient(to bottom right, orange, red)";
                k2 += 1;
                if(k == 1 && k2 == 1 && k3 == 1 && k4 == 1 && k5 ==1){
                    alert("You win Talk to Yuan");
                }
            }else{
                box2.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k2 -= 1;
            }
        })
let box3 = document.querySelector('#ba3');
    box3.addEventListener('click' , (e) =>{
            if (k3 == 0) {
                box3.style.background = "linear-gradient(to bottom right, orange, red)";
                k3 += 1;
                if(k == 1 && k2 == 1 && k3 == 1 && k4 == 1 && k5 ==1){
                    alert("You win Talk to Yuan");
                }
            }else{
                box3.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k3 -= 1;
            }
        })
let k4 = 0;
let box4 = document.querySelector('#ba4');
    box4.addEventListener('click' , (e) =>{
            if (k4 == 0) {
                box4.style.background = "linear-gradient(to bottom right, orange, red)";
                k4 += 1;
                if(k == 1 && k2 == 1 && k3 == 1 && k4 == 1 && k5 ==1){
                    alert("You win Talk to Yuan");
                }
            }else{
                box4.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k4 -= 1;
            }
        })
let k5 = 0;
let box5 = document.querySelector('#ba5');
    box5.addEventListener('click' , (e) =>{
            if (k5 == 0) {
                box5.style.background = "linear-gradient(to bottom right, orange, red)";
                k5 += 1;
                if(k == 1 && k2 == 1 && k3 == 1 && k4 == 1 && k5 ==1){
                    alert("You win Talk to Yuan");
                }
            }else{
                box5.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k5 -= 1;
            }
        })
let k6 = 0;
let box6 = document.querySelector('#ba6');
    box6.addEventListener('click' , (e) =>{
            if (k6 == 0) {
                box6.style.background = "linear-gradient(to bottom right, orange, red)";
                k6 += 1;
            }else{
                box6.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                k6 -= 1;
            }
    })
let k7 = 0;
let box7 = document.querySelector('#ba7');
            box7.addEventListener('click' , (e) =>{
                    if (k7 == 0) {
                        box7.style.background = "linear-gradient(to bottom right, orange, red)";
                        k7 += 1;
                        if (k == 1 && k7 == 1 && k13 == 1 && k19 == 1 && k25 == 1) {
                            alert("You win Talk to Yuan");
                        }
                    }else{
                        box7.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k7 -= 1;
                    }
                })
let k8 = 0;
let box8 = document.querySelector('#ba8');
            box8.addEventListener('click' , (e) =>{
                    if (k8 == 0) {
                        box8.style.background = "linear-gradient(to bottom right, orange, red)";
                        k8 += 1;
                    }else{
                        box8.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k8 -= 1;
                    }
                })
let k9 = 0;
let box9 = document.querySelector('#ba9');
            box9.addEventListener('click' , (e) =>{
                    if (k9 == 0) {
                        box9.style.background = "linear-gradient(to bottom right, orange, red)";
                        k9 += 1;
                    }else{
                        box9.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k9 -= 1;
                    }
                })
let k10 = 0;
let box10 = document.querySelector('#ba10');
            box10.addEventListener('click' , (e) =>{
                    if (k10 == 0) {
                        box10.style.background = "linear-gradient(to bottom right, orange, red)";
                        k10 += 1;
                    }else{
                        box10.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k10 -= 1;
                    }
                })
let k11 = 0;
let box11 = document.querySelector('#ba11');
            box11.addEventListener('click' , (e) =>{
                    if (k11 == 0) {
                        box11.style.background = "linear-gradient(to bottom right, orange, red)";
                        k11 += 1;
                    }else{
                        box11.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k11 -= 1;
                    }
                })
let k12 = 0;
let box12 = document.querySelector('#ba12');
            box12.addEventListener('click' , (e) =>{
                    if (k12 == 0) {
                        box12.style.background = "linear-gradient(to bottom right, orange, red)";
                        k12 += 1;
                    }else{
                        box12.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k12 -= 1;
                    }
                })
let k13 = 0;
let box13 = document.querySelector('#ba13');
            box13.addEventListener('click' , (e) =>{
                    if (k13 == 0) {
                        box13.style.background = "linear-gradient(to bottom right, orange, red)";
                        k13 += 1;
                        if (k == 1 && k7 == 1 && k13 == 1 && k19 == 1 && k25 == 1) {
                            alert("You win Talk to Yuan");
                        }
                    }else{
                        box13.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k13 -= 1;
                    }
                })
let k14 = 0;
let box14 = document.querySelector('#ba14');
            box14.addEventListener('click' , (e) =>{
                    if (k14 == 0) {
                        box14.style.background = "linear-gradient(to bottom right, orange, red)";
                        k14 += 1;
                    }else{
                        box14.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k14 -= 1;
                    }
                })
let k15 = 0;
let box15 = document.querySelector('#ba15');
            box15.addEventListener('click' , (e) =>{
                    if (k15 == 0) {
                        box15.style.background = "linear-gradient(to bottom right, orange, red)";
                        k15 += 1;
                    }else{
                        box15.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k15 -= 1;
                    }
                })
let k16 = 0;
let box16 = document.querySelector('#ba16');
            box16.addEventListener('click' , (e) =>{
                    if (k16 == 0) {
                        box16.style.background = "linear-gradient(to bottom right, orange, red)";
                        k16 += 1;
                    }else{
                        box16.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k16 -= 1;
                    }
                })
let k17 = 0;
let box17 = document.querySelector('#ba17');
            box17.addEventListener('click' , (e) =>{
                    if (k17 == 0) {
                        box17.style.background = "linear-gradient(to bottom right, orange, red)";
                        k17 += 1;
                    }else{
                        box17.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k17 -= 1;
                    }
                })
let k18 = 0;
let box18 = document.querySelector('#ba18');
            box18.addEventListener('click' , (e) =>{
                    if (k18 == 0) {
                        box18.style.background = "linear-gradient(to bottom right, orange, red)";
                        k18 += 1;
                    }else{
                        box18.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k18 -= 1;
                    }
                })
let k19 = 0;
let box19 = document.querySelector('#ba19');
            box19.addEventListener('click' , (e) =>{
                    if (k19 == 0) {
                        box19.style.background = "linear-gradient(to bottom right, orange, red)";
                        k19 += 1;
                        if (k == 1 && k7 == 1 && k13 == 1 && k19 == 1 && k25 == 1) {
                            alert("You win Talk to Yuan");
                        }
                    }else{
                        box19.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k19 -= 1;
                    }
                })
let k20 = 0;
let box20 = document.querySelector('#ba20');
            box20.addEventListener('click' , (e) =>{
                    if (k20 == 0) {
                        box20.style.background = "linear-gradient(to bottom right, orange, red)";
                        k20 += 1;
                    }else{
                        box20.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k20 -= 1;
                    }
                })
let k21 = 0;
let box21 = document.querySelector('#ba21');
            box21.addEventListener('click' , (e) =>{
                    if (k21 == 0) {
                        box21.style.background = "linear-gradient(to bottom right, orange, red)";
                        k21 += 1;
                    }else{
                        box21.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k21 -= 1;
                    }
                })
let k22 = 0;
let box22 = document.querySelector('#ba22');
            box22.addEventListener('click' , (e) =>{
                    if (k22 == 0) {
                        box22.style.background = "linear-gradient(to bottom right, orange, red)";
                        k22 += 1;
                    }else{
                        box22.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k22 -= 1;
                    }
                })
let k23 = 0;
let box23 = document.querySelector('#ba23');
            box23.addEventListener('click' , (e) =>{
                    if (k23 == 0) {
                        box23.style.background = "linear-gradient(to bottom right, orange, red)";
                        k23 += 1;
                    }else{
                        box23.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k23 -= 1;
                    }
                })
let k24 = 0;
let box24 = document.querySelector('#ba24');
            box24.addEventListener('click' , (e) =>{
                    if (k24 == 0) {
                        box24.style.background = "linear-gradient(to bottom right, orange, red)";
                        k24 += 1;
                    }else{
                        box24.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k24 -= 1;
                    }
                })
let k25 = 0;
let box25 = document.querySelector('#ba25');
            box25.addEventListener('click' , (e) =>{
                    if (k25 == 0) {
                        box25.style.background = "linear-gradient(to bottom right, orange, red)";
                        k25 += 1;
                        if (k == 1 && k7 == 1 && k13 == 1 && k19 == 1 && k25 == 1) {
                            alert("You win Talk to Yuan");
                        }
                    }else{
                        box25.style.background = "linear-gradient(to bottom right, #d733df, #59025e)";
                        k25 -= 1;
                    }
                })