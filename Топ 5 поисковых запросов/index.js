var list = document.querySelector('.output ul');
var seacrInput = document.querySelector('.output input');
var seacrBtn = document.querySelector('.output button');

list.innerHTML = '';

var myStory = [];

seacrBtn.onclick = function(){
    if (seacrInput.value !== ''){
        myStory.unshift(seacrInput.value);

        list.innerHTML = '';

        for (var i = 0; i < myStory.length; i++){
            itemText = myStory[i];
            var listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        if(myStory.length >= 5){
            myStory.pop();
        }

        seacrInput.value = '';
        seacrInput.focus();
    }
}
