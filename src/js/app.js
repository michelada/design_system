import "core-js/stable";
import "regenerator-runtime/runtime";

import '../styles/index.css';
import Prism from 'prismjs';

require('./html-import.min.js');

import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import VanillaScrollspy from 'vanillajs-scrollspy';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendarWidget');

    if(calendarEl !== null) {
        var calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
        initialView: 'dayGridMonth',
        dayHeaders: false,
        headerToolbar: {
            start: 'prev',
            center: 'title',
            end: 'next'
        },
        events: [
            { id: 1, title: 'test event', start: '2021-11-09' },
            { id: 1, title: 'second event', start: '2021-11-09' },
            { id: 1, title: 'week event', start: '2021-11-15 11:00', end: '2021-11-19 23:00' },
        ]
        });
        calendar.render();
    }
    
    const navbar = document.querySelector('#navbar-spy');
    const scrollspy = VanillaScrollspy(navbar);
    scrollspy.init();

    const sbSidebarToggle = document.querySelector('#sb-sidebar-toggle');

    sbSidebarToggle.addEventListener('click', function() {
        const body = document.querySelector('body');
        body.classList.toggle('collapsed');

        const svgOpen = document.querySelector('aside footer svg[data-role="open"]');
        const svgClose = document.querySelector('aside footer svg[data-role="close"]');

        svgOpen.classList.toggle('hidden');
        svgClose.classList.toggle('hidden');
    });
});