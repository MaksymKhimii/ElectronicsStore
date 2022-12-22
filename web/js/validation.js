const nameReg = new RegExp("^[A-Z]{1}[a-z]{1,23}$");
const emailReg = new RegExp("^([a-zA-Z0-9_\\.-]+)@([a-zA-z0-9_\\.-]+)\\.([c-o\\.]{3})$");
const payTypeReg1 = new RegExp("^([a-zA-Z0-9_]+) ([a-zA-Z0-9_]+) ([a-zA-Z0-9_]){1,18}$");
const payTypeReg2 = new RegExp("^[a-zA-Z0-9_]{1,18}$");

function openForm() {
    document.getElementById('windowForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('windowForm').style.display = 'none';
}

function checkParams() {
    if (checkFirstName() && checkLastName() && checkEmail() && checkPayType()) {
        $('#pay').removeAttr('disabled');
    } else {
        $('#pay').attr('disabled', 'disabled');
    }
}

function checkFirstName() {
    const name = $('#fname').val();
    if (nameReg.test(name)) {
        $('#fname').css('background-color', '#04AA6D');
        return true;
    } else {
        $('#fname').css('background-color', 'red');
        return false;
    }
}

function checkLastName() {
    const name = $('#lname').val();
    if (nameReg.test(name)) {
        $('#lname').css('background-color', '#04AA6D');
        return true;
    } else {
        $('#lname').css('background-color', 'red');
        return false;
    }
}

function checkEmail() {
    const email = $('#email').val();
    if (emailReg.test(email)) {
        $('#email').css('background-color', '#04AA6D');
        return true;
    } else {
        $('#email').css('background-color', 'red');
        return false;
    }
}

function checkPayType() {
    const pay = $('#payType').val();
    if (payTypeReg1.test(pay) || payTypeReg2.test(pay)) {
        $('#payType').css('background-color', '#04AA6D');
        return true;
    } else {
        $('#payType').css('background-color', 'red');
        return false;
    }
}


function changeColorMain() {
    let id = document.getElementsByTagName("a")[0].id;
    console.log('id' + id)
    $('#index').css('background-color', '#34495e');
}

function openForm1() {
    document.getElementById('message').style.display = 'block';
}

function openForm2() {
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    document.getElementById('windowForm').style.display = 'none';
    fetch('lalala', {
        method: 'POST',
        body: {
            lname: lname,
            fname: fname,
            email: email
        }
    }).then(()=>openForm1())
}

function resetFields(){

}

function closeWindow() {
    document.getElementById('windowForm').style.display = 'none';
}