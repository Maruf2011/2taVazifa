"use strict";
let colaPrice = 50
const mumkunPul = [5, 10, 25]
for (colaPrice; colaPrice!==0;) {
    let money = +prompt("Pul kiriting")
    if(mumkunPul.includes(money)){
        colaPrice -= money
        alert(`Sizga ${colaPrice} yetmayabdi`);

    if (colaPrice<0){
        let change = colaPrice * -1
        alert(change)
        break;
    }
    }
}