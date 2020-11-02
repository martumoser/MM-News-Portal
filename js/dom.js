const fields = {
    namefull:false,
    email:false,
    password:false,
    repPass:false,
    age: false,
    add:false,
    city:false,
    zip: false,
    dni:false,
}
/*FULL NAME*/
var namefull= document.getElementById("name");
namefull.addEventListener("blur", validateName);
function validateFieldsName(input, field) {
    var re =/^[a-zA-Z]*\s+[a-zA-Z]*$/;
    if (!re.exec(input.value) || input.value.length<6){
        document.getElementById("p-name").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-name").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateName(e) {
    e.preventDefault();
    validateFieldsName(namefull, "namefull");
}
/* EMAIL */
var email = document.getElementById("email");
email.addEventListener("blur", validateEmail);
function validateFieldsEmail(input,field){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!re.exec(input.value)){
        document.getElementById("p-email").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-email").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateEmail(e) {
    e.preventDefault();
    validateFieldsEmail(email, "email");
}
/*PASSWORD*/
var password = document.getElementById("password");
password.addEventListener("blur", validatePassword);
function validateFieldsPass(input,field){
    var re = /^(?=\w*\d)(?=\w*[a-zA-Z\s])\S{8,}$/;
    if (!re.exec(input.value)){
        document.getElementById("p-pass").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-pass").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validatePassword(e) {
    e.preventDefault();
    validateFieldsPass(password, "password");
}
/* REPEAT PASSWORD */
var repPass= document.getElementById("repPass");
repPass.addEventListener("blur", validateRepPass);
function validateFieldsRepPass(input,field){
    var passwordValue = document.getElementById("password").value;
    if (repPass.value != passwordValue){
        document.getElementById("p-rep").style.display="block"
        repPass.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-rep").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateRepPass(e) {
    e.preventDefault();
    validateFieldsRepPass(repPass, "repPass");
}
/* AGE */
var age= document.getElementById("age");
age.addEventListener("blur", validateAge);
function validateFieldsAge(input,field){
    var x=Number(document.getElementById("age").value);
    validateInteger(x)
    if (x<18){
            document.getElementById("p-age").style.display="block"
            input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-age").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateAge(e) {
    e.preventDefault();
    validateFieldsAge(e.target, "age");
}
function validateInteger(x) {
    if (Number.isInteger(x)){
        return true;
    } else{
        document.getElementById("p-age-integer").style.display="block"
            age.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-age-integer").style.display="none"
        },true);
    }
}
/*Phone Number*/
var tel = document.getElementById("tel");
tel.addEventListener("blur", validateTel);
function validateFieldsTel(input,field){
    var re = /^(()-)?\d{7,}$/;
    if (!re.exec(input.value)){
        document.getElementById("p-tel").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-tel").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateTel(e) {
    e.preventDefault();
    validateFieldsTel(e.target, "tel");
}
/*Address*/
var address = document.getElementById("address");
address.addEventListener("blur", validateAddress);
function validateFieldsAdd(input,field){
    var re =/^[a-z]+\s+([0-9]+)+$/;
    if (!re.exec(input.value) || input.value.length<5){
        document.getElementById("p-add").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-add").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateAddress(e) {
    e.preventDefault();
    validateFieldsAdd(e.target, "add");
}
/* CITY */
var city = document.getElementById("city");
city.addEventListener("blur", validateCity);
function validateFieldsCity(input,field){
    var re =/^[a-zA-Z\s]{3,}$/;
    if (!re.exec(input.value)){
        document.getElementById("p-city").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-city").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateCity(e) {
    e.preventDefault();
    validateFieldsCity(e.target, "city");
}
/* ZIP */
var zip= document.getElementById("zip");
zip.addEventListener("blur", validateZip);
function validateFieldsZip(input,field){
    var re =/^\d{3,}$/;
    if (!re.exec(input.value)){
        document.getElementById("p-zip").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-zip").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateZip(e) {
    e.preventDefault();
    validateFieldsZip(zip, "zip");
}
/* DNI */
var dni= document.getElementById("dni");
dni.addEventListener("blur", validateDni);
function validateFieldsDni(input,field){
    var re =/^[0-9]{7,8}$/;
    if (!re.exec(input.value)){
        document.getElementById("p-dni").style.display="block"
        input.addEventListener("focus", function(event){
            event.target.value="";
            document.getElementById("p-dni").style.display="none"
        },true);
    } else{
        fields[field]=true;
    }
    return fields;
}
function validateDni(e) {
    e.preventDefault();
    validateFieldsDni(dni, "dni");
}
/* Button */
var subscribe = document.getElementById("main-form");
subscribe.addEventListener("submit", validateForm);
function validateForm(e){
    e.preventDefault();
    if (fields.namefull==true && fields.email==true && fields.password==true && fields.repPass==true && fields.age==true && fields.tel==true && fields.add==true && fields.city==true && fields.zip==true && fields.dni==true){
        alert ("Subscription OK. The completed fields are: " + namefull.value + ", " + email.value + ", " + password.value  + ", " + age.value  + ", " + tel.value  + ", " + address.value  + ", " + city.value  + ", " + zip.value  + ", " + dni.value );
        subscribe.reset();
    } else{
        alert("Please complete all the fields");
    }
}