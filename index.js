"use strict";

let countMarufSuv = 0
let countAzizaSuv = 0
let countDamirSuv = 0
let countMarufQatiq = 0
let countAzizaQatiq = 0
let countDamirQatiq = 0
let countMarufQaymoq = 0
let countAzizaQaymoq = 0
let countDamirQaymoq = 0
let countMarufRuchka = 0
let countAzizaRuchka = 0
let countDamirRuchka = 0
let countMarufSabzi = 0
let countAzizaSabzi = 0
let countDamirSabzi = 0
let countMarufMuzqaymoq = 0
let countAzizaMuzqaymoq = 0
let countDamirMuzqaymoq = 0
let countMarufNon = 0
let countAzizaNon = 0
let countDamirNon = 0
let countMarufOlma = 0
let countAzizaOlma = 0
let countDamirOlma = 0

const personMaruf = {
    name: "Maruf",
    items:[
        prompt("maxsulot kiriting"),
        prompt("maxsulot kiriting"),
        prompt("maxsulot kiriting"),
        prompt("maxsulot kiriting"),
        prompt("maxsulot kiriting")
    ]
}
const personAziza = {
    name: "Aziza",
    items:[
        "suv", "qatiq", "non", "olma", "ruchka"
    ]
}
const personDamir = {
    name: "Damir",
    items:[
        "sabzi", "suv", "qaymoq", "muzqaymoq"
    ]
}

console.log(personMaruf.items)
console.log(personAziza.items)
console.log(personDamir.items)
//suv
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "suv") {
        countMarufSuv += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "suv") {
        countAzizaSuv += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "suv") {
        countDamirSuv += 1;
    }
}
//qatiq
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "qatiq") {
        countMarufQatiq += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "qatiq") {
        countAzizaQatiq += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "qatiq") {
        countDamirQatiq += 1;
    }
}
//qaymoq
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "qaymoq") {
        countMarufQaymoq += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "qaymoq") {
        countAzizaQaymoq += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "qaymoq") {
        countDamirQaymoq += 1;
    }
}
//ruchka
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "ruchka") {
        countMarufRuchka += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "ruchka") {
        countAzizaRuchka += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "ruchka") {
        countDamirRuchka += 1;
    }
}
//sabzi
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "sabzi") {
        countMarufSabzi += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "sabzi") {
        countAzizaSabzi += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "sabzi") {
        countDamirSabzi += 1;
    }
}
//muzqaymoq
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "muzqaymoq") {
        countMarufMuzqaymoq += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "muzqaymoq") {
        countAzizaMuzqaymoq += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "muzqaymoq") {
        countDamirMuzqaymoq += 1;
    }
}
//non
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "non") {
        countMarufNon += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "non") {
        countAzizaNon += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "non") {
        countDamirNon += 1;
    }
}
//olma
for (let i = 0; i < personMaruf.items.length; i +=1 ) {
    if (personMaruf.items[i] === "olma") {
        countMarufOlma += 1;
    }
}
for (let i = 0; i < personAziza.items.length; i +=1 ) {
    if (personAziza.items[i] === "olma") {
        countAzizaOlma += 1;
    }
}
for (let i = 0; i < personDamir.items.length; i +=1 ) {
    if (personDamir.items[i] === "olma") {
        countDamirOlma += 1;
    }
}


let pursaches = {
    suv : countMarufSuv + countAzizaSuv + countDamirSuv,
    qatiq: countMarufQatiq + countAzizaQatiq + countDamirQatiq,
    qaymoq: countMarufQaymoq + countAzizaQaymoq + countDamirQaymoq,
    ruchka: countMarufRuchka + countAzizaRuchka + countDamirRuchka,
    sabzi: countMarufSabzi + countAzizaSabzi + countDamirSabzi,
    muzqaymoq: countMarufMuzqaymoq + countAzizaMuzqaymoq + countDamirMuzqaymoq,
    non: countMarufNon + countAzizaNon + countDamirNon,
    olma: countMarufOlma + countAzizaOlma + countDamirOlma

}
console.log(pursaches);

let marufArray = personMaruf.items[0]

for (let i = 1; i < personMaruf.items.length; i++) {
    if (personMaruf.items[i].length > marufArray.length) {
        marufArray = personMaruf.items[i]
    }
}
console.log(`Eng kop sotib olingan maxsulot : ${marufArray}`)