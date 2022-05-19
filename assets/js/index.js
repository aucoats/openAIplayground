const apiKey = process.env.APIKEY;

const textInput = document.getElementById('promptArea');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    event.preventDefault();
    console.log('clicked')
    console.log(apiKey);
});