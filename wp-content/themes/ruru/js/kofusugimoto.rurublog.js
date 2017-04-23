$(function() {
			function loading(){
				document.getElementById("loading").style.display= "none";
				document.getElementById("wrapper").style.display= "block";
			}
			onload=loading;
			var mx = -1;
			var calc_width = function() {
				wsz = $(window).width();
				$('#bg').css('width', wsz + wsz / 2 * 0.010);
				$('#bg2').css('width', wsz + wsz / 2 * 0.005);
				$('#gNav').css('width', wsz + wsz / 2 * 0.06);
				$('#gNavInner').css('marginLeft', (wsz / 2) * 0.06 * mx);
				$('footer').css('width', wsz + wsz / 2 * 0.035);
				$('#footerInnerWrapper').css('width', wsz + wsz / 2 * 0.035);
				$('#footerInnerWrapper').css('marginLeft', (wsz / 2) * 0.035 * mx);
				$('#footerInnerYard').css('marginLeft', (wsz / 2) * 0.02 * mx);
				$('#footerInnerYard2').css('marginLeft', (wsz / 2) * 0.035 * mx);
			};
			//initial processing
/*			var div = document.createElement("div");
			var content = $("#content");
			$(div).load($("li#nav6 a").attr("href")+" #content",function(){
				content.html($("#content", div).html());
				calc_width();
				});
			$("li#nav6").addClass("selected");
			$("li#nav4 ul li a").live("click",function() {
				$("#content").html('<p class="loading"><img src="images/loading.gif" width="76" height="76"></p>');
				$("#content").data("file",$(this).attr("href"));
				$(div).load($("#content").data("file")+" #content",function() {
					content.html($("#content", div).html());
					calc_width();
				});
				$("li#nav6").removeClass("selected");
				$(this).closest("li").addClass("selected");
				return false;
			});*/
			//resize interaction
			var timer = false;
			$(window).resize(function() {
				$("#header nav").removeClass("hover");
				var rsz = true;
				if (timer !== false) {
					clearTimeout(timer);
				}
				timer = setTimeout(function() {
					calc_width();
				}, 100);
			});
			
			//mouse move interaction
			$('body').mousemove(function(e) {
				var dx = e.clientX;
				var cx = wsz / 2 - dx;
				$('#bg').css('marginLeft', cx * 0.010);
				$('#bg2').css('marginLeft', cx * 0.005);
				$('#cloud01').css('marginLeft', cx * 0.005);
				$('#cloud02').css('marginRight', cx * 0.0025 * mx);
				$('#bird01').css('marginRight', cx * 0.005 * mx);
				$('#bird02').css('marginRight', cx * 0.004 * mx);
				$('#gNav').css('marginLeft', cx * 0.06);
				$('#footerInnerYard').css('marginLeft', cx * 0.02);
				$('#footerInnerYard2').css('marginLeft', cx * 0.035);
				$('#sRing').css('marginLeft', cx * 0.035 * 0.5);
				$('#pool').css('marginLeft', cx * 0.02 * 0.5);
				$('#bgKtool').css('marginLeft', cx * 0.015);
				$('#bgTable').css('marginRight', cx * 0.02 * mx);
				$('#controls').css('marginLeft', cx * 0.034);
				$('#controls2').css('marginRight', cx * 0.034 * mx);
			});
			
			//slider 
			var columnSize = $(".img3column").size();
			
			//blur interaction
			/*$(".blurBtn2").live("mouseover",function(){
				$("#mainWrapper, #bg, #bg2").addClass("blur2");
			}).live("mouseout",function(){
				$("#mainWrapper, #bg, #bg2").removeClass("blur2");
			});
			$(".blurBtn1").live("mouseover",function(){
				$("#mainWrapper, #bg, #bg2").addClass("blur1");
			}).live("mouseout",function(){
				$("#mainWrapper, #bg, #bg2").removeClass("blur1");
			});*/
			//navigation
			if (timer !== false) {
					clearTimeout(timer);
				}
				timer = setTimeout(function() {
					$("#header nav").addClass("hover");
				}, 500);
				timer = setTimeout(function() {
					$("#header nav").removeClass("hover");
				}, 2500);
			// Ajax
			
		});
