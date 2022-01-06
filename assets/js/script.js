document.querySelector('#services').onclick = function () {
    const value = document.querySelector('#comment').value
    const list = document.querySelector('#list')
    const li = document.createElement('li')
    li.textContent = value
    list.appendChild(li)
}