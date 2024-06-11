var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lower = input.toLowerCase();
  var first = lower.slice(0,1);
  var capitaliz = lower.replace(first, first.toUpperCase());

  var result = capitaliz;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
