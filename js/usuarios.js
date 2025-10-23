import { usuarios, voluntariados } from './datos.js'

// Comprobar usuarios
console.log(usuarios)

function listaUsuarios(){

    const consultaUser_form = document.getElementById("consultaUser_form");
    consultaUser_form.innerHTML = '';

    usuarios.forEach(u => {
        let contorno = document.createElement("div");
        contorno.classList.add('user-card');
        let divUsuario = document.createElement("div");

        let nombre = document.createElement("p");
        let email = document.createElement("p");
        let password = document.createElement("p");
        let acciones = document.createElement("button");

        nombre.innerHTML = `Nombre: ${u.nombre}`;
        email.innerHTML = `Email: ${u.email}`;
        password.innerHTML = `Contraseña: ${u.password}`;
        acciones.innerHTML = `Borrar`;
        acciones.setAttribute('id', u.email);
        acciones.setAttribute('class', 'delButton')

        divUsuario.appendChild(nombre);
        divUsuario.appendChild(email);
        divUsuario.appendChild(password);
        divUsuario.appendChild(acciones);

        [nombre, email, password, acciones].forEach(child => {
            child.classList.add("textoNormal");
        });
        contorno.appendChild(divUsuario);
        consultaUser_form.appendChild(contorno);
    });
}

function getFieldValue(id, promptText) {
    const el = document.getElementById(id);
    if (el) return el.value.trim();
    const v = window.prompt(promptText);
    return v ? v.trim() : '';
}

function addUsuario() {
    const nombre = getFieldValue('nombre');
    const email = getFieldValue('email');
    const password = getFieldValue('password');

    const usuario = { nombre, email, password };

    usuarios.push(usuario);

    ['nombre','email','password'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    listaUsuarios();
}

function removeUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email === email);
    if (index > -1) {
        usuarios.splice(index, 1);
    }
    listaUsuarios();
}

document.addEventListener('DOMContentLoaded', () => {
    listaUsuarios();

    const addBtn = document.getElementById('addUser_button');
    if (addBtn) addBtn.addEventListener('click', addUsuario);

    const delBtns = document.getElementsByClassName('delButton');
    for (const btn of delBtns) {
        btn.addEventListener('click', (event) => {
            removeUsuario(event.currentTarget.id);
        });
    }
});