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
	$('#overflow img').imgLoaded(function(){
		if(DetectTierIphone()){
			$('#loading').remove();
			document.getElementById("wrapper").style.display= "block";
		}else {
			if($("div#Stage").size() == 0){
				timerOpen = setTimeout(function() {
						$("#gNav").addClass("hover");
						$("li#nav4").addClass("hover");
						if(!Modernizr.csstransitions){
							$("#gNav").animate({top : '0'}, 600, 'easeInOutCubic');
							worksNav6.stop(true, false).animate({
								bottom : '-130%',
								left : '-5%'
							}, 600, "easeOutCubic")
							.animate({
								bottom : '-160%'
							}, 1400, "easeInOutCubic");
							worksNav7.stop(true, false).animate({
								bottom : '-220%',
								right : '10%'
							}, 700, "easeOutCubic")
							.animate({
								bottom : '-250%'
							}, 1500, "easeInOutCubic");
						}
					}, 1500);
				timerClose = setTimeout(function() {
						$("#gNav").removeClass("hover");
						$("li#nav4").removeClass("hover");
						if(!Modernizr.csstransitions){
							$("#gNav").animate({top : '-85px'}, 600, 'easeInOutCubic');
							worksNav6.stop(true, false).animate({
								bottom : '120%',
								left : '200%'
							}, 600, "easeOutCubic");
							worksNav7.stop(true, false).animate({
								bottom : '100%',
								right : '500%'
							}, 600, "easeOutCubic");
						}
				}, 3500);
				$('#loading').fadeOut(1500, 0);
				document.getElementById("wrapper").style.display= "block";
			} else {
		
			}
		}
	});

	var navBtn = $('#navBtn');
	var gNav = $("#gNav");
	var content = $("#content");
	if ($.browser.msie) {
			$('label > img').click(function () {
					$('#'+$(this).parent().attr('for') ).focus().click();
			});
	}
	if((DetectTierIphone() || DetectTierTablet()) && (0 == $("#Stage").size())){
		if(document.body.scrollTop == 0){
			setTimeout(function(){scrollTo(0,1)}, 1);
		}
		menuIcon = $("#menuIcon");
		gNav     = $("#gNav");
		gNavBox  = $("#gNavBox");
		nav6A    = $("#nav6 a");
		nav7A    = $("#nav7 a");
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
		classRemove = function(){
			gNavBox.removeClass("open").removeClass('on'),
			menuIcon.removeClass("on");
		}
		if($("#bgTable").size() > 0) {
			var navSketchReplaced = false;
			var rmvTimer = false;
			var data = 1;
			var ajaxSending = false;
			$(window).bind('load resize', function() {
				if (window.matchMedia("(max-width:639px)").matches){
					if(!navSketchReplaced) {
						$("#navSketch").remove();
						$("#nav3").after('<li id="navSketch" class="mob"><a href="#" class="hide-text">sketch</a></li>');
						$("#nav6 a").removeClass('bird2');
						$("#nav7 a").removeClass('bird');
						navSketchReplaced = true;
					}
					if (rmvTimer !== false) {
						clearTimeout(timer);
					}
					rmvTimer = setTimeout(function() {
						if(0 < $("div#navSketch").size()) {
							var divnavSketch = $("div#navSketch");
							divnavSketch.remove();
						}else if(0 < $("div#navPainting").size()){
							var divnavPainting = $("div#navPainting");
							divnavPainting.remove();
						}
					}, 500);
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
					//ajax
					$("#navSketch a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/sketch.php',
								data: data,
								success: function(data) {
									if(!menuOpen){
										gNavBox.addClass("on"),
										menuIcon.addClass("on");
										timerMenu = setTimeout(function(){
											gNavBox.addClass('open');
										},10);
										menuOpen = true;
									}else {
										gNavBox.removeClass("open"),
										menuIcon.removeClass("on");
										timerMenuC = setTimeout(function(){
											gNavBox.removeClass('on');
										},1000);
										menuOpen = false;
									}
									$("#overflow li.imgSelection").fadeOut(600,0);
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navSketch").remove();
									$("#mainWrapper").replaceWith(data);
									if(0 < $("#navSketch").size()) {
										var navSketch = $("#navSketch");
										navSketch.remove();
										$("#nav3").after('<li id="navSketch" class="mob"><a href="#" class="hide-text">sketch</a></li>');
									}else if(0 < $("#navPainting").size()){
										var navPainting = $("#navPainting");
										navPainting.remove();
										$("#nav3").after('<li id="navPainting" class="mob"><a href="#" class="hide-text">Painging</a></li>');
									}
									timerImgSelection = setTimeout(function(){
										$("#overflow li.imgSelection").removeClass("off");
									},100);
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overflow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							
						}
						return false;
					});
					$("#navPainting a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/painting.php',
								data: data,
								success: function(data) {
									if(!menuOpen){
										gNavBox.addClass("on"),
										menuIcon.addClass("on");
										timerMenu = setTimeout(function(){
											gNavBox.addClass('open');
										},10);
										menuOpen = true;
									}else {
										gNavBox.removeClass("open"),
										menuIcon.removeClass("on");
										timerMenuC = setTimeout(function(){
											gNavBox.removeClass('on');
										},1000);
										menuOpen = false;
									}
									$("#overflow li.imgSelection").fadeOut(600,0);
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navPainting").remove();
									$("#mainWrapper").replaceWith(data);
									if(0 < $("#navSketch").size()) {
										var navSketch = $("#navSketch");
										navSketch.remove();
										$("#nav3").after('<li id="navSketch" class="mob"><a href="#" class="hide-text">sketch</a></li>');
									}else if(0 < $("#navPainting").size()){
										var navPainting = $("#navPainting");
										navPainting.remove();
										$("#nav3").after('<li id="navPainting" class="mob"><a href="#" class="hide-text">Painging</a></li>');
									}
										$("#overflow li.imgSelection").removeClass("off");
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overfow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							
						}
						return false;
					});
				}else if (window.matchMedia("(max-width:979px)").matches){
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
					$("#navSketch a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$("#overflow li.imgSelection").fadeOut(600,0);
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/sketch.php',
								data: {},
								success: function(data) {
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navSketch").remove();
									$("#mainWrapper").replaceWith(data);
									timerImgSelection = setTimeout(function(){
										$("#overflow li.imgSelection").removeClass("off");
									},100);
									$("#content").prepend('<div id="navPainting"><a href="#" class="hide-text">painting</a></div>');
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overfow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							//何もしない
						}
						return false;
					});
					$("#navPainting a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$("#overflow li.imgSelection").fadeOut(600,0);
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/painting.php',
								data: {},
								success: function(data) {
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navPainting").remove();
									$("#mainWrapper").replaceWith(data);
									timerImgSelection = setTimeout(function(){
										$("#overflow li.imgSelection").removeClass("off");
									},100);
									$("#content").prepend('<div id="navSketch"><a href="#" class="hide-text">sketch</a></div>');
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overfow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							//何もしない
						}
						return false;
					});
				}else {
					if(menuOpen){
						gNav.removeClass("hover");
						gNavBox.removeClass("open"),
						menuIcon.removeClass("on");
						timerMenuC = setTimeout(function(){
							gNavBox.removeClass('on');
						},1000);
						menuOpen = false;
					}
					$("#navSketch a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$("#overflow li.imgSelection").fadeOut(600,0);
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/sketch.php',
								data: {},
								success: function(data) {
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navSketch").remove();
									$("#mainWrapper").replaceWith(data);
									timerImgSelection = setTimeout(function(){
										$("#overflow li.imgSelection").removeClass("off");
									},100);
									$("#content").prepend('<div id="navPainting"><a href="#" class="hide-text">painting</a></div>');
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overfow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							//何もしない
						}
						return false;
					});
					$("#navPainting a").live("click", function() {
						if(!ajaxSending){
							ajaxSending = true;
							$("#overflow li.imgSelection").fadeOut(600,0);
							$.ajax({
								type: 'post',
								url: 'http://rurumisaki.com/wp-content/themes/ruru/painting.php',
								data: {},
								success: function(data) {
									$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navPainting").remove();
									$("#mainWrapper").replaceWith(data);
									timerImgSelection = setTimeout(function(){
										$("#overflow li.imgSelection").removeClass("off");
									},100);
									$("#content").prepend('<div id="navSketch"><a href="#" class="hide-text">sketch</a></div>');
									controls = $('#controls');
									controls2 = $('#controls2');
									imgSelects = $('#overfow img');
									Wheader = $('#mainWrapper');
									ajaxSending = false;
								}
							});
						} else {
							//何もしない
						}
						return false;
					});
				}
			});
		}else {
			var navclassReplaced = false;
			$(window).bind('load resize', function() {
				if (window.matchMedia("(max-width:639px)").matches){
					if(!navclassReplaced) {
						nav6A.removeClass('bird2');
						nav7A.removeClass('bird');
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
	}
	if(0 < $("#slider").size()){
		$("li.imgSelection a").fancybox({
			'openEffect'		:'elastic',
			'closeEffect'	:'fade',
			'speedIn'		:600,
			'speedOut'		:200,
			'padding' : 74,
			'scrolling': 'auto',
			'nextEffect' : 'fade',
			'prevEffect' : 'fade', 
			'margin': 40,
			'minMoveX': 50,
			'minMoveY': 50
		});
		$(window).bind('load resize', function() {
			if (window.matchMedia("(max-width:639px)").matches){
				$("li.imgSelection a").fancybox({
					'openEffect'		:'elastic',
					'closeEffect'	:'fade',
					'speedIn'		:600,
					'speedOut'		:200,
					'padding' :18,
					'scrolling': 'yes',
					'nextEffect' : 'fade',
					'prevEffect' : 'fade',
					'margin': 20,
					'minMoveX': 50,
					'minMoveY': 50
				});
			}else if (window.matchMedia("(max-width:979px)").matches){
				$("li.imgSelection a").fancybox({
					'openEffect'		:'elastic',
					'closeEffect'	:'fade',
					'speedIn'		:600,
					'speedOut'		:200,
					'padding' :37,
					'scrolling': 'yes',
					'nextEffect' : 'fade',
					'prevEffect' : 'fade',
					'margin': 20
				});
			}else {
				$("li.imgSelection a").fancybox({
					'openEffect'		:'elastic',
					'closeEffect'	:'fade',
					'speedIn'		:600,
					'speedOut'		:200,
					'padding' : 74,
					'scrolling': 'auto',
					'nextEffect' : 'fade',
					'prevEffect' : 'fade',
					'margin': 40
				});
			}
		});
	}
	if(0 < $('#homeNav').size()){
		var doorClose = $('#Stage_top_1_doorClose');
		var contactRange = $('#Stage_top_1_contactRange');
		var profileRange = $('#Stage_profileRange');
		var blogRange = $('#Stage_blogRange');
		$('#wrapper').css('opacity', 0);
		$('#Stage_top_1_RURU_u2, #Stage_top_1_RURU_r1, #Stage_top_1_RURU_r2, #Stage_top_1_RURU_u1')
					.css('bottom', '1500px');
		$('#bgstar01inner,#bgstar02inner').css('opacity', 0);
		$(window).load(function() {
			$('#loading').fadeOut(1000, 0);
			$('#wrapper').fadeTo(1500,1,
				function(){
					$('body,html').css('background', 'url("http://rurumisaki.com/wp-content/themes/ruru/images/bgTopfix01_mini.jpg") repeat top center');
					$('#wrapper').css('background', 'none');
					if(!Modernizr.csstransitions){
						$('nav').css('bottom', '-70%').animate({'bottom' : '0'}, 3000, 'easeInOutCubic');
						$('#Stage_top_1_treeL, #Stage_top_1_treeR').css('bottom', '-400%').animate({'bottom' : '0'}, 3000, 'easeInOutCubic');
						$('#bgstar01inner').css('top', '23%').animate({'top' : '8%', 'opacity' : 1}, 3000, 'easeInOutCubic');
						$('#bgstar02inner').css('top', '18%').animate({'top' : '8%', 'opacity' : 1}, 3000, 'easeInOutCubic',function(){
							$('#Stage_top_1_RURU_u2')
											.delay(500).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_r1')
											.delay(580).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_r2')
											.delay(750).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_u1')
											.delay(910).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							doorTime = setTimeout(function() {
								doorClose.fadeTo(1000, 0);
							}, 2000);
							doorTime2 = setTimeout(function() {
								doorClose.fadeTo(1000, 1,function(){
									$("html, body").css('overflow-y', 'visible');
								});
							}, 4000);
						});
					}else{
						$('nav, #bgstar01inner, #bgstar02inner, #Stage_top_1_treeL.init, #Stage_top_1_treeR.init').removeClass('init');
						$('#bgstar01inner,#bgstar02inner').fadeTo(2000, 1,function(){
							$('#Stage_top_1_RURU_u2')
											.delay(1500).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_r1')
											.delay(1580).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_r2')
											.delay(1750).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							$('#Stage_top_1_RURU_u1')
											.delay(1910).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
							doorTime = setTimeout(function() {
								doorClose.fadeTo(1000, 0);
							}, 3000);
							doorTime2 = setTimeout(function() {
								doorClose.fadeTo(1000, 1,function(){
									$("html, body").css('overflow-y', 'visible');
								});
							}, 5000);
						});
					}
					
				});
		});
		
		doorClose.hover(
			function() {
				$(this).stop(true, false).fadeTo(500, 0);
			},
			function() {
				$(this).stop(true, false).fadeTo(500, 1);
			}
		);

		//contact
		contactRange.mouseover(function() {
				$('#Stage_top_1_c1')
							.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_o1')
							.stop(true, false).delay(50).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_n')
							.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_t1')
							.stop(true, false).delay(150).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_a')
							.stop(true, false).delay(200).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_c2')
							.stop(true, false).delay(250).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_top_1_t2')
							.stop(true, false).delay(300).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});

		//profile
		profileRange.mouseover(function() {
				$('#Stage_p')
							.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_r')
							.stop(true, false).delay(50).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_o')
							.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_f')
							.stop(true, false).delay(150).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_i')
							.stop(true, false).delay(200).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_l')
							.stop(true, false).delay(250).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_e')
							.stop(true, false).delay(300).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});
		blogRange.mouseover(function() {
				$('#Stage_b')
							.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_l_blog')
							.stop(true, false).delay(50).animate({'bottom' : '25px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_o_blog')
							.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				$('#Stage_g')
							.stop(true, false).delay(150).animate({'bottom' : '25px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});
		/*$(window).bind('load resize', function() {
			if (window.matchMedia("(max-width:979px)").matches){
				$('#homeNav').css({
					'left' : "-325px",
					'margin-left' : '50%'
				});
			}else{
				$('#homeNav').css({
					'left' : '0',
					'margin-left' : '0'
				});
			}
		});*/
	}

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

		$('#content > input[name="slider"]:radio').change(function() {  
			var radioId = $(this).attr("id");
			var result = radioId.match(/\-?[0-9]*\.?[0-9]+/g);
			$("#overflow div.inner").animate({'marginLeft' : '-' + (result - 1) + '00%'}, 800, "easeInOutCubic");
		});
		//bird
		bird1 = $('#nav6 a.bird2');
		bird2 = $('#nav7 a.bird');
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
		
		//works
		var works = $('#nav4');
		var worksNav6 = $('#nav6');
		var worksNav7 = $('#nav7');
		var worksNav8 = $('#nav8');
		worksNav6Pos = new Array('-130%', '-160%');
		worksNav7Pos = new Array('-220%', '-250%');
		iA = 0;
		iB = 0;
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
			timerWorksNav7 = setInterval(birdMoveNav7,2200);
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
			}, 2000, "easeInOutCubic");
			iB++;
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
			worksNav7.stop(true, false).animate({
				bottom : '-220%',
				right : '10%'
			}, 700, "easeOutCubic")
			.animate({
				bottom : '-250%'
			}, 1500, "easeInOutCubic");
		},function(){
			clearInterval(timerWorksNav6);
			clearInterval(timerWorksNav7);
			iA = 0;
			iB = 0;
			worksNav6.stop(true, false).animate({
				bottom : '120%',
				left : '200%'
			}, 600, "easeOutCubic");
			worksNav7.stop(true, false).animate({
				bottom : '100%',
				right : '500%'
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
			/*if (timer !== false) {
				clearTimeout(timer);
			}*/
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
		$(document).on('click','#Stage_profileRange',function(){
			proActive();
		});
		proBtn.click(function() {
			proActive();
		});
		clBtnP.click(function() {

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
	if (!(DetectTierIphone() || DetectTierTablet())) {
		$("link[media]").remove();
		$("#menuIcon").remove();
		var bg = $('#bg');
		var bg2 = $('#bg2');
		var glNav = $('#gNav');
		var glNavInner = $('#gNavInner');
		var bgHeader = $('#bgHeader');
		var bgHeaderInner = $('#bgHeaderInner');
		var footer = $('footer');
		var footerInnerWrapper = $('#footerInnerWrapper');
		var footerInnerPic = $('#footerInnerPic');
		var footerInnerPic2 = $('#footerInnerPic2');
		var footerInnerPic3 = $('#footerInnerPic3');
		var footerInnerYard = $('#footerInnerYard');
		var footerInnerYard2 = $('#footerInnerYard2');
		var footerInnerNeedle = $('#footerInnerNeedle');
		var footerInnerNeedle2 = $('#footerInnerNeedle2');
		calc_width = function() {
			wsz = $(window).width();
			bg.css('width', Math.ceil(wsz + wsz / 2 * 0.010));
			bg2.css('width', Math.ceil(wsz + wsz / 2 * 0.005));
			glNav.css('width', Math.ceil(wsz + wsz / 2 * 0.06));
			glNavInner.css('marginLeft', Math.ceil((wsz / 2) * 0.06 * mx));
			bgHeader.css('width', Math.ceil(wsz + wsz / 2 * 0.01));
			bgHeaderInner.css('marginLeft', Math.ceil((wsz / 2) * 0.01 * mx));
			footer.css('width', Math.ceil(wsz + wsz / 2 * 0.035));
			footerInnerWrapper.css('width', Math.ceil(wsz + wsz / 2 * 0.035)).css('marginLeft', Math.ceil((wsz / 2) * 0.035 * mx));
			footerInnerPic.css('marginLeft', Math.ceil((wsz / 2) * 0.01 * mx));
			footerInnerPic2.css('marginLeft', Math.ceil((wsz / 2) * 0.02 * mx));
			footerInnerPic3.css('marginLeft', Math.ceil((wsz / 2) * 0.035 * mx));
			footerInnerYard.css('marginLeft', Math.ceil((wsz / 2) * 0.02 * mx));
			footerInnerYard2.css('marginLeft', Math.ceil((wsz / 2) * 0.035 * mx));
			footerInnerNeedle.css('marginLeft', Math.ceil((wsz / 2) * 0.02 * mx));
			footerInnerNeedle2.css('marginLeft', Math.ceil((wsz / 2) * 0.035 * mx));
		};
		calc_width();
		//resize interaction
		var resizeTimer = null;
		$(window).bind('resize',function() {
			if(0 < $("#header div.hover").size()){
				$("#header div#gNav").removeClass("hover");
			}
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				calc_width();
			}, 100);
		});
		function MML(element, by, cx) {
			return element.css('marginLeft', Math.ceil(cx * by));
		}
		function MMR(element, by, cx) {
			return element.css('marginRight', Math.ceil(cx * by * -1));
		}
		//mouse move interaction
		if(0 < $("#footerInnerYard").size()){
			var cloud01 = $('#cloud01');
			var cloud02 = $('#cloud02');
			var bird01 = $('#bird01');
			var bird02 = $('#bird02');
			var sRing = $('#sRing');
			var pool = $('#pool');
			var controls = $('#controls');
			var controls2 = $('#controls2');
			$('body').mousemove(function(e) {
				var dx = e.clientX;
				var cx = wsz / 2 - dx;
				MML(cloud01, 0.005, cx);
				MML(glNav, 0.06, cx);
				MML(footerInnerYard, 0.02, cx);
				MML(footerInnerYard2, 0.035, cx);
				MML(sRing, 0.0175, cx);
				MML(pool, 0.01, cx);
				MML(controls, 0.034, cx);
				MMR(cloud02, 0.0025, cx);
				MMR(bird01, 0.005, cx);
				MMR(bird02, 0.004, cx);
				MMR(controls2, 0.034, cx);
			});
		}else if(0 < $("#footerInnerNeedle").size()){
			var cloud01 = $('#cloud01');
			var cloud02 = $('#cloud02');
			var bird01 = $('#bird01');
			var bird02 = $('#bird02');
			var controls = $('#controls');
			var controls2 = $('#controls2');
			$('body').mousemove(function(e) {
			var dx = e.clientX;
			var cx = wsz / 2 - dx;
				MML(cloud01, 0.005, cx);
				MMR(cloud02, 0.0025, cx);
				MMR(bird01, 0.005, cx);
				MMR(bird02, 0.004, cx);
				MML(glNav, 0.06, cx);
				MML(footerInnerNeedle, 0.02, cx);
				MML(footerInnerNeedle2, 0.035, cx);
				MML(controls, 0.034, cx);
				MMR(controls2, 0.034, cx);
			});
		}else if(0 < $("#bgKtool").size()){
			var ajaxSending = false;
			$("#navSketch a").live("click", function() {
				if(!ajaxSending){
					ajaxSending = true;
					$("#overflow li.imgSelection").fadeOut(600,0);
					$.ajax({
						type: 'post',
						url: 'http://rurumisaki.com/wp-content/themes/ruru/sketch.php',
						data: {},
						success: function(data) {
							$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navSketch").remove();
							$("#mainWrapper").replaceWith(data);
							timerImgSelection = setTimeout(function(){
								$("#overflow li.imgSelection").removeClass("off");
							},100);
							$("#content").prepend('<div id="navPainting"><a href="#" class="hide-text">painting</a></div>');
							controls = $('#controls');
							controls2 = $('#controls2');
							imgSelects = $('#overfow img');
							Wheader = $('#mainWrapper');
							ajaxSending = false;
						}
					});
				} else {
					//何もしない
				}
				return false;
			});
			$("#navPainting a").live("click", function() {
				if(!ajaxSending){
					ajaxSending = true;
					$("#overflow li.imgSelection").fadeOut(600,0);
					$.ajax({
						type: 'post',
						url: 'http://rurumisaki.com/wp-content/themes/ruru/painting.php',
						data: {},
						success: function(data) {
							$("#content > input, #socialBoxAlt, #active, #controls, #controls2, #navPainting").remove();
							$("#mainWrapper").replaceWith(data);
							timerImgSelection = setTimeout(function(){
								$("#overflow li.imgSelection").removeClass("off");
							},100);
							$("#content").prepend('<div id="navSketch"><a href="#" class="hide-text">sketch</a></div>');
							controls = $('#controls');
							controls2 = $('#controls2');
							imgSelects = $('#overfow img');
							Wheader = $('#mainWrapper');
							ajaxSending = false;
						}
					});
				} else {
					//何もしない
				}
				return false;
			});
			var bgKtool = $('#bgKtool');
			var bgTable = $('#bgTable');
			var controls = $('#controls');
			var controls2 = $('#controls2');
			$('body').live("mousemove",function(e) {
				var dx = e.clientX;
				var cx = wsz / 2 - dx;
				bg.css('marginLeft', Math.ceil(cx * 0.010)),
				bg2.css('marginLeft', Math.ceil(cx * 0.005)),
				glNav.css('marginLeft', Math.ceil(cx * 0.06)),
				footerInnerPic.css('marginLeft', Math.ceil(cx * 0.01)),
				footerInnerPic2.css('marginLeft', Math.ceil(cx * 0.02)),
				footerInnerPic3.css('marginLeft', Math.ceil(cx * 0.035)),
				bgKtool.css('marginLeft', Math.ceil(cx * 0.015)),
				bgTable.css('marginLeft', Math.ceil(cx * 0.02)),
				controls.css('marginLeft', Math.ceil(cx * 0.034)),
				controls2.css('marginRight', Math.ceil(cx * 0.034 * mx));
			});
		}else {
			$('body').mousemove(function(e) {
				var dx = e.clientX;
				var cx = wsz / 2 - dx;
				$('#bgHeader').css('marginLeft', Math.ceil(cx * 0.01));
				$('#bgstar01inner').css('marginLeft', Math.ceil(cx * 0.005));
				$('#bgstar02inner').css('marginLeft', Math.ceil(cx * 0.003));
				$('#Stage_top_1_treeR').css('marginRight', Math.ceil(cx * 0.034 * mx));
				$('#Stage_top_1_treeL').css('marginLeft', Math.ceil(cx * 0.034));
				$('#Stage_top_1').css('marginLeft', Math.ceil(cx * 0.01));
			});
		}
	}

				//navigation
	var Wcontact = $('#content > article.contact');
	var WcontactBird = $('#content > article.contact p.bird3')
	var Wprofile = $('#content > article.profile');
	var WprofileA = $('#contactLink');
	var WprofileBird = $('#content > article.profile p.bird3');
	var WcloseBtn = $('div.closeBtn');
	var Wheader = $('#mainWrapper');
	var WheadDefH = 0;
	var WliNav2 = $('li#nav2');
	var WliNav5 = $('li#nav5');
	
	WliNav2.click(function() {
		Wprofile.addClass('profileActive'),
		profileHeight = Wprofile.height();
		if((window.matchMedia("(max-width:639px)").matches && DetectTierIphone())){
			if(!Modernizr.csstransitions){
				Wheader.animate({'marginBottom' : WheadDefH + profileHeight/2 + 'px'}, 600, 'easeInOutQuad');
			} else {
				Wheader.css('marginBottom', WheadDefH + profileHeight/2 + 'px');
			}
		}else {
			if(!Modernizr.csstransitions){
				Wheader.animate({'marginBottom' : WheadDefH + profileHeight/3 + 'px'}, 600, 'easeInOutQuad');
			} else {
				Wheader.css('marginBottom', WheadDefH + profileHeight/3 + 'px');
			}
		}
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
		if(0 < $('#homeNav').size()){
			Tcontact.addClass('contactActive'),
			Tprofile.addClass('end'),
			TprofileBird.addClass('active'),
			TcontactBird.addClass('active'),
			timer = setTimeout(function() {
				Tprofile.removeClass('profileActive end')
			}, 500);
			timer = setTimeout(function() {
				TprofileBird.removeClass('active')
			}, 500);
			timer = setTimeout(function() {
				TcontactBird.removeClass('active')
			}, 1500);
		}else{
			Wcontact.addClass('contactActive'),
			contactHeight = Wcontact.height();
			if((window.matchMedia("(max-width:639px)").matches && DetectTierIphone())){
				if(!Modernizr.csstransitions){
					Wheader.animate({'marginBottom' : WheadDefH + contactHeight/1.5 + 'px'}, 600, 'easeInOutQuad');
				} else {
					Wheader.css('marginBottom', WheadDefH + contactHeight/1.5 + 'px');
				}
			}else {
				if(!Modernizr.csstransitions){
					Wheader.animate({'marginBottom' : WheadDefH + contactHeight/3 + 'px'}, 600, 'easeInOutQuad');
				} else {
					Wheader.css('marginBottom', WheadDefH + contactHeight/3 + 'px');
				}
			}
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
		Wcontact.addClass('contactActive'),
		contactHeight = Wcontact.height();
		if((window.matchMedia("(max-width:639px)").matches && DetectTierIphone())){
			if(!Modernizr.csstransitions){
				Wheader.animate({'marginBottom' : WheadDefH + contactHeight/1.5 + 'px'}, 600, 'easeInOutQuad');
			} else {
				Wheader.css('marginBottom', WheadDefH + contactHeight/1.5 + 'px');
			}
		}else {
			if(!Modernizr.csstransitions){
				Wheader.animate({'marginBottom' : WheadDefH + contactHeight/3 + 'px'}, 600, 'easeInOutQuad');
			} else {
				Wheader.css('marginBottom', WheadDefH + contactHeight/3 + 'px');
			}
		}
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
		return false;
	});
	WcloseBtn.click(function() {
		if(0 < $('#homeNav').size()){
			if(Tcontact.hasClass('contactActive')){
				Tcontact.addClass('end'),
				TcontactBird.addClass('active'),
				timer = setTimeout(function() {
					Tcontact.removeClass('contactActive end')
				}, 500);
				timer = setTimeout(function() {
					WcontactBird.removeClass('active')
				}, 500);
			}
			if(Tprofile.hasClass('profileActive')){
				Tprofile.addClass('end'),
				TprofileBird.addClass('active'),
				timer = setTimeout(function() {
					Tprofile.removeClass('profileActive end')
				}, 500);
				timer = setTimeout(function() {
					TprofileBird.removeClass('active')
				}, 500);
			}
		}else{
			if(!Modernizr.csstransitions){
				Wheader.animate({'marginBottom' : WheadDefH + 'px'}, 600, 'easeOutQuad');
			}else{
				Wheader.css('marginBottom', WheadDefH + 'px');
			}
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
		}
		return false;
	});
	/*WliNav2.click(function() {
		Wcontact.addClass('end'),
		WcontactBird.addClass('active'),
		timer = setTimeout(function() {
			Wcontact.removeClass('contactActive end')
		}, 500);
		timer = setTimeout(function() {
			WcontactBird.removeClass('active')
		}, 500);
		return false;
	});
	*/
	/*WcloseBtn.click(function() {
		Wprofile.addClass('end'),
		WprofileBird.addClass('active'),
		timer = setTimeout(function() {
			Wprofile.removeClass('profileActive end')
		}, 500);
		timer = setTimeout(function() {
			WprofileBird.removeClass('active')
		}, 500);
		return false;
	});
	*/
	/*WliNav5.click(function() {
		Wprofile.addClass('end'),
		WprofileBird.addClass('active'),
		timer = setTimeout(function() {
			Wprofile.removeClass('profileActive end')
		}, 500);
		timer = setTimeout(function() {
			WprofileBird.removeClass('active')
		}, 500);
		return false;
	});*/
	/*WprofileA.click(function() {
		Wprofile.addClass('end'),
		WprofileBird.addClass('active'),
		timer = setTimeout(function() {
			Wprofile.removeClass('profileActive end')
		}, 500);
		timer = setTimeout(function() {
			WprofileBird.removeClass('active')
		}, 500);
		return false;
	});*/
	var Tcontact = $('#wrapper > article.contact');
	var TcontactBird = $('#wrapper > article.contact p.bird3')
	var Tprofile = $('#wrapper > article.profile');
	var TprofileBird = $('#wrapper > article.profile p.bird3');
	$('#Stage_top_1_contactRange').live('click',function() {
		Tprofile.addClass('end'),
		TprofileBird.addClass('active'),
		timer = setTimeout(function() {
			Tprofile.removeClass('profileActive end')
		}, 500);
		timer = setTimeout(function() {
			TprofileBird.removeClass('active')
		}, 500);
		return false;
	});
	$('img#Stage_top_1_contactRange').live('click',function() {
		Tcontact.addClass('contactActive'),
		TcontactBird.addClass('active'),
		Tprofile.removeClass('profileActive'),
		timer = setTimeout(function() {
			TcontactBird.removeClass('active')
		}, 1500);
		return false;
	});
	$('img#Stage_profileRange').live('click',function() {
		Tprofile.addClass('profileActive'),
		TprofileBird.addClass('active'),
		Tcontact.removeClass('contactActive'),
		timer = setTimeout(function() {
			TprofileBird.removeClass('active')
		}, 1500);
		return false;
	});
	/*WliNav5.click(function() {
		$('#content > article.contact').addClass("contactActive");
	});*/
	//slider
	
	var columnSize = $(".img3column").size();
	if(0 < $("div.wpcf7-mail-sent-ok").size()){
		Wcontact.addClass('contactActive'),
		$('#formInner').css('display', 'none');
	}
	//fadeInTransition
	$('li.imgSelection').css('opacity', 0);
	$('li.imgSelection').fadeTo(800, 1);
});
