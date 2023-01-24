const button = document.getElementById("button");
const slider = document.getElementById("slider");
const passwordContainer = document.getElementById("container-password");
const passwordText = passwordContainer.querySelector("span:nth-of-type(2)");

button.addEventListener("click", function() {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let passwordLength = slider.value;

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwordText.innerHTML = password;
});

passwordText.addEventListener("click", function() {
    var range = document.createRange();
    range.selectNode(passwordText);
    window.getSelection().addRange(range);
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
    alert("senha copiada com sucesso!");
});
