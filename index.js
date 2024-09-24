console.log('getting loaded correctly')
const button = document.getElementById('botting-label');
const errorText = document.getElementById('error-text');
console.log('button', button)
button.addEventListener('click', function() {
  // code to run when button is clicked
  console.log('button clicked')
  errorText.value = "Clicked"
});