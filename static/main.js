var slides = [
 { title: 'Obligatory S.H.E.I.L.D. Reference'},
 { title: 'Language, Frameworks, Meh!' },
 { title: 'Connecting People and Institutions with Algorithms' },
 { title: 'Traditional Push Processes' },
 { title: 'Pulling Requirements' },
 { title: 'Catalog Pull Platform' },
 { title: 'Linked Data Platform' },
 { title: 'Semantic Server' },
 { title: 'Fedora 4 for Named Graphs' },
 { title: 'BIBFRAME Works & Instances' },
 { title: 'BIBFRAME Annotations & Authorities' },
 { title: 'Elasticsearch' },
 { title: 'Apache Fuskei' },
 { title: 'Semantic Server REST API' },
 { title: 'BIBFRAME Datastore' },
 { title: 'BIBFRAME Datastore Services API' },
 { title: 'TIGER Catalog' },
 { title: 'BIBCAT' },
 { title: 'Islandora eBadges' },
 { title: 'BIBCAT Reporting Module' },
 { title: 'Colorado College Website' },
 { title: 'Why? Why not!' },
 { title: 'Participating' },
 { title: 'Thank-you' }
];


(function() {
  'use strict';
  
  angular.module('or2015App', [])
   .controller('OR2015AppController', ['$scope', function($scope) {
     $scope.currentSlide = 1;
     $scope.slideCount = slides.length;
     $scope.slideTitle = slides[$scope.currentSlide-1]['title'];
     $scope.countdown = 420;

     $scope.advanceSlide = function() {
      if($scope.currentSlide >= $scope.slideCount) {
          return;
      }
      $scope.currentSlide += 1;
      $scope.slideTitle = slides[$scope.currentSlide-1]['title'];
      $scope.countdown -= 18;
     };

     $scope.isActive = function(slide_number) {
       if(slide_number === $scope.currentSlide) {
         return true;
       }
       return false;
     };
/*
     for(var i; i<=slides.length; i++) {     
        var slide = slides[i];
        var countdown = 420-(i*17.5);
        console.log("In loop=" + i + " " + slide.title + "\n" + countdown);

        setTimeout(function() { 
                     or2015.slideTitle = slide['title'];
                     or2015.slideCount = i;
                     or2015.countdown = 420;
                   }, 17000*i);
     };
*/
   }])


}());
