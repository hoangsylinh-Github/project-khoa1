const btn_signin = document.querySelector("#btn_signin");
btn_signin.addEventListener("click", (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(user_signin);
    let data_user = JSON.parse(localStorage.getItem(username))
    if(username === ' ' && password === ' '){
        alert('Đăng Nhập Thất Bại!🥲');
    } else if (data_user.username === username && data_user.password === password) {
        alert('Đăng Nhập Thành Công❤️')
        window.location.href = "index.html";
    } else {
        alert('Đăng Nhập Thất Bại!🥲');
    }
})

const CheckValidation = () => {
    let valid = true;
    valid = CheckValueEmpty('username', 'error_username') & CheckValueEmpty('password', 'error_password');
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

document.getElementById('username').onblur = CheckValidation;
document.getElementById('password').onblur = CheckValidation;