console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been successfully submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function picMouseover(evt){
	alert("You must be a Master Debugger!")
}

let duckPic = document.querySelector('#duck-picture')

duckPic.addEventListener('mouseover', picMouseover)