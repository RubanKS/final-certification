
document.querySelector('.reg_btn').addEventListener('click', function (e) {

	let email = document.querySelector('#email').value;
	let password1 = document.querySelector('#password1').value;
	let password2 = document.querySelector('#password2').value;

	email == '' ? document.querySelector('#email').style.border = 'solid 3px red' : document.querySelector('#email').style.border = 'solid 1px black';
	password1 == '' ? document.querySelector('#password1').style.border = 'solid 3px red' : document.querySelector('#password1').style.border = 'solid 1px black';

	if (password1 !== password2) {
		document.querySelector('#password1').style.border = 'solid 3px red';
		document.querySelector('#password2').style.border = 'solid 3px red';
		e.preventDefault();
	} else {
		document.querySelector('#password1').style.border = 'solid 3px green';
		document.querySelector('#password2').style.border = 'solid 3px green';

	}
});


