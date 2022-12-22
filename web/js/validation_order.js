const nameReg = new RegExp("^[А-Я][А-Яа-яЁёЇїІіЄєҐґ']{1,23}$");
const addressReg = new RegExp("^[А-Яа-яЁёЇїІіЄєҐґ'0-9\\s,.-]{9,30}$");
const mailReg = new RegExp("^[0-9]{5}$");
const mySelectReg1 = new RegExp("^([a-zA-Z0-9_\\.-]+)@([a-zA-z0-9_\\.-]+)\\.([c-o\\.]{1,18})$");
const mySelectReg2 = new RegExp("^[a-zA-Z0-9_]{1,18}$");
const payTypeReg1 = new RegExp("^([a-zA-Z0-9_]+) ([a-zA-Z0-9_]+) ([a-zA-Z0-9_]){2,18}$");
const payTypeReg2 = new RegExp("^[a-zA-Z0-9_]{2,18}$");
const phoneNumberReg = new RegExp("^[0-9]{10}$");


function checkFirstName() {
    const first_name2 = $('#first_name2').val();
    if (nameReg.test(first_name2)) {
        $('#first_name2').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#first_name2').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkLastName() {
    const last_name2 = $('#last_name2').val();
    if (nameReg.test(last_name2)) {
        $('#last_name2').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#last_name2').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkCity1() {
    const city1 = $('#city1').val();
    if (nameReg.test(city1)) {
        $('#city1').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#city1').css('background-color', '#FF8A8A');
        return false;
    }
}


function checkAddress() {
    const name = $('#address').val();
    if (addressReg.test(name)) {
        $('#address').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#address').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkCity2() {
    const city2 = $('#city2').val();
    if (nameReg.test(city2)) {
        $('#city2').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#city2').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkMail() {
    const mail = $('#mail_index').val();
    if (mailReg.test(mail)) {
        $('#mail_index').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#mail_index').css('background-color', '#FF8A8A');
        return false;
    }
}


function checkDelivery() {
    const pay = $('#mySelect').val();
    if (mySelectReg1.test(pay) || mySelectReg2.test(pay)) {
        $('#mySelect').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#mySelect').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkPayType() {
    const pay = $('#pay_type').val();
    if (payTypeReg1.test(pay) || payTypeReg2.test(pay)) {
        $('#pay_type').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#pay_type').css('background-color', '#FF8A8A');
        return false;
    }
}

function checkPhoneNumber() {
    const phone_number = $('#phone_number').val();
    if (phoneNumberReg.test(phone_number)) {
        $('#phone_number').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#phone_number').css('background-color', '#FF8A8A');
        return false;
    }
}

function addRedColor() {
    checkLastName();
    checkFirstName();
    checkPhoneNumber();
    checkDelivery();
    checkPayType();
    $('#paybtn2').css('background-color', '#FF8A8A');
}

function addWhiteColor() {
    $('#paybtn2').css('background-color', '#04AA6D');
    $('#phone_number').css('background-color', 'white');
    $('#pay_type').css('background-color', 'white');
    $('#mySelect').css('background-color', 'white');
    $('#mail_index').css('background-color', 'white');
    $('#city2').css('background-color', 'white');
    $('#city1').css('background-color', 'white');
    $('#address').css('background-color', 'white');
    $('#last_name2').css('background-color', 'white');
    $('#first_name2').css('background-color', 'white');
}

function checkParams() {
    if (checkFirstName() && checkLastName() && checkPhoneNumber() && checkDelivery() && checkPayType() &&
        checkCity1() && checkAddress()) {
        $('#paybtn2').removeAttr('disabled');
        $('#paybtn2').css('background-color', '#8AFF8A');
        return true;
    } else if (checkFirstName() && checkLastName() && checkPhoneNumber() && checkDelivery() &&
        checkPayType && checkCity2() && checkMail()) {
        $('#paybtn2').removeAttr('disabled');
        $('#paybtn2').css('background-color', '#8AFF8A');
        return true;
    } else {
        $('#paybtn2').attr('disabled', 'disabled');
        $('#paybtn2').css('background-color', '#FF8A8A');
        addRedColor();
        return false;
    }
}


function openForm1() {
    document.getElementById('message').style.display = 'block';
    /*    document.getElementById('message').classList.add('active');*/
}


function openWindowMessage() {
    if (checkParams()) {
        let last_name = document.getElementById('last_name2').value;
        let first_name = document.getElementById('first_name2').value;
        let phone_number = document.getElementById('phone_number').value;
        let mySelect = document.getElementById('mySelect').value;
        let city1 = document.getElementById('city1').value;
        let address = document.getElementById('address').value;
        let city2 = document.getElementById('city2').value;
        let mail_index = document.getElementById('mail_index').value;
        let pay_type = document.getElementById('pay_type').value;

        fetch('lalala', {
            method: 'POST',
            body: {
                last_name: last_name,
                first_name: first_name,
                phone_number: phone_number,
                mySelect: mySelect,
                city1: city1,
                address: address,
                city2: city2,
                mail_index: mail_index,
                pay_type: pay_type,
            }
        }).then(() => openForm1())
    }
}