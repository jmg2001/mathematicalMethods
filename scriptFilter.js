

function handleFilterChange() {
    const selectedOption1 = options1.querySelector('input:checked')?.value;
    
    if (selectedOption1 === 'opcion3') {
        options3.closest('.column').classList.remove('disabled');
    } else {
        options3.closest('.column').classList.add('disabled');
        options3.querySelector('input:checked')?.click(); // Desmarca la opción seleccionada
        console.log(options3.closest('.column').classList)
    }
}

options1.addEventListener('change', handleFilterChange);
handleFilterChange(); // Ejecutar al cargar la página para establecer el estado inicial

document.addEventListener("DOMContentLoaded", function() {
    const options1 = document.getElementById('options1');
    const options2 = document.getElementById('options2');
    const options3 = document.getElementById('options3');
    const buscarBtn = document.getElementById('buscarBtn');

    function ejecutarFiltro() {
        // Verificar que se haya seleccionado al menos una opción en cada columna
        const selectedOption1 = options1.querySelector('input:checked');
        const selectedOption2 = options2.querySelector('input:checked');
        const selectedOption3 = options3.querySelector('input:checked');

        console.log(selectedOption1);
        console.log(selectedOption2);
        console.log(selectedOption3);

        console.log(options3.closest('.column').classList.contains('disabled'));

        if (!selectedOption1 || !selectedOption2 || (!options3.closest('.column').classList.contains('disabled') && !selectedOption3)) {
            alert('Por favor, selecciona al menos una opción en cada columna.');
            return;
        }

        // Ejecutar filtro según las opciones seleccionadas
        const filtro1 = selectedOption1.value;
        const filtro2 = selectedOption2.value;
        const filtro3 = selectedOption3 ? selectedOption3.value : null;

        console.log('Filtro 1:', filtro1);
        console.log('Filtro 2:', filtro2);
        console.log('Filtro 3:', filtro3);

        // Aquí puedes ejecutar tu lógica de filtro y mostrar los resultados
        // Por ejemplo, puedes ocultar/mostrar elementos en función de los filtros
    }

    buscarBtn.addEventListener('click', ejecutarFiltro);
});