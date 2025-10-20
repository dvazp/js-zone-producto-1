const formLogin = document.getElementById("login_form")
const user = document.getElementById("user")
const password = document.getElementById("password")

formLogin.addEventListener("submit", LoginUser)

function LoginUser(event){
    event.preventDefault()
    const inputUser = user.value.trim();
    const inputPassword = password.value;

    if(inputUser ==="" || inputPassword ===""){
        alert("Introduce todos los campos")
        return
    }

    const foundUser = usuarios.find(u => u.user === inputUser)

    if(!foundUser){
        alert("El usuario no existe");
    }else if( foundUser.password !== inputPassword){
        alert("La contraseña no coincide")
    } else{
        alert("Inicio de sesión correcto")
        window.location.href = "../interfaces/dashboard.html"
    }
    
} 