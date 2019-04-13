let inputElement = document.getElementById('input');
let ulElement = document.getElementById('ul');
let liElement;
inputElement.addEventListener("change", function() {
  liElement = document.createElement('li');
  liElement.textContent = event.target.value;
  ulElement.appendChild(liElement);
  event.target.value = '';
})

ulElement.addEventListener("click", function() {
  //当用户点击到UL元素的时候不报错(确保用户点击到LI元素再执行删除操作)
  if (event.target.parentElement === ulElement) {
    ulElement.removeChild(event.target);
  }
})
