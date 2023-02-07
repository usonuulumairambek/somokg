!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){console.log("file 1")},function(e,t){console.log("file 2")}]);


$(document).ready(function () {
	$('.video-block__btn').click(function  () {
		$(".video").attr('autoplay', true);
		$(".video").attr('controls', "controls");
		$(".video-block__btn").css('display', 'none')
	})
})

// $(".video").prop("volume", 0.3).click(function(){this[this.paused?"play":"pause"]()});


// toggle =================================================
// toggle =================================================
// toggle =================================================

$(document).ready(function () {
	$('.questions-block__subtitle').click(function() {
		$(this).next(".questions-block__description").slideToggle();
	});
})

// header burger-----------------------------------------
// header burger-----------------------------------------


$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.hidden').css('right', "0");
	})
})

$(document).ready(function () {
	$('.hidden__close-btn').click(function () {
		$('.hidden').css('right', "-500px");
	})
})


// toggle =================================================
// toggle =================================================
// toggle =================================================


var menuHandler = function () {
	$('.accordeon').click(function() {
		  	 $(this).next(".accordeon-links").slideToggle();
		});
}

if($(window).width()<768) {
	menuHandler();
}

// reload----------------------------------------------------
$(document).ready(function(){

    var cur_width = $(window).width();

    $(window).resize(function(){
        if($(window).width() <= 768 && cur_width > 768){
            //reload
            location.reload();
        }
        else if($(window).width() > 768 && cur_width <= 768){
            //reload
            location.reload();
        }
    });

});


// lang toggle-----------------------------------------------

$(document).ready(function () {
	
	$(".header__lang").click(function () {
		$(".header__lang").toggleClass('active');
	})
})

// tabs---------------------------------------------------------

const tabsBtn   = document.querySelectorAll(".calculator__tab");
const tabsItems = document.querySelectorAll(".calculator__bottom");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( !currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.calculator__tab').click();

// calculator---------------------------------------------------------------------

let range = document.querySelector('.slider');
let range2 = document.querySelector('.slider2');
let sum = document.querySelector('.summa');
let sendRequest = document.querySelector('.send');

const stavka = 3;
let payment;
let summa = range.value;
let srok = range2.value;



range.oninput = function(){
	summa = this.value;
	document.querySelector('#money').innerHTML = summa;
	document.querySelector('#final-money').innerHTML = summa;

	document.querySelector('#final-money_2').innerHTML = summa;
};


range2.oninput = function(){
	srok = this.value;
	document.querySelector('#srok').innerHTML = srok;
	document.querySelector('#final-srok').innerHTML = srok;

	document.querySelector('#final-srok_2').innerHTML = srok;
};


// пример платежа 

// function platezh(summa, stavka, srok){
//     stavka /= 100;
//     let a = Math.pow(1+stavka, srok);
//     let b = summa * stavka * a / (a - 1);
//     let result = parseFloat(b.toFixed(0)) * srok;
//     return result;
// }

// =====================================================
	

// slider======================================================
// slider======================================================
//
// $('.owl-carousel').owlCarousel({
//     responsive:{
//     	dots: true,
//         0:{
//             items:1,
//         },
//         768:{
//             items:2,
//         },
//         1024:{
//             items:3
//         }
//     }
// })

//
$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
		nav: true,
		loop: true,
		autoplay: true,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut'
    });
});
