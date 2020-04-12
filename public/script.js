function onOff() {
document
.querySelector("#modal")
.classList
.toggle("hide")

document
    .querySelector("body")
    .classList
    .toggle("hideScroll")


  document
  .querySelector("#modal")
  .classList
  .toggle("addScroll")  
}

function checkFields (event) {
  console.log(event.target["title"].value)
  const valuesToCheck=[
    "title",
    "image",
    "category",
    "description",
    "link",
  ]

  for (let value of valueToCheck) {
    console.log(event.target[value].value)
  }
}








