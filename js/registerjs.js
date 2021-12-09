var name, email, password, gender, payment, cekbox, validasiName


function submit() {
    name = document.getElementById('inputnama').value
    email = document.getElementById('inputemail').value
    password = document.getElementById('inputpassword').value
    gender = document.getElementsByName('gender');
    cekbox = document.getElementsByName('cekbox');

    // validasiName = /^[a-zA-Z\s]+$/;

    if(name == "" && email == "" && password == "" && !(gender[0].checked || gender[1].checked) && document.getElementById('inputpayment').value == "-1" && !(cekbox[0].checked)){
        alert('Please fill the registration form!')
    }
    else if(name === ""){
        alert('Name Must be filled!')
    }
    else if(name.length < 3){
        alert('Name Length must be at least 3 characters!')
    }
    else if(email === ""){
        alert("Email Must be filled!")
    }
    else if(!email.includes("@")){
        alert("Email Must Contains @")
    }
    else if(password === ""){
        alert("Password Must be filled")
    }
    else if(password.length < 8){
        alert("Password Must be at least 8 characters!")
    }
    else if(!(gender[0].checked || gender[1].checked)){
        alert("Gender Must be filled")
    }
    else if(document.getElementById('inputpayment').value == "-1"){
        alert("Payment Method Must be chosen")
    }
    else if(!(cekbox[0].checked)){
        alert("CheckBox Must be filled")
    }
    else{
        alert("Register Success!")
    }
}