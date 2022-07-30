const list = document.querySelector('.list');

// dragstart, dragover, drop

let picked = null;
let pickedIndex = null;
list.addEventListener("dragstart", (e) => {
  const obj = e.target;
  picked = obj
  pickedIndex = [...obj.parentNode.children].indexOf(obj)
  // console.log(e);
})
list.addEventListener("dragover", (e) => {
  e.preventDefault()
  // console.log(e)
})
list.addEventListener("drop", (e) => {
  const obj = e.target
  const index = [...obj.parentNode.children].indexOf(obj)
  
  index > pickedIndex ? obj.after(picked) : obj.before(picked)
})