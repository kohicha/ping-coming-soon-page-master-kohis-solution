function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.querySelector('.errortext').classList.add('hidden')
document.form1.text1.focus();
return true;
}
else
{
document.querySelector('.errortext').classList.remove('hidden')
document.form1.text1.focus();
return false;
}
}

var form = document.getElementById('form');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);