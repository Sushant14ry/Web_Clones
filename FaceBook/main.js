// PopOver
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Gender Select
if(window.location.pathname === '/'){
  const radioBt1 = document.querySelector("#flexRadioDefault1")
  const radioBt1 = document.querySelector("#flexRadioDefault2")
  const radioBt1 = document.querySelector("#flexRadioDefault3")
  const genderSelect = document.querySelector("#genderSelect")

  radioBt1.addEventListener("change", () =>{
    genderSelect.classList.add('d-done')
  })
  radioBt2.addEventListener("change", () =>{
    genderSelect.classList.add('d-done')
  })
  radioBt3.addEventListener("change", () =>{
    genderSelect.classList.remove('d-done')
  })
}