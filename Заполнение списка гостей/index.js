var people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Пригласить: ';
refused.textContent = 'Не приглашать(!): ';

var i = 0;

do{
    if(people[i] === 'Колин' || people[i] === 'Терри'){
        refused.textContent += people[i] + ', ';
    }else{
        admitted.textContent += people[i] + ', ';
    }
    i++;
}while(i < people.length);

refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';

