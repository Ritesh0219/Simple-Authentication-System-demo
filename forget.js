
let randomNo;
function genOTP(){
    $("#otp").val("");
    randomNo = [];
    email = $("#email").val();
    
    for(i = 0; i< 4; i++){
        var random = (Math.random()*9)+1
        random = Math.floor(random)
        randomNo.push(random);
    }
    randomNo = randomNo.join("")
    alert("Your OTP is : " + randomNo);
    }


function login(){
    var givenotp = $("#otp").val();
    if(givenotp === randomNo){
        alert("Login successfull!")
    }
    else{
        alert("Invalid OTP!")
    }
}
$("#OTP").click(genOTP);
$("#login").click(login);