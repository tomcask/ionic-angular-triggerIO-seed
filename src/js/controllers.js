angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example
  forge.logging.info("Add JavaScript to js/main.js!");
})

// A simple controller that fetches a list of data
.controller('PetsTabCtrl', function($scope, Pets) {
  $scope.pets = Pets.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

// A simple controller that shows a tapped item's data
.controller('PetCtrl', function($scope, $routeParams, Pets) {
  $scope.pet = Pets.get($routeParams.petId);
});
