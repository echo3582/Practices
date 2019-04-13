let inputElement = document.getElementById('input');
let ulElement = document.getElementById('ul');
inputElement.addEventListener("change", function() {
  let liElement = document.createElement('li');
  liElement.textContent = event.target.value;
  ulElement.appendChild(liElement);
  event.target.value = '';
})

ulElement.addEventListener("click", function() {
  ulElement.removeChild(event.target);
})
