var slides = [
 { title: 'Obligatory S.H.E.I.L.D. Reference'},
 { title: 'Slide 2' },
 { title: 'Slide 3' },
 { title: 'Slide 4' },
 { title: 'Slide 5' },
 { title: 'Slide 6' },
 { title: 'Slide 7' },
 { title: 'Slide 8' },
 { title: 'Slide 9' },
 { title: 'Slide 10' },
 { title: 'Slide 11' },
 { title: 'Slide 12' },
 { title: 'Slide 13' },
 { title: 'Slide 14' },
 { title: 'Slide 15' },
 { title: 'Slide 16' },
 { title: 'Slide 17' },
 { title: 'Slide 18' },
 { title: 'Slide 19' },
 { title: 'Slide 20' },
 { title: 'Slide 21' },
 { title: 'Slide 22' },
 { title: 'Slide 23' },
 { title: 'Slide 24' }
];


(function() {
  'use strict';
  
  angular.module('or2015App', [])
   .controller('OR2015AppController', function() {
     var or2015 = this;

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
   })


}());
