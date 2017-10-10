// DOM Ready
$(window).on("load", function() {
	divHeight = $(".sliderImg").height();
	$(".imageSliderDiv").height($(".sliderImg").height());
	$(".imageSliderButton").height($(".sliderImg").height());
});

function imageSlider() {
	this.time = 500;
	this.browserWidth = $(window).width();
	this.divHeight = divHeight;
	this.scrollPosition = $(".imageSliderUl").scrollLeft();
}

function prev() {
	var slider = new imageSlider();
	var newScroll = slider.scrollPosition - slider.browserWidth;
	if (newScroll < 0) {
		newScroll = ($(".imageSliderUl").length+1) * slider.browserWidth;
	}
	$(".imageSliderUl").animate({
		scrollLeft: newScroll
	}, slider.time);
}

function next() {
	var slider = new imageSlider();
	var newScroll = slider.scrollPosition + slider.browserWidth;
	if (newScroll > ($(".imageSliderUl").length+1)*slider.browserWidth) {
		newScroll = 0;	
	}
	$(".imageSliderUl").animate({
		scrollLeft: newScroll
	}, slider.time);
}