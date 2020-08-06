var form = document.getElementById('form');
var email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(email.value);
    if (!validateEmail(email.value)) {
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        form.classList.remove('error');
        form.classList.add('success');
    }
});

function validateEmail(email) {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
        return true;
    }
    else {
        return false;
    }
} 