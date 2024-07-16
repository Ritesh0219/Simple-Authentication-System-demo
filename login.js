function login() {
    let email = $("#email").val();
    let password = $("#password").val();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}

function getitems() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let message = users.map(user => `Email: ${user.email}, Password: ${user.password}`).join('\n');
    alert("Stored email and password pairs:\n" + message);
}

 
$("#login").click(login);
$("#getitem").click(getitems);
