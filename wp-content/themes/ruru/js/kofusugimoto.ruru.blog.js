$(function() {
	$.fn.imgLoaded = function(callback){
		var elems = this.filter('img'),
				len   = elems.length,
				blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
				
		elems.bind('load.imgloaded',function(){
				if (--len <= 0 && this.src !== blank){ 
					elems.unbind('load.imgloaded');
					callback.call(elems,this); 
				}
		}).each(function(){
			 // cached images don't fire load sometimes, so we reset src.
			 if (this.complete || this.complete === undefined){
					var src = this.src;
					// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					// data uri bypasses webkit log warning (thx doug jones)
					this.src = blank;
					this.src = src;
			 }  
		}); 
	 
		return this;
	};
	function loading(){
		if (!(DetectTierIphone() || DetectTierTablet())) {
			$('#loading').fadeOut(500, 0);
			document.getElementById("wrapper").style.display= "block";
			timerOpen = setTimeout(function() {
				$("#gNav").addClass("hover");
				if(_ua.IE){
					$("#gNav").animate({top : '0'}, 600, 'easeOutSine');
				}
			}, 2000);
			timerClose = setTimeout(function() {
				$("#gNav").removeClass("hover");
				if(_ua.IE){
					$("#gNav").animate({top : '-85px'}, 600, 'easeOutSine');
				}
			}, 4000);
			loadTimer = setTimeout(function() {
				$('#loading').remove();
			}, 500);
		} else {
			$('#loading').remove();
			document.getElementById("wrapper").style.display= "block";
		}
	}
	loading();

	/*
	 * MOBILE
	 */
	if((DetectTierIphone() || DetectTierTablet())){
			if(document.body.scrollTop == 0){
				setTimeout(function(){scrollTo(0,1)}, 1);
			}
			menuIcon = $("#menuIcon");
			gNav     = $("#gNav");
			gNavBox  = $("#gNavBox");
			nav6A    = $("#nav6 a");
			nav7A    = $("#nav7 a");
			nav8A    = $("#nav8 a");
			var navclassReplaced = false;
			var menuOpen = false;
			var Resent = false;
			menuIcon.click(function(){
				if(window.matchMedia("(max-width:639px)").matches){
					if(!menuOpen){
						gNavBox.addClass("on"),
						$(this).addClass("on");
						timerMenu = setTimeout(function(){
							gNavBox.addClass('open');
						},10);
						menuOpen = true;
					}else {
						gNavBox.removeClass("open"),
						$(this).removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
				}else {
					if(!menuOpen){
						gNav.addClass("hover");
						menuOpen = true;
					} else {
						gNav.removeClass("hover");
						menuOpen = false;
					}
				}
				return false;
			});
			$(window).bind('load resize', function() {
				if (window.matchMedia("(max-width:639px)").matches){
					if(!Resent) {
						
					}
					if(!navclassReplaced) {
						nav6A.removeClass('bird2');
						nav7A.removeClass('bird');
						nav8A.removeClass('bird3');
						navclassReplaced = true;
					}
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
				}else if (window.matchMedia("(max-width:979px)").matches){
					if(navclassReplaced) {
						nav6A.addClass('bird2');
						nav7A.addClass('bird');
						nav8A.addClass('bird3');
						navclassReplaced = false;
					}
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
				}else {
					if(navclassReplaced) {
						nav6A.addClass('bird2');
						nav7A.addClass('bird');
						nav8A.addClass('bird3');
						navclassReplaced = false;
					}
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
				}
			});
	}
			/*
			 * MOBILE END
			 */

			/*
			 * No csstransitions
			 */
			if(!Modernizr.csstransitions){
				//menu
				$("#gNav").hover(
					function () {
						$(this).stop(true, false).animate({
							top : "0"
							},600,"easeInOutQuad");
					},
					function () {
						$(this).stop(true, false).animate({
							top : "-85px"
							},600,"easeInOutQuad");
					}
				);

				//bird
				bird1 = $('#nav6 a.bird2');
				bird2 = $('#nav7 a.bird');
				bird3 = $('#nav8 a.bird3');
				birdPro = $('#wrapper article.profile p.bird3');
				birdCon = $('#wrapper article.contact p.bird3');
				bdBgPos = new Array(-128, -256, -384, 0);
				bdBgPos2 = new Array(-220, -440, -660, 0);
				bdBgPos3 = new Array(-90, -180, -270, 0)
				i = 0;

				//interaction
				bird1.hover(function() {
				timerID = setInterval(birdMove,100);
				},function(){
					clearInterval(timerID),
					bird1.css('backgroundPositionX', bdBgPos[3]);
				});
				bird2.hover(function() {
				timerID2 = setInterval(birdMove2,100);
				},function(){
					clearInterval(timerID2),
					bird2.css('backgroundPositionX', bdBgPos[3]);
				});
				bird3.hover(function() {
				timerID3 = setInterval(birdMove3,100);
				},function(){
					clearInterval(timerID3),
					bird3.css('backgroundPositionX', bdBgPos[3]);
				});
				birdPro.hover(function() {
				timerID3 = setInterval(birdMovePro,100);
				},function(){
					clearInterval(timerID3),
					birdPro.css('backgroundPositionX', bdBgPos[3]);
				});
				birdCon.hover(function() {
				timerID4 = setInterval(birdMoveCon,100);
				},function(){
					clearInterval(timerID4),
					birdCon.css('backgroundPositionX', bdBgPos[3]);
				});

				//bird function
				birdMove = function(){
					if(i >= bdBgPos.length) {
						i = 0;
					}
					bird1.css('backgroundPositionX', bdBgPos[i]);
					i++;
				}
				birdMove2 = function(){
					if(i >= bdBgPos2.length) {
						i = 0;
					}
					bird2.css('backgroundPositionX', bdBgPos2[i]);
					i++;
				}
				birdMove3 = function(){
					if(i >= bdBgPos.length) {
						i = 0;
					}
					bird3.css('backgroundPositionX', bdBgPos[i]);
					i++;
				}
				birdMovePro = function(){
					if(i >= bdBgPos3.length) {
						i = 0;
					}
					birdPro.css('backgroundPositionX', bdBgPos3[i]);
					i++;
				}
				birdMoveCon = function(){
					if(i >= bdBgPos3.length) {
						i = 0;
					}
					birdCon.css('backgroundPositionX', bdBgPos3[i]);
					i++;
				}

				//contact profile
				var ct = $('#wrapper article.contact');
				var ctBtnLink = $('#wrapper .profile p a');
				var ctBtn = $('li#nav5');
				var pro = $('#wrapper article.profile');
				var proBtn = $('li#nav2');
				var clBtnC = $('#wrapper article.contact div.closeBtn');
				var clBtnP = $('#wrapper article.profile div.closeBtn');
				//Default position
				var ctDefT = $('#wrapper article.contact').css('top');
				var ctDefL = $('#wrapper article.contact').css('left');
				var proDefT = $('#wrapper article.profile').css('top');
				var proDefL = $('#wrapper article.profile').css('left');
				//move position
				var ctToT = '400px';
				var ctToL = '50%';
				var proToT = '50%';
				var proToL = '50%';
				
				
				var works = $('#nav4');
				var worksNav6 = $('#nav6');
				var worksNav7 = $('#nav7');
				var worksNav8 = $('#nav8');
				worksNav6Pos = new Array('-130%', '-160%');
				worksNav7Pos = new Array('-220%', '-250%');
				worksNav8Pos = new Array('-220%', '-250%');
				var iA = 0;
				var iB = 0;
				var iC = 0;
				//works interaction
				var timerTEST = false;
				
				function worksInterval(){
					if(timerTEST == false){
						setTimeout(function() {
							timerTEST = true;
							worksInterval();
							timerTEST = false;
						}, 16);
						return;
					}
					timerWorksNav6 = setInterval(birdMoveNav6,2000);
					timerWorksNav7 = setInterval(birdMoveNav7,2100);
					timerWorksNav8 = setInterval(birdMoveNav8,2200);
				}

				birdMoveNav6 = function(){
					if(iA >= worksNav6Pos.length) {
						iA = 0;
					}
					worksNav6.stop(true, false).animate({
						bottom : worksNav6Pos[iA]
					}, 2000, "easeInOutCubic");
					iA++;
				}
				birdMoveNav7 = function() {
					if(iB >= worksNav7Pos.length) {
						iB = 0;
					}
					worksNav7.stop(true, false).animate({
						bottom : worksNav7Pos[iB]
					}, 2100, "easeInOutCubic");
					iB++;
				}
				birdMoveNav8 = function() {
					if(iC >= worksNav8Pos.length) {
						iC = 0;
					}
					worksNav8.stop(true, false).animate({
						bottom : worksNav8Pos[iC]
					}, 2200, "easeInOutCubic");
					iC++;
				}

				works.hover(function() {
					worksInterval();
					worksNav6.stop(true, false).animate({
						bottom : '-130%',
						left : '-5%'
					}, 600, "easeOutCubic")
					.animate({
						bottom : '-160%'
					}, 1400, "easeInOutCubic");
					worksNav7.stop(true, false).delay(100).animate({
						right : '50%',
						bottom : '-220%'
					}, 700, "easeOutCubic")
					.animate({
						bottom : '-250%'
					}, 1400, "easeInOutCubic");
					worksNav8.stop(true, false).delay(200).animate({
						bottom : '-220%',
						left : '30%'
					}, 800, "easeOutCubic")
					.animate({
						bottom : '-250%'
					}, 1400, "easeInOutCubic");
				},function(){
					clearInterval(timerWorksNav6);
					clearInterval(timerWorksNav7);
					clearInterval(timerWorksNav8);
					iA = 0;
					iB = 0;
					iC = 0;
					worksNav6.stop(true, false).animate({
						bottom : '120%',
						left : '200%'
					}, 600, "easeOutCubic");
					worksNav7.stop(true, false).animate({
						bottom : '100%',
						right : '500%'
					}, 600, "easeOutCubic");
					worksNav8.stop(true, false).animate({
						bottom : '130%',
						left : '200%'
					}, 600, "easeOutCubic");
				});
				
				
				//interaction
				//ContactActive
				$(document).on('click','#Stage_top_1_contactRange',function(){
					ctActive();
				});
				ctBtn.click(function() {
					ctActive();
				});
				ctBtnLink.click(function() {
					ctActive();
				});
				clBtnC.click(function() {
					if (timer !== false) {
						clearTimeout(timer);
					}
					ct.addClass('end'),
					ct.animate({
							top : '-10%',
							left : '-10%'
					}, 500, "easeOutCubic");
					timer = setTimeout(function() {
						ct.removeClass('contactActive end'),
						ct.css("top", ctDefT),
						ct.css("left", ctDefL)
					}, 600);
					return false;
				});

				//ProfileActive
				$(document).on('click','#Stage_top_1_profile2',function(){
					proActive();
				});
				proBtn.click(function() {
					proActive();
				});
				clBtnP.click(function() {
					if (timer !== false) {
						clearTimeout(timer);
					}
					pro.addClass('end'),
					pro.animate({
							top : '-10%',
							left : '-10%'
					}, 500, "easeOutCubic");
					timer = setTimeout(function() {
						pro.removeClass('profileActive end'),
						pro.css("top", proDefT),
						pro.css("left", proDefL)
					}, 600);
					return false;
				});

				function ctActive() {
					if (timer !== false) {
						clearTimeout(timer);
					}
					pro.addClass('end'),
					pro.animate({
							top : '-10%',
							left : '-10%'
					}, 500, "easeOutCubic");
					timer = setTimeout(function() {
						pro.removeClass('profileActive end'),
						pro.css("top", proDefT),
						pro.css("left", proDefL)
					}, 600);
					ct.addClass('contactActive'),
					ct.animate({
						top : ctToT,
						left : ctToL
					},900, "easeOutCubic");
					timerID4 = setInterval(birdMoveCon,100);
					timer = setTimeout(function() {
						clearInterval(timerID4),
						birdCon.css('backgroundPositionX', bdBgPos[3]);
					}, 1500);
					return false;
				}

				function proActive() {
					if (timer !== false) {
						clearTimeout(timer);
					}
					ct.addClass('end'),
					ct.animate({
							top : '-10%',
							left : '-10%'
					}, 500, "easeOutCubic");
					timer = setTimeout(function() {
						ct.removeClass('contactActive end'),
						ct.css("top", ctDefT),
						ct.css("left", ctDefL)
					}, 600);
					pro.addClass('profileActive'),
					pro.animate({
						top : proToT,
						left : proToL
					},900, "easeOutCubic");
					timerID3 = setInterval(birdMovePro,100);
					timer = setTimeout(function() {
						clearInterval(timerID3),
						birdPro.css('backgroundPositionX', bdBgPos[3]);
					}, 1500);
					return false;
				}
			}
			/*
			 * End No csstransitions
			 */


			var next = $('p.oldpage').text();
			var prev = $('p.newpage').text();
			if(next == "") {
				$('p.oldpage').remove();
			}else if (prev == ""){
				$('p.newpage').remove();
			}
			window.onload=loading;

			var _ua = (function(){
				return {
				ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
				ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
				ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
				IE:document.uniqueID,
				Firefox:window.sidebar,
				Opera:window.opera,
				Webkit:!document.uniqueID && !window.opera && !window.sidebar && window.localStorage && typeof window.orientation == "undefined",
				Mobile:typeof window.orientation != "undefined"
				}
			})();
			var mx = -1;
			if(!(DetectTierIphone() || DetectTierTablet())){
				$("link[media]").remove();
				$("#menuIcon").remove();
				if(_ua.Firefox){
					var calc_width = function() {
						wsz = $(window).width();
						wszM = 0;
						wszM = wsz - 200;
						wszH = wsz / 2;
						$('#bg').css('width', wsz + wsz / 2 * 0.010);
						$('#bg2').css('width', wsz + wsz / 2 * 0.005);
						$('#gNav').css('width', wsz + wsz / 2 * 0.06);
						$('#gNavInner').css('marginLeft', (wsz / 2) * 0.06 * mx);
						$('#bgHeader').css('width', wsz + wsz / 2 * 0.01);
						$('#bgHeaderInner').css('marginLeft', (wsz / 2) * 0.01 * mx);
						$('footer').css('width', wsz + wsz / 2 * 0.035);
						$('#footerInnerWrapper').css('width', wsz + wsz / 2 * 0.035);
						$('#footerInnerWrapper').css('marginLeft', (wsz / 2) * 0.035 * mx);
						$('#footerInnerYard').css('marginLeft', (wsz / 2) * 0.02 * mx);
						$('#footerInnerYard2').css('marginLeft', (wsz / 2) * 0.035 * mx);
						$('#animal').css('marginLeft', (wsz / 2) * 0.03 * mx);
					}
				}else{
					var calc_width = function() {
						wsz = $(window).width();
						wszM = 0;
						wszM = wsz - 200;
						wszH = wsz / 2;
						$('#bg').css('width', wsz + wsz / 2 * 0.010);
						$('#bg2').css('width', wsz + wsz / 2 * 0.005);
						$('#gNav').css('width', wsz + wsz / 2 * 0.06);
						$('#gNavInner').css('marginLeft', (wsz / 2) * 0.06 * mx);
						$('#bgHeader').css('width', wsz + wsz / 2 * 0.01);
						$('#bgHeaderInner').css('marginLeft', (wsz / 2) * 0.01 * mx);
						$('footer').css('width', wsz + wsz / 2 * 0.035);
						$('#footerInnerWrapper').css('width', wsz + wsz / 2 * 0.035);
						$('#footerInnerWrapper').css('marginLeft', (wsz / 2) * 0.035 * mx);
						$('#footerInnerYard').css('marginLeft', (wsz / 2) * 0.02 * mx);
						$('#footerInnerYard2').css('marginLeft', (wsz / 2) * 0.035 * mx);
						$('#animal').css('marginLeft', (wsz / 2) * 0.035 * mx);
						$('#animal2').css('marginLeft', (wsz / 2) * 0.035 * mx);
					}
				}
			calc_width();
			//slider
			var timer = false;
			$(window).resize(function() {
				//$("#header nav").removeClass("hover");
				//menuOpen = false;
				var rsz = true;
				if (timer !== false) {
					clearTimeout(timer);
				}
				timer = setTimeout(function() {
					calc_width();
				}, 100);
			});
			var columnSize = $(".img3column").size();
			}
			
			//profile contact
			var Wcontact = $('#wrapper > article.contact');
			var WcontactBird = $('#wrapper > article.contact p.bird3')
			var Wprofile = $('#wrapper > article.profile');
			var WprofileA = $('#contactLink');
			var WprofileBird = $('#wrapper > article.profile p.bird3');
			var WcloseBtn = $('div.closeBtn');
			var WliNav2 = $('li#nav2');
			var WliNav5 = $('li#nav5');
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			
			WliNav2.click(function() {
				Wscroll = $(window).scrollTop();
				Wprofile.addClass('profileActive'),
				WprofileBird.addClass('active'),
				timer = setTimeout(function() {
				WprofileBird.removeClass('active')
				}, 1500);
				if(Wcontact.hasClass('contactActive')){
					Wcontact.addClass('end'),
					WcontactBird.addClass('active'),
					timer = setTimeout(function() {
						Wcontact.removeClass('contactActive end')
					}, 500);
					timer = setTimeout(function() {
						WcontactBird.removeClass('active')
					}, 500);
				}
				return false;
			});
			WprofileA.click(function() {
				var Wscroll = $(window).scrollTop();
				if(Wscroll != 0){
					$("html,body").stop().animate({"scrollTop":0},600, 'easeOutQuad',function(){
						Wcontact.addClass('contactActive'),
						Wprofile.addClass('end'),
						WprofileBird.addClass('active'),
						WcontactBird.addClass('active'),
						timer = setTimeout(function() {
							Wprofile.removeClass('profileActive end')
						}, 500);
						timer = setTimeout(function() {
							WprofileBird.removeClass('active')
						}, 500);
						timer = setTimeout(function() {
							WcontactBird.removeClass('active')
						}, 1500);
					});
				}else{
					Wcontact.addClass('contactActive'),
					Wprofile.addClass('end'),
					WprofileBird.addClass('active'),
					WcontactBird.addClass('active'),
					timer = setTimeout(function() {
						Wprofile.removeClass('profileActive end')
					}, 500);
					timer = setTimeout(function() {
						WprofileBird.removeClass('active')
					}, 500);
					timer = setTimeout(function() {
						WcontactBird.removeClass('active')
					}, 1500);
				}
				return false;
			});
			WliNav5.click(function() {
				var Wscroll = $(window).scrollTop();
				if(Wscroll != 0){
				$("html,body").stop().animate({"scrollTop":0},600, 'easeOutQuad',function(){
					Wcontact.addClass('contactActive'),
					WcontactBird.addClass('active'),
					timer = setTimeout(function() {
						WcontactBird.removeClass('active')
					}, 1500);
					if(Wprofile.hasClass('profileActive')){
						Wprofile.addClass('end'),
						WprofileBird.addClass('active'),
						timer = setTimeout(function() {
							Wprofile.removeClass('profileActive end')
						}, 500);
						timer = setTimeout(function() {
							WprofileBird.removeClass('active')
						}, 500);
					}
				});
				}else{
					Wcontact.addClass('contactActive'),
					WcontactBird.addClass('active'),
					timer = setTimeout(function() {
						WcontactBird.removeClass('active')
					}, 1500);
					if(Wprofile.hasClass('profileActive')){
						Wprofile.addClass('end'),
						WprofileBird.addClass('active'),
						timer = setTimeout(function() {
							Wprofile.removeClass('profileActive end')
						}, 500);
						timer = setTimeout(function() {
							WprofileBird.removeClass('active')
						}, 500);
					}
				}
				return false;
			});
			WcloseBtn.click(function() {
				if(Wcontact.hasClass('contactActive')){
					Wcontact.addClass('end'),
					WcontactBird.addClass('active'),
					timer = setTimeout(function() {
						Wcontact.removeClass('contactActive end')
					}, 500);
					timer = setTimeout(function() {
						WcontactBird.removeClass('active')
					}, 500);
				}
				if(Wprofile.hasClass('profileActive')){
					Wprofile.addClass('end'),
					WprofileBird.addClass('active'),
					timer = setTimeout(function() {
						Wprofile.removeClass('profileActive end')
					}, 500);
					timer = setTimeout(function() {
						WprofileBird.removeClass('active')
					}, 500);
				}
				return false;
			});

			if(!(DetectTierIphone() || DetectTierTablet())){
				if(_ua.Firefox) {
					var calcBgPos = function() {
						bgPosDef = $('#wrapper').css('backgroundPosition');
						bgPos = bgPosDef.split(',');
						bgPosA = bgPos[0].match(/\-?[0-9]*\.?[0-9]+/g),
						bgPosB = bgPos[1].match(/\-?[0-9]*\.?[0-9]+/g);
						bgPosAY = bgPosA[1];
						bgPosBY = bgPosB[1];
					}
					backPos = $('#wrapper').css('backgroundPosition');
					aryBackY = backPos.match(/\-?[0-9]*\.?[0-9]+/g);
					calcBgPos();
					bgPosAX = bgPosA[0];
					bgPosBX = bgPosB[0];
					var bgxA = Math.round(parseInt(bgPosAX) * 0.033) + 'px, ';
					var bgxB = Math.round(parseInt(bgPosBX) * 0.033) + wszM + 'px';
					$('body').mousemove(function(e) {
						dx = e.clientX;
						cx = wszH - dx;
						bgxA = Math.round(parseInt(bgPosAX) + cx * 0.033) + 'px';
						bgxB = Math.round(parseInt(bgPosBX) + cx * 0.033) + wszM + 'px';
						$('#wrapper').css('backgroundPosition', bgxA + ' ' + bgPosAY + 'px, ' + bgxB + ' ' + bgPosBY + 'px');
						$('#bg').css('marginLeft', Math.round(cx * 0.010));
						$('#bg2').css('marginLeft', cx * 0.005);
						$('#gNav').css('marginLeft', cx * 0.06);
						$('#footerInnerYard').css('marginLeft', cx * 0.02);
						$('#bgHeader').css('marginLeft', cx * 0.01);
						$('#footerInnerYard2').css('marginLeft', cx * 0.035);
						$('#animal').css('marginLeft', cx * 0.028);
					});
					//scroll interaction
					$(window).scroll(function(){
						var y = $(this).scrollTop();
						scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
						scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
						clientHeight = document.body.scrollHeight;
						if(scrollHeight === clientHeight) {
						 clientHeight = window.innerHeight; //for safari / chorme
						}
						remain = scrollHeight - scrollTop - clientHeight;
						$("#wrapper").css('backgroundPosition', bgxA + ' ' + (parseInt(aryBackY[1] - y * -0.94) + 'px, ') + bgxB + ' ' + (parseInt(aryBackY[3] - y * -0.97) + 'px'));
						$('footer').css('bottom', remain * -0.05 + 'px');
						calcBgPos();
					});
	//Other
				}else if(_ua.IE) {
					var bgx = $('#wrapper').css('backgroundPositionX');
					var aryBgX = bgx.match(/\-?[0-9]*\.?[0-9]+/g);
					var bgy = $('#wrapper').css('backgroundPositionY');
					var aryBgY = bgy.match(/\-?[0-9]*\.?[0-9]+/g);
					var bgxA = Math.round(parseInt(aryBgX[0]) * 0.033) + 'px, ';
					var bgxB = Math.round(parseInt(aryBgX[1]) * 0.033) + wszM + 'px';
					var bgxR = bgxA + bgxB;
					$('#wrapper').css('backgroundPositionX', bgxR);
					//mouse move interaction
					
					$('body').mousemove(function(e) {
						var dx = e.clientX;
						var cx = wszH - dx;
						var bgxA = Math.round(parseInt(aryBgX[0]) + cx * 0.033) + 'px, ';
						var bgxB = Math.round(parseInt(aryBgX[1]) + cx * 0.033) + wszM + 'px';
						var bgxR = bgxA + bgxB;
						$('#wrapper').css('backgroundPositionX', bgxR);
						$('#bg').css('marginLeft', Math.round(cx * 0.010));
						$('#bg2').css('marginLeft', cx * 0.005);
						$('#gNav').css('marginLeft', cx * 0.06);
						$('#footerInnerYard').css('marginLeft', cx * 0.02);
						$('#bgHeader').css('marginLeft', cx * 0.01);
						$('#footerInnerYard2, #animal').css('marginLeft', cx * 0.035);
						$('#animal2').css('marginLeft', cx * 0.028);
					});
					//scroll interaction
					$(window).scroll(function(){
						var y = $(this).scrollTop();
						scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
						scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
						clientHeight = window.innerHeight;
						remain = scrollHeight - scrollTop - clientHeight;
						$("#wrapper").css('backgroundPositionY',(parseInt(aryBgY[0] - y * -0.94) + 'px, ') + (parseInt(aryBgY[1] - y * -0.97) + 'px'));
						$('footer').css('bottom', remain * -0.05 + 'px');
					});
				}else {
					var bgx = $('#wrapper').css('backgroundPositionX');
					var aryBgX = bgx.match(/\-?[0-9]*\.?[0-9]+/g);
					var bgy = $('#wrapper').css('backgroundPositionY');
					var aryBgY = bgy.match(/\-?[0-9]*\.?[0-9]+/g);
					var bgxA = Math.round(parseInt(aryBgX[0]) * 0.033) + 'px, ';
					var bgxB = Math.round(parseInt(aryBgX[1]) * 0.033) + wszM + 'px';
					var bgxR = bgxA + bgxB;
					$('#wrapper').css('backgroundPositionX', bgxR);
					//mouse move interaction
					$('body').mousemove(function(e) {
						var dx = e.clientX;
						var cx = wszH - dx;
						var bgxA = Math.round(parseInt(aryBgX[0]) + cx * 0.033) + 'px, ';
						var bgxB = Math.round(parseInt(aryBgX[1]) + cx * 0.033) + wszM + 'px';
						var bgxR = bgxA + bgxB;
						$('#wrapper').css('backgroundPositionX', bgxR);
						$('#bg').css('marginLeft', Math.round(cx * 0.010));
						$('#bg2').css('marginLeft', cx * 0.005);
						$('#gNav').css('marginLeft', cx * 0.06);
						$('#footerInnerYard').css('marginLeft', cx * 0.02);
						$('#bgHeader').css('marginLeft', cx * 0.01);
						$('#footerInnerYard2, #animal').css('marginLeft', cx * 0.035);
						$('#animal2').css('marginLeft', cx * 0.028);
					});
					//scroll interaction
					$(window).scroll(function(){
						var y = $(this).scrollTop();
						scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
						scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
						clientHeight = document.body.scrollHeight;
						if(scrollHeight === clientHeight) {
						 clientHeight = window.innerHeight; //for safari / chorme
						}
						remain = scrollHeight - scrollTop - clientHeight;
						$("#wrapper").css('backgroundPositionY',(parseInt(aryBgY[0] - y * -0.94) + 'px, ') + (parseInt(aryBgY[1] - y * -0.97) + 'px'));
						$('footer').css('bottom', remain * -0.05 + 'px');
					});
				}
			}

			//wordpress
			var next = $('p.oldpage').text();
			var prev = $('p.newpage').text();
			if(next == "" && prev == ""){
				$('#pagenation').remove();
			}
			else if(next == "") {
				$('p.oldpage').remove();
			}
			else if(prev == ""){
				$('p.newpage').remove();
			}
			if(0 < $("div.wpcf7-mail-sent-ok").size()){
				$('article.contact').addClass('contactActive'),
				$('#formInner').css('display', 'none');
			}
			var fancyTimer = false;
			var faded = false;
			var disqusLoaded = false;
			$(window).bind('load resize', function() {
				if (window.matchMedia("(max-width:979px)").matches){
					if (fancyTimer !== false) {
						clearTimeout(fancyTimer);
					} else {
						
					}
					fancyTimer = setTimeout(function(){
						if(!faded){
							$('.mason').css('opacity',0);
							$('.mason').fadeTo(500, 1);
							faded = true;
						} else {
							
						}
						$("#contentInner").masonry("destroy");
					}, 100);
				} else {
					if (fancyTimer !== false) {
						clearTimeout(fancyTimer);
					}
					fancyTimer = setTimeout(function(){
						if(!faded){
							$('.mason').css('opacity',0);
							$('.mason').fadeTo(500, 1);
							faded = true;
						}
						$("#contentInner").masonry({
							itemSelector: ".mason",
							isFitWidth: true,
							columnWidth: 244,
							isAnimated: !Modernizr.csstransitions
						});
					}, 100);
				}
			});
			$("#disqus_thread, #contentInner").exResize(function(){
				if (window.matchMedia("(max-width:979px)").matches) {
					
				} else {
					$("#contentInner").masonry({
						itemSelector: ".mason",
						isFitWidth: true,
						columnWidth: 244,
						isAnimated: !Modernizr.csstransitions
					});
				}
			});
			
		});
