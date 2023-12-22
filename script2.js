document.querySelector(".prvni").addEventListener("click", (e) => {
    console.log("Kliklo na div prvni"), {capture: true}
})

document.querySelector(".druhy").addEventListener("click", (e) => {
    console.log("Kliklo na div druhy")
})

document.querySelector(".btn").addEventListener("click", (e) => {
    e.stopImmediatePropagation()
    console.log("Kliklo se na tlacitko")
})

document.querySelector(".btn").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Na tlacitko se kliklo znovu")
})