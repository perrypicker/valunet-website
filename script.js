/**
 * Valunet — Script mínimo para sitio estático (GitHub Pages)
 * Menú móvil, año en footer y preparación del formulario.
 */

(function () {
    'use strict';

    // Años de experiencia en Nosotros
    const fechaInicio = new Date('2021-07-04T00:00:00');
    const fechaActual = new Date();

    let diferenciaAnios = fechaActual.getFullYear() - fechaInicio.getFullYear();

    // Verificar si ya pasó el 4 de julio en el año actual
    // Si no ha pasado, restar un año a la diferencia
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    if (mesActual < 6 || (mesActual === 6 && diaActual < 4)) {
        diferenciaAnios--;
    }
    // Inyectar el resultado en el span
    document.getElementById('stat-years').textContent = `+${diferenciaAnios}`;

    // Año actual en el footer
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Menú móvil: toggle al hacer clic en el botón
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar menú al hacer clic en un enlace (navegación interna)
        nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Formulario de contacto: en un sitio estático no hay backend.
    // Opciones: usar un servicio como Formspree, Netlify Forms, o redirigir a mailto.
    var form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Para producción: configura action con Formspree u otro servicio.
            // Ejemplo Formspree: action="https://formspree.io/f/tu-id"
            // Si mantienes action="#", mostramos un mensaje y no enviamos.
            var action = form.getAttribute('action');
            if (!action || action === '#') {
                alert('El formulario no está disponible por el momento. Por favor, contáctanos a través de nuestro número de teléfono o por correo electrónico.');
                return;
            }
            form.submit();
        });
    }
})();
