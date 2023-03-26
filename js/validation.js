const CheckValidation = () => {
    let valid = true;
    valid = CheckValueEmpty('username', 'error_username') & CheckValueEmpty('email', 'error_email') & CheckValueEmpty('password', 'error_password') & CheckValueEmpty('confirmpassword', 'error_confirmpassword');
}

const CheckValueEmpty = (idValue, idError) => {
    let inputText = document.getElementById(idValue);
    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = 'Trường này không được bỏ trống ⚠️!';
        document.getElementById(idError).style.display = 'block';

        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }
}

document.getElementById('btn_submit').onclick = CheckValidation;