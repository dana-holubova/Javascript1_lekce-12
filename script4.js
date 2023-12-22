let newListItem = document.createElement("li")
let counter = 0

document.querySelector(".btn").addEventListener("click", () => {
    newListItem = document.createElement("li")
    newListItem.textContent = "polozka " + counter
    document.querySelector(".cervena").appendChild(newListItem)
    counter++
})