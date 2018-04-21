import aframe from 'aframe';
import starsystem from 'aframe-star-system-component';
import outline from 'aframe-outline';
import extras from 'aframe-extras';

aframe.registerComponent('cursor-listener', {
    init: function() {
        console.log('init');
        //var rock = document.querySelector('#rock');
        this.el.addEventListener('mouseenter', function(evt) {
            this.setAttribute('color', 'blue');
            console.log(evt.detail, this);
        });

        this.el.addEventListener('click', function(evt) {
            var music = document.querySelector('[sound]');
            music.components.sound.playSound();
        });
    }
});