var slides = [
 { title: 'Introduction', slug: 'introduction' },
 { title: 'Obligatory S.H.I.E.L.D. Reference',
   slug: 'obligatory-shield-reference'},
 { title: 'Language, Frameworks, Meh!',
   slug: 'language-frameworks-meh' },
 { title: 'Catalog Pull Platform',
   slug: 'catalog-pull-platform' },
 { title: 'Connecting People and Institutions with Algorithms',
   slug: 'connecting-people-and-institutions-with-algorithms' },
 { title: 'Traditional Push Processes',
   slug: 'traditional-push-processes' },
 { title: 'Pulling Requirements',
   slug: 'pulling-requirements' },
 { title: 'Semantic Server API to Linked Data Platform',
   slug: 'semantic-server-api-to-linked-data-platform' },
 { title: 'BIBFRAME Works & Instances',
   slug: 'bibframe-works-instances' },
 { title: 'BIBFRAME Annotations & Authorities',
   slug: 'bibframe-annotations-authorities' },
 { title: 'Fedora 4 for Named Graphs',
   slug: 'fedora-4-for-named-graphs' },
 { title: 'Elasticsearch',
   slug: 'elasticsearch' },
 { title: 'Apache Fuskei',
   slug: 'apache-fuskei' },
 { title: 'Semantic Server REST API',
   slug: 'semantic-server-rest-api' },
 { title: 'BIBFRAME Datastore',
   slug: 'bibframe-datastore' },
 { title: 'BIBFRAME Datastore Services API',
   slug: 'bibframe-datastore-services-api' },
 { title: 'TIGER Catalog',
   slug: 'tiger-catalog' },
 { title: 'BIBCAT',
   slug: 'bibcat' },
 { title: 'Islandora eBadges' ,
   slug: 'islandora-ebadges'},
 { title: 'BIBCAT Reporting Module',
   slug: 'bibcat-reporting-module' },
 { title: 'Colorado College Library Website',
   slug: 'colorado-college-library-website' },
 { title: 'Why? Why not!',
   slug: 'why-why-not' },
 { title: 'Participating',
   slug: 'participating' },
 { title: 'Thank-you',
   slug: 'thank-you' }
];


/*
function OR2015AppController($scope) {
   $scope.currentSlide = 1;
   $scope.slideCount = slides.length;
   $scope.slideTitle = slides[$scope.currentSlide-1]['title'];
   $scope.countdown = 420;

   $scope.showAllSlides = function() {
      console.log("IN show all slides");

   }

   $scope.startSlideShow = function() {
     console.log("in startSlideShow");

   }
}
*/

(function() {
  'use strict';
  
  angular.module('or2015App', [])
   .controller('OR2015AppController', ['$scope', '$timer', function($scope, $timer) {
     $scope.currentSlide = 1;
     $scope.slideCount = slides.length;
     $scope.slideTitle = slides[$scope.currentSlide-1]['title'];
     $scope.countdown = 420;

     $scope.startSlideShow = function() {
     }

     $scope.showAllSlides = function() {
       for(var i in slides) {
          var slide = slides[i];
          $('#' + slide['slug']).removeClass('hidden');
       }
     }
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
});

 

