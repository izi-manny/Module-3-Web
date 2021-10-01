const favColorBtn = document.querySelector('#color')
const favPlaceBtn = document.querySelector('#place')
const favRitualeBtn = document.querySelector('#ritual')

favColorBtn.addEventListener('click', () => {
    alert('Glad you asked! My favorite color is Sky Blue')
})

favPlaceBtn.addEventListener('click', () => {
    alert('My favorite place is among the stars')
})

favRitualeBtn.addEventListener('click', () => {
    alert('My favorite ritual is brew a fresh cup of coffee and sip it in the back yard first thing in the morning')
})