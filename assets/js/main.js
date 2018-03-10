console.log("script.js");

// $('.band-name').waypoint(function(){
// 		$('.band-name').addClass('hide');
// 	} , {
// 		offset: '-15%'
// 	});

setTimeout(function(){
		$('.band-drop-down').addClass('loaded');
	}, 1000);

if (window.innerWidth >= 768){
  new Waypoint({
  element: document.querySelector('.text-block-1'),
  offset: "80%",
  handler: function(direction) {
    // console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      TweenMax.to(".band-drop-down", 2, {
      opacity: .6
    })
    }
  }
});

new Waypoint({
  element: document.querySelector('.text-block-2'),
  offset: "50%",
  handler: function(direction) {
    // console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      TweenMax.to(".band-drop-down", 2, {
      opacity: .3
    })
    }
  }
});

new Waypoint({
  element: document.querySelector('.text-block-1'),
  offset: "18%",
  handler: function(direction) {
    // console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb1-left-animation", 3, {
      left: "25%",
      top: "10%"
    });
      TweenMax.to(".tb1-right-animation", 3, {
      right: "10%",
      top: "60%"
    });
    }
  }
});

new Waypoint({
  element: document.querySelector('.text-block-2'),
  offset: "10%",
  handler: function(direction) {
    // console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb2-left-animation", 3, {
      left: "15%",
      top: "10%"
    });
      TweenMax.to(".tb2-right-animation", 3, {
      right: "1%",
      top: "100%"
    });
    }
  }
});



  new Waypoint({
  element: document.querySelector('.text-block-4'),
  offset: "100%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb4-left-animation", 3, {
      left: "4%",
      top: "10%"
    });
      TweenMax.to(".tb4-right-animation", 3, {
      right: "43%",
      top: "-20%"
    });
    }
  }
});

}






var yearContainer = document.querySelectorAll('.year');
var yearTextContainer = document.querySelectorAll('.year-text');

for (let i = 0; i < yearContainer.length; i++) {

  

 yearContainer[i].addEventListener('click' , function(){

  // const yearText = document.querySelectorAll('.year-text');


  



  var yearText = document.querySelector("."+this.classList[0] +"> .year-text" );
 if (this.classList.contains('year-active')) {
    
    yearText.classList.remove('year-text-active');

    this.classList.remove('year-active');
 } else{
  for (let i = 0; i < yearContainer.length; i++) {
    if(yearContainer[i].classList.contains('year-active')) {
      yearContainer[i].classList.remove('year-active');
      // yearContainer[i].classList.remove('background');
    }
  }
  for (let i = 0; i < yearTextContainer.length; i++) {
    console.log(yearTextContainer[i].classList.contains('year-text-active'));
    if(yearTextContainer[i].classList.contains('year-text-active')) {
      yearTextContainer[i].classList.remove('year-text-active');
      // yearContainer[i].classList.remove('background');
    }
  }
  yearText.classList.add('year-text-active');
  this.classList.add('year-active');

 }
  });

}

var scrollAnimation = new TimelineMax({repeat: 'yoyo' , delay: 2});

scrollAnimation.add( TweenMax.to('.scroll-bar-1-top' , 0, {

  top: '10%',
  opacity: 0
  
}));




scrollAnimation.add( TweenMax.to('.scroll-bar-2' , .2 , {
  
  top: '40%',
  opacity: 0
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-3' , .4 , {
  
  top: '70%',
  opacity: 0
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-4' , .4 , {
  
  top: '100%',
  opacity: 0
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-5-bottom' , .4 , {
  
  top: '130%',
  opacity: 0,

  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-1-top' , .4, {
  //delay: -.2,
  top: '10%',
  opacity: 1
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-2' , .4 , {
  
  top: '40%',
  opacity: 1
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-3' , .4 , {
  
  top: '70%',
  opacity: 1
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-4' , .4 , {
  
  top: '100%',
  opacity: 1
  
}));

scrollAnimation.add( TweenMax.to('.scroll-bar-5-bottom' , .4 , {
  
  top: '130%',
  opacity: 1,

  
}));



const merchSlider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left-arrow');

leftArrow.addEventListener('click', function() {

  console.log('wtf');

  TweenMax.to(merchSlider, 2, {
    left: '-100%'
  });

});


