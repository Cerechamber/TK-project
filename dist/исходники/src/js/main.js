import '../../node_modules/nouislider/distribute/nouislider';
import Scrollbar from 'smooth-scrollbar';
import actions from './custom';

actions();

const options = {
    alwaysShowTracks: true,
  renderByPixels: true
}

Scrollbar.init(document.querySelector('.fake-options', options));

require(['nouislider'], function (noUiSlider) {
"use strict";
  const range = document.getElementById('slider');
    noUiSlider.create(range, {
        step: 1,
         start: [50],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
    });
   
   const per = document.querySelector('.slider__per');
   const input = document.getElementById('slider_value');
        range.noUiSlider.on('update', function (values, handle) {
        per.innerHTML = values[0].replace('.00', ' %');
        input.value = values[0].replace('.00', '');
});
});