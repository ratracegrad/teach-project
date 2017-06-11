import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './home.routes';

export class HomeController {
  images = [
    {
      src: 'assets/images/slider1.png'
    },
    {
      src: 'assets/images/slider2.png'
    },
    {
      src: 'assets/images/slider3.png'
    }
  ];

  /*@ngInject*/
  constructor() {}

  $onInit() {}


}

export default angular.module('teachApp.home', [uiRouter])
  .config(routing)
  .component('home', {
    template: require('./home.html'),
    controller: HomeController
  })
  .directive('slider', ['$timeout', function($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        images: '='
      },
      link(scope, elem, attrs) {
        scope.currentIndex = 0; // Initially the index is at the first image

        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };

        scope.$watch('currentIndex', function() {
          scope.images.forEach(function(image) {
            image.visible = false; // make every image invisible
          });

          scope.images[scope.currentIndex].visible = true; // make the current image visible
        });

        let timer;
        const sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 2500);
          }, 2500);
        };

        sliderFunc();

        scope.$on('$destroy', function() {
          $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
        });
      },
      template: require('./slider.html')
    };
  }])
  .name;
