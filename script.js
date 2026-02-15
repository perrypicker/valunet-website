/**
 * Valunet — Script mínimo para sitio estático (GitHub Pages)
 * Menú móvil, año en footer y preparación del formulario.
 */

(function () {
    'use strict';

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
                alert('En un sitio estático el formulario no envía por sí solo. Puedes configurar Formspree, Netlify Forms o mailto: en el action del form.');
                return;
            }
            form.submit();
        });
    }
})();
