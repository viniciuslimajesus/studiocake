const card = document.querySelectorAll('div.card')

card.addEventListener('click', function(){
    card.classList.toggle('flip')
})