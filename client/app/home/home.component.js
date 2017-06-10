import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './home.routes';

export class HomeController {


  /*@ngInject*/
  constructor() {
    this.images = [
      {
        src: 'assets/images/img1.jpg',
        title: 'Title 1'
      },
      {
        src: 'assets/images/img2.jpg',
        title: 'Title 2'
      },
      {
        src: 'assets/images/img3.jpg',
        title: 'Title 3'
      }
    ];
  }

  $onInit() {
    console.log(this.images);
  }


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
          scope.currentIndex < images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = images.length - 1;
        };

        scope.$watch('currentIndex', function() {
          images.forEach(function(image) {
            image.visible = false; // make every image invisible
          });

          images[scope.currentIndex].visible = true; // make the current image visible
        });

        let timer;
        const sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 5000);
          }, 5000);
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
