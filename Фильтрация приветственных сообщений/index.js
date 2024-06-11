var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['С днём рождения!',
                 'С Рождеством, любовь моя',
                 'Счастливого Рождества всей твоей семье',
                 'Ты — та, кто нужен мне на Рождество',
                 'Поправляйся скорее'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  if (greetings[i].indexOf('Рождеств') !== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
