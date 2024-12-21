
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Email
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const mustContain = /@/;
    if (!mustContain.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password strength validation
    const password = document.getElementById("password").value;
    const passwordStrength = document.getElementById("passwordStrength");

    //this is the password regex to check if a password fulfills certain criteria. This was copied from 
    //https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/

    const passwordCriteria = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordCriteria.test(password)) {
        passwordStrength.textContent =
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.";
        passwordStrength.style.color = "red";
        isValid = false;
    } else {
        passwordStrength.textContent = "Strong password.";
        passwordStrength.style.color = "green";
    }

    // Age validation
    const age = document.getElementById("age").value;
    const ageError = document.getElementById("ageError");
    if (age < 18) {
        ageError.textContent = "You need to be 18 or more to have acces to the page.";
        isValid = false;
    } else {
        ageError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        e.preventDefault();
    }

    if(isValid){
            toastr.success("Succesfull login");
            sessionStorage.setItem("Success", "Login succesfull")
            window.location.href = "index.html";
        } else{
            toastr.error("Error occured while trying to log in.")
        }
    
});

