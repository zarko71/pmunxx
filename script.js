document.addEventListener("DOMContentLoaded", function() {
    function formatDate(date) {
        var options = { weekday: 'long', day: 'numeric', month: 'long' };
        return date.toLocaleDateString('es-ES', options);
    }

    var currentDate = new Date();
    var formattedDate = formatDate(currentDate);

    document.getElementById('current-date').textContent = formattedDate;

    var rows = document.getElementById("mytable").getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) { // Empezamos en 1 para omitir el encabezado
        var cells = rows[i].getElementsByTagName("td");
        var points = parseInt(cells[2].innerText);
        var color;
        if (points === 3) {
            color = "#92d050";
        } else if (points === 1) {
            color = "#548dd4";
        } else if (points === 0) {
            color = "#d99594";
        }
        if (color) {
            for (var j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = color;
            }
        }
        cells[2].classList.add('last-bold'); // Agrega la clase a la última columna
    }
});
