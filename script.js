const telCislo = "+420 111 222 333"
const email = "nece@neco.cz"
const regEx = /\+420 ?\d{3} ?\d{3} ?\d{3}/
const vystup = telCislo.match(regEx)

console.log(regEx.test(telCislo))
console.log(vystup)

const vystup1 = telCislo.match(regEx)
const vystup2 = email.match(/\w+@\w+\.\w+/)

console.log(regEx.test(telCislo))
console.log(vystup2)

//přístup k prvkům pole přes konkrétní index
console.log(vystup2[0])

//práce s prvky v poli přes cyklus forEach
vystup2.forEach((val) => {
    console.log(val)
})

//nefunguje správně
if (regEx.test(telCislo)) {
    console.log("Format cisla je v poradku")
} else {
    console.log("Format cisla neodpovida")
}
