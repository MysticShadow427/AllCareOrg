class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();


// var overlay = document.getElementById("overlay");

// // Buttons to 'switch' the page
// var openSignUpButton = document.getElementById("slide-left-button");
// var openSignInButton = document.getElementById("slide-right-button");

// // The sidebars
// var leftText = document.getElementById("sign-in");
// var rightText = document.getElementById("sign-up");

// // The forms
// var accountForm = document.getElementById("sign-in-info")
// var signinForm = document.getElementById("sign-up-info");

// // Open the Sign Up page
// openSignUp = () =>{
//   // Remove classes so that animations can restart on the next 'switch'
//   leftText.classList.remove("overlay-text-left-animation-out");
//   overlay.classList.remove("open-sign-in");
//   rightText.classList.remove("overlay-text-right-animation");
//   // Add classes for animations
//   accountForm.className += " form-left-slide-out"
//   rightText.className += " overlay-text-right-animation-out";
//   overlay.className += " open-sign-up";
//   leftText.className += " overlay-text-left-animation";
//   // hide the sign up form once it is out of view
//   setTimeout(function(){
//     accountForm.classList.remove("form-left-slide-in");
//     accountForm.style.display = "none";
//     accountForm.classList.remove("form-left-slide-out");
//   }, 700);
//   // display the sign in form once the overlay begins moving right
//   setTimeout(function(){
//     signinForm.style.display = "flex";
//     signinForm.classList += " form-right-slide-in";
//   }, 200);
// }

// // Open the Sign In page
// openSignIn = () =>{
//   // Remove classes so that animations can restart on the next 'switch'
//   leftText.classList.remove("overlay-text-left-animation");
//   overlay.classList.remove("open-sign-up");
//   rightText.classList.remove("overlay-text-right-animation-out");
//   // Add classes for animations
//   signinForm.classList += " form-right-slide-out";
//   leftText.className += " overlay-text-left-animation-out";
//   overlay.className += " open-sign-in";
//   rightText.className += " overlay-text-right-animation";
//   // hide the sign in form once it is out of view
//   setTimeout(function(){
//     signinForm.classList.remove("form-right-slide-in")
//     signinForm.style.display = "none";
//     signinForm.classList.remove("form-right-slide-out")
//   },700);
//   // display the sign up form once the overlay begins moving left
//   setTimeout(function(){
//     accountForm.style.display = "flex";
//     accountForm.classList += " form-left-slide-in";
//   },200);
// }

// // When a 'switch' button is pressed, switch page
// openSignUpButton.addEventListener("click", openSignUp, false);
// openSignInButton.addEventListener("click", openSignIn, false);

const counters = document.querySelectorAll('.counter');
const speed = 500 ;

counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      
      const inc = target / speed;
      
      if( count  < target ){
        counter.innerText = count + inc;
        setTimeout(updateCount,0.001);
      }else{
        count.innerText = target;
      }
    }
    
    updateCount();
});