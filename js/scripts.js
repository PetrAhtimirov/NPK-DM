function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

let combinations = function (event) {
    event.preventDefault();
    ansbox = document.querySelector('.formula-box')
    n = Number(document.getElementById('n').value)
    k = Number(document.getElementById('k').value)
    document.getElementById('answer-n').textContent = n
    document.getElementById('answer-k').textContent = k
    ans = document.getElementById('answer');
    let otv = Math.floor(factorial(n)/(factorial(k) * factorial(n-k)))
    ans.textContent = "= " + otv
    ansbox.classList.remove('opacity-zero')

    if (otv <= 1000) {
        let see_button = document.getElementById('see-all')
        see_button.classList.remove('d-none')
        see_button.classList.remove('opacity-zero')  
    }

    if(document.getElementById('ans-txt').classList.contains('active') == 0) {
        document.getElementById('ans-txt').classList.add('opacity-zero')
    }
}

let accommodation = function (event) {
    event.preventDefault();
    ansbox = document.querySelector('.formula-box')
    n = Number(document.getElementById('n').value)
    m = Number(document.getElementById('m').value)
    document.getElementById('answer-n').textContent = n
    document.getElementById('answer-m').textContent = m
    ans = document.getElementById('answer');
    let otv = Math.floor(factorial(n)/factorial(n-m))
    ans.textContent = "= " + otv
    ansbox.classList.remove('opacity-zero')

    if (otv <= 1000) {
        let see_button = document.getElementById('see-all')
        see_button.classList.remove('d-none')
        see_button.classList.remove('opacity-zero')  
    }

    if(document.getElementById('ans-txt').classList.contains('active') == 0) {
        document.getElementById('ans-txt').classList.add('opacity-zero')
    }
}

let permutations = function (event) {
    event.preventDefault();
    ansbox = document.querySelector('.formula-box')
    n = Number(document.getElementById('n').value)
    document.getElementById('answer-n').textContent = n
    ans = document.getElementById('answer');
    let otv = factorial(n)
    ans.textContent = "= " + otv
    ansbox.classList.remove('opacity-zero')

    if (otv <= 1000) {
        let see_button = document.getElementById('see-all')
        see_button.classList.remove('d-none')
        see_button.classList.remove('opacity-zero')  
    }

    if(document.getElementById('ans-txt').classList.contains('active') == 0) {
        document.getElementById('ans-txt').classList.add('opacity-zero')
    }
}

if (document.querySelector(".combinations-form")) {
    let combinationsForm = document.querySelector(".combinations-form")
    combinationsForm.addEventListener('submit', combinations);
}

if (document.querySelector(".accommodation-form")) {
    let accommodationForm = document.querySelector(".accommodation-form")
    accommodationForm.addEventListener('submit', accommodation);
}

if (document.querySelector(".permutations-form")) {
    let permutationsForm = document.querySelector(".permutations-form")
    permutationsForm.addEventListener('submit', permutations);
}

let seeAll = document.getElementById('see-all');

seeAll.onclick = function (event) {
    event.preventDefault();
    document.getElementById('see-all').classList.add('opacity-zero');
    document.getElementById('see-all').classList.add('d-none');
    document.getElementById('ans-txt').classList.remove('opacity-zero');
}