console.log("script.js");

// $('.band-name').waypoint(function(){
// 		$('.band-name').addClass('hide');
// 	} , {
// 		offset: '-15%'
// 	});

setTimeout(function(){
		$('.band-drop-down').addClass('loaded');
	}, 1000);




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



var yearContainer = document.querySelectorAll('.year');
// console.log()
// console.log(yearContainer);
for (let i = 0; i < yearContainer.length; i++) {

  // console.log(yearContainer[i])
 yearContainer[i].addEventListener('click' , function(){

  
 if (this.classList.contains('year-active')) {

    this.classList.remove('year-active');
 }else{
  for (let i = 0; i < yearContainer.length; i++) {
    if(yearContainer[i].classList.contains('year-active')) {
      yearContainer[i].classList.remove('year-active');
      // yearContainer[i].classList.remove('background');
    }
  }
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


