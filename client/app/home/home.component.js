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
      replace: true,
      template: `<div class="particleJs" id="particleJs">
        <div class="container-fluid instructorContainer">
          <div class="container whiteText">
            <h1 class="learnTitle text-center">Meet Your Instructor</h1>
            <div class="row">
              <div class="col-xs-4">
                <div class="wrapper">
                    <div class="instructorWrapper">
                        <img class="portrait" src="/assets/images/Jennifer-Bland-headshot.jpg" alt="Jennifer Bland" />
                    </div>
                </div>
              </div>
              <div class="col-xs-8">
                <h1 class="instructorName">Jennifer Bland</h1>
                <p class="instructorByline">I am an Entrepreneur. Mountain Climber. Neil Diamond fanatic. Full stack Software Engineer with over 10 years of development experience. MBA grad. World traveler. </p>
                <p class="instructorByline">I am a Senior Software Developer, specializing in MEAN stack development. I have more than ten years of development experience working for companies like CNN, Coca-Cola and Apple Computer. I am the author of the book “Developing e-Business Applications Using Lotus Domino on the AS/400″, published by IBM.</p>
            </div>
    
            </div>
          </div>
        </div>
    </div>`,
      link(scope, element, attrs, fn) {
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
  }])
  .name;
