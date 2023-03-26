const btn_submit = document.querySelector(".form_submit");
btn_submit.addEventListener("click", (event) => {
    event.preventDefault();
    CheckValidation();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    // if (username === '' && email === '' && password === '' && confirmpassword === '') {


    const User_signIn = {
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    }
    // UserSignIn.push(User_signIn);
    // console.log(UserSignIn)
    let signIn = JSON.stringify(User_signIn);
    localStorage.setItem(username, signIn);

    //Reset form sau khi submit
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("confirmpassword").value = '';
    if (username !== '' && email !== '' && password !== '' && confirmpassword !== '') {
        // Alert thong bao thanh cong
        alert(`Chào ${username}, Bạn Đã Đăng Kí Thành Công😍!`)
        window.location.href = "signin.html";
    } else {
        alert('Moi ban nhap vao form')
    }
})

const CheckValidation = () => {
    let valid = true;
    valid = CheckValueEmpty('username', 'error_username') & CheckValueEmpty('email', 'error_email') & CheckValueEmpty('password', 'error_password') & CheckValueEmpty('confirmpassword', 'error_confirmpassword');
    valid = CheckEmailValue('#email', '#error_email_check');
    valid = CheckPasswordLength('#password', '#error_password_min_max_length');
    if (!valid) {
        return false;
    }
    return true;
}

const CheckValueEmpty = (idValue, idError) => {
    let inputText = document.getElementById(idValue);
    if (inputText.value === '') {
        document.getElementById(idError).innerHTML = 'Trường này không được bỏ trống ⚠️!';
        document.getElementById(idError).style.display = "block";
        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = "none";
        return true;
    }
}

const CheckEmailValue = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' ' + ' không hợp lệ ⚠️!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

const CheckPasswordLength = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    let minLength = String(8);
    let maxLength = String(20);
    if (inputText.value.length >= minLength && inputText.value.length <= maxLength) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = 'Mật khẩu phải từ ' + ' ' + minLength + ' ' + ' đến ' + maxLength + ' ký tự!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

document.getElementById('username').onblur = CheckValidation;
document.getElementById('email').onblur = CheckValidation;
document.getElementById('password').onblur = CheckValidation;
document.getElementById('confirmpassword').onblur = CheckValidation;