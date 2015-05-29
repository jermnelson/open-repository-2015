var slides = [
 { title: 'Introduction', slug: 'introduction' },
 { title: 'Obligatory S.H.I.E.L.D. Reference',
   slug: 'obligatory-shield-reference'},
 { title: 'Language, Frameworks, Meh!',
   slug: 'language-frameworks-meh' },
 { title: 'Connecting People and Institutions with Algorithms',
   slug: 'connecting-people-and-institutions-with-algorithms' },
 { title: 'Traditional Push Processes',
   slug: 'traditional-push-processes' },
 { title: 'Pulling Requirements',
   slug: 'pulling-requirements' },
 { title: 'Catalog Pull Platform',
   slug: 'catalog-pull-platform' },
 { title: 'Semantic Server API to Linked Data Platform',
   slug: 'semantic-server-api-to-linked-data-platform' },
 { title: 'Fedora 4 for Named Graphs',
   slug: 'fedora-4-for-named-graphs' },
 { title: 'BIBFRAME Works & Instances',
   slug: 'bibframe-works-instances' },
 { title: 'BIBFRAME Annotations & Authorities',
   slug: 'bibframe-annotations-authorities' },
 { title: 'Elasticsearch',
   slug: 'elasticsearch' },
 { title: 'Apache Fuskei',
   slug: 'apache-fuskei' },
 { title: 'Semantic Server REST API',
   slug: 'semantic-server-api-to-linked-data-platform' },
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
      var slug = slides[$scope.currentSlide-1]['slug'];
      var body_key = '#' + slug + '-body';
      $('#'+slug).removeClass('hidden');
      $('#'+slug).addClass('show');
      $(body_key).addClass('in');
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
