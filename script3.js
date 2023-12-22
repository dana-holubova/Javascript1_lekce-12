const newList = document.createElement("ul")

const newListItem = document.createElement("li")

newListItem.textContent = "Položka 1"

newList.style.backgroundColor = "gold"
newList.classList.add("cervena")

//console.log(newList)

newList.appendChild(newListItem)

document.querySelector("body").appendChild(newList)
