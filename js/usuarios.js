// Tenemos los voluntarios
console.log(usuarios)

function listaUsuarios(){

    const consultaUser_form = document.getElementById("consultaUser_form");

    usuarios.forEach(u => {
        let divUsuario = document.createElement("div");
        divUsuario.classList.add("card", "col-12", "mb-3", "col-lg-3", "rounded" ,"p-5", "bg-success", "d-flex","align-items-start");

        let nombre = document.createElement("p");
        let email = document.createElement("p");
        let password = document.createElement("p");
        let tipo = document.createElement("p");

        nombre.innerHTML = `Nombre: ${u.nombre}`;
        email.innerHTML = `Email: ${u.email}`;
        password.innerHTML = `Contraseña: ${u.password}`;
        tipo.innerHTML = `Tipo: ${u.tipo}`;

        divUsuario.appendChild(nombre);
        divUsuario.appendChild(email);
        divUsuario.appendChild(password);
        divUsuario.appendChild(tipo);

        divUsuario.foreach(child => {
            child.classList.add("textoNormal");
        });

    });
}

listaUsuarios();