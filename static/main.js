var slides = [
 { title: 'Introduction', filename: 'introduction.html' },
 { title: 'Obligatory S.H.I.E.L.D. Reference',
   filename: 'obligatory-shield-reference.html'},
 { title: 'Language, Frameworks, Meh!',
   filename: 'language-frameworks-meh.html' },
 { title: 'Connecting People and Institutions with Algorithms',
   filename: 'connecting-people-and-institutions-with-algorithms.html' },
 { title: 'Traditional Push Processes',
   filename: 'traditional-push-processes.html' },
 { title: 'Pulling Requirements',
   filename: 'pulling-requirements.html' },
 { title: 'Catalog Pull Platform',
   filename: 'catalog-pull-platform.html' },
 { title: 'Semantic Server API to Linked Data Platform',
   filename: 'semantic-server-api-to-linked-data-platform.html' },
 { title: 'Fedora 4 for Named Graphs',
   filename: 'fedora-4-for-named-graphs.html' },
 { title: 'BIBFRAME Works & Instances',
   filename: 'bibframe-works-instances.html' },
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
