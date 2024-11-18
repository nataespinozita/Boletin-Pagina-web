// Función para manejar el inicio de sesión
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificación básica con valores fijos para el ejemplo
    if (username === "usuario" && password === "contraseña") {
        alert('Inicio de sesión exitoso.');
        // Redirige a la página principal después de un inicio de sesión exitoso
        window.location.href = 'pagina-principal.html'; // Asegúrate de que esta URL sea correcta
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
}

// Función para redirigir a la página de registro
function goToRegister() {
    window.location.href = 'registro.html'; // Asegúrate de que esta URL sea correcta
}

// Obtener el modal de registro
var modal = document.getElementById('id01');

// Cerrar el modal si el usuario hace clic fuera del mismo
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Cerrar el modal si el usuario presiona "Escape"
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
};

// Función para manejar el envío del formulario de registro
function handleRegister(event) {
    event.preventDefault(); // Evitar el envío del formulario para manejarlo con JavaScript

    // Obtener valores de los campos
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="psw"]').value;
    const passwordRepeat = document.querySelector('input[name="psw-repeat"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const dni = document.querySelector('input[name="dni"]').value;

    // Validación simple de las contraseñas
    if (password !== passwordRepeat) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Aquí podrías agregar más validaciones, como verificar el formato del email, el DNI, etc.

    // Simulación de registro exitoso
    alert('Registro exitoso.');
    document.getElementById('id01').style.display = 'none'; // Cerrar el modal después de registrar

    // Aquí podrías enviar los datos a un servidor usando `fetch` o `axios` si estuviera implementado
}
