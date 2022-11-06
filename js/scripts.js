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
    ans.textContent = "= " + (factorial(n)/(factorial(k) * factorial(n-k)))
    ansbox.classList.remove('opacity-zero')
}

let calcForm = document.querySelector(".formula-form")
calcForm.addEventListener('submit', combinations);