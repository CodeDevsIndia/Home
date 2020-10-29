let user = document.getElementById("user");
let pass = document.getElementById("pass");
let login = document.getElementById("login");
let subbtn = document.getElementById("submit");
let pass_not_match = document.getElementById("pass_not");
login.addEventListener("mouseover", function () {
    if (user.value == "Kharaj") {
        if (pass.value == "kharaj62688") {
            subbtn.innerHTML = '<form action="Webs.html">\n<input type="submit" id="login" value="Login">\n</form>';
            pass_not_match.style.display = "none";
        }
    }
});
login.addEventListener("click", function () {
    if (user.value == "Kharaj") {
        if (pass.value == "kharaj62688") {
            subbtn.innerHTML = '<form action="Webs.html">\n<input type="submit" id="login" value="Login">\n</form>';
            pass_not_match.style.display = "none";
        }
        else {
            pass_not_match.style.display = "block";
            pass_not_match.style.color = "white";
        }
    }
    else {
        pass_not_match.style.display = "block";
        pass_not_match.style.color = "white";
    }
});