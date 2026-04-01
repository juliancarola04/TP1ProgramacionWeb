document.getElementById('botonSubmit').addEventListener('click', () => {
    document.querySelectorAll('.form-control').forEach(element => {
        element.value = '';
    })
})