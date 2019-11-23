var userName = document.getElementById("username")
var pass = document.getElementById("pass")
var confPass = document.getElementById("conf-pass")
var email = document.getElementById("email")
var confEmail = document.getElementById("conf-email")


function check() {
	if(userName.value === '') {
		alert(`Silahkan isi userName`)
	} 


	else if (pass.value === '') {
		alert(`Password harus diisi!`)
	} else if (pass.value.length < 8) {
		alert(`Password tidak boleh kurang dari 8 karakter`)
	} 

	else if (confPass.value === '') {
		alert(`Silahkan konfirmasi password`)
	} else if (confPass.value !== pass.value) {
		alert(`Password tidak sama`)
	}

	else if (email.value === '') {
		alert(`Email harus diisi!`)
	}

	else if (confEmail.value === '') {
		alert(`Silahkan konfirmasi email`)
	} else if (confEmail.value !== email.value) {
		alert(`Email tidak sama`)
	}

	else {
    userName.value = ''
    email.value = ''
    confPass.value = ''
    email.value = ''
    confEmail.value = ''
    alert('Registrasi success!')
  }

}
