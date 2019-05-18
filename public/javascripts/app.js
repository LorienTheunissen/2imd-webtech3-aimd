var btnSignup = document.querySelector("#register_button").addEventListener("click", function(){
    let username = document.querySelector("#register_username").value;
    let password = document.querySelector("#register_password").value;

    fetch('http://localhost:3000/signup', {
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
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Sign up comlete!";
            feedback.classList.remove('hidden');
        }
    })
});