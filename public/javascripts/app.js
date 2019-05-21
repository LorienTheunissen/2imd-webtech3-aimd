document.querySelector("#register_button").addEventListener("click", (e) => {
    let username = document.querySelector("#register_username").value;
    let password = document.querySelector("#register_password").value;

    fetch('/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success"){
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/";
        } else {
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Sign up failed!";
            feedback.classList.remove('hidden');
        }
    })
});