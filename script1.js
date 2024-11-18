// Función para abrir diferentes pestañas de notas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre la primera pestaña por defecto
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab button").click();
});

function guardarCambios() {
    alert("Cambios guardados");
}
