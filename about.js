console.log("hello world");

let duckImage = document.querySelector('img')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('submitted successfully!')
}

duckImage.addEventListener('mouseover', () => {
    alert('you have great taste in pictures')
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);