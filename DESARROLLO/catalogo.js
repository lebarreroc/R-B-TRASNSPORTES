function mostrarDetalles(numeroProducto) {
    var detalleProducto = document.getElementById('detallesProducto' + numeroProducto);

    if (detalleProducto.style.display === 'block' || getComputedStyle(detalleProducto).display === 'block') {
        detalleProducto.style.display = 'none';
    } else {
        var detalles = document.querySelectorAll('.detalles');
        detalles.forEach(function(detalle) {
            detalle.style.display = 'none';
        });
        detalleProducto.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.matches('.mostrarDetalles')) {
        var numeroProducto = target.dataset.numeroProducto;
        mostrarDetalles(numeroProducto);
    }
});

document.addEventListener('touchstart', function(event) {
    var target = event.target;
    if (target.matches('.mostrarDetalles')) {
        var numeroProducto = target.dataset.numeroProducto;
        mostrarDetalles(numeroProducto);
    }
});
