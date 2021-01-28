const current = document.querySelector(".current")
current.classList.add("active")

const pageItem = document.querySelectorAll('.page-item');

pageItem.forEach(itemList => {
    itemList.addEventListener("click", event => {
      event.preventDefault();
      current.classList.remove("active")
    if (event.target.nodeName !== "A" && event.target.nodeName !== "SPAN") {
    return
  }
    const activeRef = document.querySelector(".active")
    if (activeRef) {
    activeRef.classList.remove("active")
  }
    itemList.classList.add("active")
  })
})

let array = document.querySelectorAll(".link-dark")
let buttonNext = document.querySelector('[aria-label="Next"]')
buttonNext.addEventListener("click", event => {
  array.forEach(item => console.log(item.dataset.index))
}
)