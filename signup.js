function register() {
    let email = $("#email").val();
    let password = $("#password").val();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    $("#email").val('');
    $("#password").val('');
}

function getitems() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let message = users.map(user => `Email: ${user.email}, Password: ${user.password}`).join('\n');
    alert("Stored email and password pairs:\n" + message);
}

function login(){
    window.location.href = "login.html";
}

function clearstorage(){
    localStorage.clear();
    $("#email").val('');
    $("#password").val('');
}

$("#register").click(register);
$("#getitem").click(getitems);
$("#login").click(login);
$("#clearstorage").click(clearstorage);

