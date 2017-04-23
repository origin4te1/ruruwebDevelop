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
		$('#wrapper').css('display', 'none');
		var $ds = $(document).height();// ページの高さを取得
		var $speed = 1500;//スクロールのスピードを設定（ミリ秒）
		// logo
		var r1 = $('#r1_mob');
		var u1 = $('#u1_mob');
		var r2 = $('#r2_mob');
		var u2 = $('#u2_mob');
		var doorOpen = $('#doorOpen_mob');
		
		u2.css('bottom', '400%');
		r1.css('bottom', '400%');
		r2.css('bottom', '400%');
		u1.css('bottom', '400%');
		$('#navWrapper img').imgLoaded(function(){
			$('#wrapper').css('opacity', 0);
			$('#loading').fadeOut(1000, 0);
			$('#wrapper').fadeTo(1000,1);
			$("html,body").stop().delay(500).animate({"scrollTop":$ds},$speed, 'easeOutCubic');
			//Logo
			u2.delay(2500).animate({'bottom' : '0'}, 1000, 'easeOutBounce'),
			r1.delay(2580).animate({'bottom' : '0'}, 1000, 'easeOutBounce'),
			r2.delay(2750).animate({'bottom' : '0'}, 1000, 'easeOutBounce'),
			u1.delay(2910).animate({'bottom' : '0'}, 1000, 'easeOutBounce');
			doorTime = setTimeout(function() {
				doorOpen.fadeTo(1000, 1);
			}, 4000);
			doorTime2 = setTimeout(function() {
				doorOpen.fadeTo(1000, 0);
			}, 6000);
		});

		var contactRange = $('#range_contact_mob');
		var profileRange = $('#range_profile_mob');
		var blogRange = $('#range_blog_mob');
		var contact = $('#wrapper > article.contact');
		var contactBird = $('#wrapper > article.contact p.bird3')
		var profile = $('#wrapper > article.profile');
		var profileA = $('#contactLink');
		var profileBird = $('#wrapper > article.profile p.bird3');
		var closeBtn = $('div.closeBtn');
		var wrap = $('#wrapper');
		var wrapDefMih = parseInt($('#wrapper').css('minHeight'));
		// contact
		var c = $('#c1_mob');
		var oContact = $('#o_contact_mob');
		var n = $('#n_mob');
		var t1 = $('#t1_mob');
		var a =$('#a_mob');
		var c2 = $('#c2_mob');
		var t2 = $('#t2_mob');
		// profile
		var p = $('#p_mob');
		var r = $('#r_mob');
		var o = $('#o_mob');
		var f = $('#f_mob');
		var i = $('#i_mob');
		var l = $('#l_mob');
		var e = $('#e_mob');
		// blog
		var b = $('#b_mob2');
		var lBlog = $('#l_blog_mob');
		var oBlog = $('#o_blog_mob');
		var g = $('#g_mob');
		//
		
		

		doorOpen.hover(
			function() {
				$(this).stop(true, false).fadeTo(500, 1);
			},
			function() {
				$(this).stop(true, false).fadeTo(500, 0);
			}
		);

		//contact
		contactRange.mouseover(function() {
				c.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				oContact.stop(true, false).delay(50).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
								.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				n.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				t1.stop(true, false).delay(150).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				a.stop(true, false).delay(200).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				c2.stop(true, false).delay(250).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				t2.stop(true, false).delay(300).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});

		//profile
		profileRange.mouseover(function() {
				p.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				r.stop(true, false).delay(50).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				o.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				f.stop(true, false).delay(150).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				i.stop(true, false).delay(200).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				l.stop(true, false).delay(250).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				e.stop(true, false).delay(300).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});

		//blog
		blogRange.mouseover(function() {
				b.stop(true, false).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				lBlog.stop(true, false).delay(50).animate({'bottom' : '25px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				oBlog.stop(true, false).delay(100).animate({'bottom' : '20px'}, 200, 'easeOutCubic')
							.animate({'bottom' : '0'}, 300, 'easeOutBounce');
				g.stop(true, false).delay(150).animate({'bottom' : '25px'}, 200, 'easeOutCubic')
					.animate({'bottom' : '0'}, 300, 'easeOutBounce');
		});
		//profile and contact
		profileRange.click(function() {
			profile.addClass('profileActive'),
			profileHeight = profile.height(),
			wrap.css('minHeight', wrapDefMih + profileHeight + 'px'),
			profileBird.addClass('active');
			timera = setTimeout(function() {
			profileBird.removeClass('active');
			}, 1500);
			return false;
		});
		contactRange.click(function() {
			contact.addClass('contactActive'),
			contactHeight = contact.height(),
			wrap.css('minHeight', wrapDefMih + contactHeight + 'px'),
			contactBird.addClass('active');
			timerb = setTimeout(function() {
				contactBird.removeClass('active');
			}, 1500);
			return false;
		});
		profileA.click(function() {
			contact.addClass('contactActive'),
			contactHeight = contact.height(),
			wrap.css('minHeight', wrapDefMih + contactHeight + 'px'),
			contactBird.addClass('active');
			timerb = setTimeout(function() {
				contactBird.removeClass('active');
			}, 1500);
			return false;
		});
		closeBtn.click(function() {
			wrap.css('minHeight', wrapDefMih + 'px');
			contact.addClass('end'),
			contactBird.addClass('active');
			timerc = setTimeout(function() {
				contact.removeClass('contactActive end'),
				contactBird.removeClass('active');
			}, 500);
			timerd = setTimeout(function() {
				profile.removeClass('profileActive end'),
				profileBird.removeClass('active');
			}, 500);
			profile.addClass('end'),
			profileBird.addClass('active');
			return false;
		});
		profileRange.click(function() {
			contact.addClass('end'),
			contactBird.addClass('active');
			timerc = setTimeout(function() {
				contact.removeClass('contactActive end'),
				contactBird.removeClass('active');
			}, 500);
			return false;
		});
		contactRange.click(function() {
			profile.addClass('end'),
			profileBird.addClass('active');
			timerd = setTimeout(function() {
				profile.removeClass('profileActive end'),
				profileBird.removeClass('active');
			}, 500);
			return false;
		});
		profileA.click(function() {
			profile.addClass('end'),
			profileBird.addClass('active');
			timerd = setTimeout(function() {
				profile.removeClass('profileActive end'),
				profileBird.removeClass('active');
			}, 500);
			return false;
		});
});