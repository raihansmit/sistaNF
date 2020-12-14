function masuk(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_masuk = email.value;
    const password_masuk = password.value;

    if (email_masuk == "admin@sista.ac.id" && password_masuk == "admin123"){
        alert("Login Berhasil");
        console.log("Login Berhasil");
        window.location.href = "index.html"
    }

    else {
        alert("Login Gagal");
        console.log("Login Gagal");
    }
}

