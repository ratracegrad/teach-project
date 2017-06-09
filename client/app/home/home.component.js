import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './home.routes';

export class HomeController {

  /*@ngInject*/
  // constructor() {}

  $onInit() {}


}

export default angular.module('teachApp.home', [uiRouter])
  .config(routing)
  .component('home', {
    template: require('./home.html'),
    controller: HomeController
  })
  .directive('particles', ['$window', function($window) {
    return {
      restrict: 'A',
      template: '<div class="particleJs" id="particleJs"></div>',
      link: function(scope, element, attrs, fn) {
        $window.particlesJS('particleJs', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#FFFFFF'
            },
            shape: {
              type: 'circle',
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };
    // return {
    //   restrict: 'A',
    //   replace: true,
    //   template: '<div class="particleJs" id="particleJs"></div>',
    //   link: function(scope, element, attrs, fn) {
    //
    //     $window.particlesJS('particleJs', {
    //       "particles": {
    //         "number": {
    //           "value": 70,
    //           "density": {
    //             "enable": true,
    //             "value_area": 800
    //           }
    //         },
    //         "color": {
    //           "value": "#e7e7e7"
    //         },
    //         "shape": {
    //           "type": "circle",
    //           "stroke": {
    //             "width": 0,
    //             "color": "#e7e7e7"
    //           },
    //           "polygon": {
    //             "nb_sides": 7
    //           },
    //           "image": {
    //             "src": "img/github.svg",
    //             "width": 100,
    //             "height": 100
    //           }
    //         },
    //         "opacity": {
    //           "value": 0.3,
    //           "random": false,
    //           "anim": {
    //             "enable": false,
    //             "speed": 1,
    //             "opacity_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "size": {
    //           "value": 3,
    //           "random": true,
    //           "anim": {
    //             "enable": false,
    //             "speed": 40,
    //             "size_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "line_linked": {
    //           "enable": true,
    //           "distance": 150,
    //           "color": "#e7e7e7",
    //           "opacity": 0.3,
    //           "width": 1
    //         },
    //         "move": {
    //           "enable": true,
    //           "speed": 6,
    //           "direction": "none",
    //           "random": false,
    //           "straight": false,
    //           "out_mode": "out",
    //           "bounce": false,
    //           "attract": {
    //             "enable": false,
    //             "rotateX": 600,
    //             "rotateY": 1200
    //           }
    //         }
    //       },
    //       "interactivity": {},
    //       "retina_detect": true
    //     });
    //
    //   }
    // };
  }])
  .name;
