console.log("merhaba kodlama.io")

let dolarDun=9.20
let dolarBugun=9.30
//yeni bir blog açılır burası atlanr.
{
    let dolarDun=9.10
}
console.log(dolarDun)
//const sabit
const euroDun=11.2
//euroDun=11
console.log(euroDun)

let konutKrediler=["konut kredisi","emlak konut kredisi","kamu konut kredisi"]
console.log(konutKrediler)

let konutKredileri=[12,"emlak konut kredisi",["a","b","c"]]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKrediler.length; i++) {
    console.log("<li>"+konutKrediler[i]+"</li>")
    
}
console.log("</ul>")
