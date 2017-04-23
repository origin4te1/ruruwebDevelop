<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width,minimal-scale=1,maximum-scale=2">
<title><?php bloginfo('name'); ?><?php wp_title('|'); ?></title>
<link href="<?php echo get_template_directory_uri(); ?>/css/reset.css" rel="stylesheet" type="text/css">
<?php if(is_mobile()):?>
	<link href="<?php echo get_template_directory_uri(); ?>/css/top_mob.css" rel="stylesheet" type="text/css">
	<script src="<?php echo get_template_directory_uri(); ?>/js/initial.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.2.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/ios-orientationchange-fix.js"></script>
	<?php wp_head(); ?>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.7.1.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/kofusugimoto.ruru.mob.js"></script>
<?php else: ?>
	<link href="<?php echo get_template_directory_uri(); ?>/css/base.css" rel="stylesheet" type="text/css">
	<link href="<?php echo get_template_directory_uri(); ?>/css/home.css" rel="stylesheet" type="text/css">
	<link href="<?php echo get_template_directory_uri(); ?>/css/home-m.css" res="stylesheet" type="text/css" media="only screen and (min-width:600px) and (max-width:979px)">
	<link href="<?php echo get_template_directory_uri(); ?>/css/home-s.css" res="stylesheet" type="text/css" media="only screen and (max-width:599px)">
	<script src="<?php echo get_template_directory_uri(); ?>/js/initial.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/ios-orientationchange-fix.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/mdetect.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/matchMedia.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.2.js"></script>
	<?php wp_head(); ?>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.7.1.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/kofusugimoto.ruru.js"></script>
<?php endif; ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41244033-1', 'rurumisaki.com');
  ga('send', 'pageview');

</script>
</head>
<body>
<?php if(is_mobile()):?>
<div id="loading" class="hide-text">loading</div>
	<div id="wrapper">
		<div id="bgHeader">
		</div>
		<?php require_once 'profile_contact.php';?>
		<div id="navWrapper">
			<nav>
				<img id="topBg_mob" src="<?php echo get_template_directory_uri(); ?>/images/topBg_mob.png">
				<img id="r1_mob" src="<?php echo get_template_directory_uri(); ?>/images/r1_mob.png" width="89" height="533">
				<img id="u1_mob" src="<?php echo get_template_directory_uri(); ?>/images/u1_mob.png" width="81" height="505">
				<img id="r2_mob" src="<?php echo get_template_directory_uri(); ?>/images/r2_mob.png" width="94" height="533">
				<img id="u2_mob" src="<?php echo get_template_directory_uri(); ?>/images/u2_mob.png" width="78" height="498">
				<a href="http://rurumisaki.com/picture"><img id="doorOpen_mob" src="<?php echo get_template_directory_uri(); ?>/images/doorOpen_mob.png"></a>
				<img id="p_mob" src="<?php echo get_template_directory_uri(); ?>/images/p_mob.png" width="31" height="489">
				<img id="r_mob" src="<?php echo get_template_directory_uri(); ?>/images/r_mob.png" width="29" height="487">
				<img id="o_mob" src="<?php echo get_template_directory_uri(); ?>/images/o_mob.png" width="33" height="486">
				<img id="f_mob" src="<?php echo get_template_directory_uri(); ?>/images/f_mob.png" width="35" height="452">
				<img id="i_mob" src="<?php echo get_template_directory_uri(); ?>/images/i_mob.png" width="21" height="457">
				<img id="l_mob" src="<?php echo get_template_directory_uri(); ?>/images/l_mob.png" width="26" height="455">
				<img id="e_mob" src="<?php echo get_template_directory_uri(); ?>/images/e_mob.png" width="40" height="448">
				<a href="#"><img id="range_profile_mob" src="<?php echo get_template_directory_uri(); ?>/images/range_profile_mob.png" width="98" height="489"></a>
				<img id="mask_profile_mob" src="<?php echo get_template_directory_uri(); ?>/images/mask_profile_mob.png" width="98" height="403">
				<img id="b_mob2" src="<?php echo get_template_directory_uri(); ?>/images/b_mob.png" width="38" height="331">
				<img id="l_blog_mob" src="<?php echo get_template_directory_uri(); ?>/images/l_blog_mob.png" width="34" height="318">
				<img id="o_blog_mob" src="<?php echo get_template_directory_uri(); ?>/images/o_blog_mob.png" width="35" height="228">
				<img id="g_mob" src="<?php echo get_template_directory_uri(); ?>/images/g_mob.png" width="42" height="281">
				<a href="http://rurumisaki.com/blog"><img id="range_blog_mob" src="<?php echo get_template_directory_uri(); ?>/images/range_blog_mob.png" width="69" height="331"></a>
				<img id="mask_blog_mob" src="<?php echo get_template_directory_uri(); ?>/images/mask_blog_mob.png" width="69" height="232">
				<img id="c1_mob" src="<?php echo get_template_directory_uri(); ?>/images/c1_mob.png" width="26" height="83">
				<img id="o_contact_mob" src="<?php echo get_template_directory_uri(); ?>/images/o_contact_mob.png" width="28" height="80">
				<img id="n_mob" src="<?php echo get_template_directory_uri(); ?>/images/n_mob.png" width="29" height="84">
				<img id="t1_mob" src="<?php echo get_template_directory_uri(); ?>/images/t1_mob.png" width="24" height="80">
				<img id="a_mob" src="<?php echo get_template_directory_uri(); ?>/images/a_mob.png" width="29" height="81">
				<img id="c2_mob" src="<?php echo get_template_directory_uri(); ?>/images/c2_mob.png" width="28" height="80">
				<img id="t2_mob" src="<?php echo get_template_directory_uri(); ?>/images/t2_mob.png" width="25" height="84">
				<a href="#"><img id="range_contact_mob" src="<?php echo get_template_directory_uri(); ?>/images/range_contact_mob.png" width="161" height="84"></a>
				<img id="mask_contact_mob" src="<?php echo get_template_directory_uri(); ?>/images/mask_contact_mob.png" width="161" height="64">
			</nav>
		</div>
	</div>
	<?php wp_footer(); ?>
<?php else: ?>
<div id="loading" class="hide-text">loading</div>
	<div id="wrapper">
		<div id="bgstar01">
			<div id="bgstar01inner" class="init"><img src="<?php echo get_template_directory_uri(); ?>/images/star01.png" width="1752" height="694"></div>
		</div>
		<div id="bgstar02">
			<div id="bgstar02inner" class="init"><img src="<?php echo get_template_directory_uri(); ?>/images/star02.png" width="1686" height="714"></div>
		</div>
		<div id="bgHeader">
			<div id="bgHeaderInner"></div>
		</div>
		<?php require_once 'profile_contact.php';?>
		<nav id="homeNav" class="init">
			<div id="Stage" class="top">
				<div id="Stage_top_1" class="top">
					<img id="Stage_top_1_bgTopGround" class="Stage_top_1_bgTopGround_id" alt="House and tree" src="<?php echo get_template_directory_uri(); ?>/images/bgTopGround.png"></img>
					<img id="Stage_p" class="Stage_p_id" alt="p" src="<?php echo get_template_directory_uri(); ?>/images/p.png">
					<img id="Stage_r" class="Stage_r_id" alt="r" src="<?php echo get_template_directory_uri(); ?>/images/r.png">
					<img id="Stage_o" class="Stage_o_id" alt="o" src="<?php echo get_template_directory_uri(); ?>/images/o.png">
					<img id="Stage_f" class="Stage_f_id" alt="f" src="<?php echo get_template_directory_uri(); ?>/images/f.png">
					<img id="Stage_i" class="Stage_i_id" alt="i" src="<?php echo get_template_directory_uri(); ?>/images/i.png">
					<img id="Stage_l" class="Stage_l_id" alt="l" src="<?php echo get_template_directory_uri(); ?>/images/l.png">
					<img id="Stage_e" class="Stage_e_id" alt="e" src="<?php echo get_template_directory_uri(); ?>/images/e.png">
					<a href="#profile"><img id="Stage_profileRange" class="Stage_profileRange_id" src="<?php echo get_template_directory_uri(); ?>/images/profileRange.png"></a>
					<img id="Stage_top_1_profileMask" class="Stage_top_1_profileMask_id" src="<?php echo get_template_directory_uri(); ?>/images/profileMask.png">
					<img id="Stage_b" class="Stage_b_id" alt="B" src="<?php echo get_template_directory_uri(); ?>/images/b.png">
					<img id="Stage_l_blog" class="Stage_l_blog_id" alt="l" src="<?php echo get_template_directory_uri(); ?>/images/l_blog.png">
					<img id="Stage_o_blog" class="Stage_o_blog_id" alt="o" src="<?php echo get_template_directory_uri(); ?>/images/o_blog.png">
					<img id="Stage_g" class="Stage_g_id" alt="g" src="<?php echo get_template_directory_uri(); ?>/images/g.png">
					<a href="http://rurumisaki.com/blog"><img id="Stage_blogRange" class="Stage_blogRange_id" src="<?php echo get_template_directory_uri(); ?>/images/blogRange.png"></a>
					<img id="Stage_blogMask" class="Stage_blogMask_id" src="<?php echo get_template_directory_uri(); ?>/images/blogMask.png">
					<div id="Stage_top_1_RURU" class="Stage_top_1_RURU_id">
						<img id="Stage_top_1_RURU_r1" class="Stage_top_1_RURU_r1_id" alt="logoR" src="<?php echo get_template_directory_uri(); ?>/images/r1.png">
						<img id="Stage_top_1_RURU_u1" class="Stage_top_1_RURU_u1_id" alt="logoU" src="<?php echo get_template_directory_uri(); ?>/images/u1.png">
						<img id="Stage_top_1_RURU_r2" class="Stage_top_1_RURU_r2_id" alt="logoR" src="<?php echo get_template_directory_uri(); ?>/images/r2.png">
						<img id="Stage_top_1_RURU_u2" class="Stage_top_1_RURU_u2_id" alt="logoU" src="<?php echo get_template_directory_uri(); ?>/images/u2.png">
					</div>
					<img id="Stage_top_1_c1" class="Stage_top_1_c1_id" alt="c" src="<?php echo get_template_directory_uri(); ?>/images/c1.png">
					<img id="Stage_top_1_o1" class="Stage_top_1_o1_id" alt="o" src="<?php echo get_template_directory_uri(); ?>/images/o1.png">
					<img id="Stage_top_1_n" class="Stage_top_1_n_id" alt="n" src="<?php echo get_template_directory_uri(); ?>/images/n.png">
					<img id="Stage_top_1_t1" class="Stage_top_1_t1_id" alt="t" src="<?php echo get_template_directory_uri(); ?>/images/t1.png">
					<img id="Stage_top_1_a" class="Stage_top_1_a_id" alt="a" src="<?php echo get_template_directory_uri(); ?>/images/a.png">
					<img id="Stage_top_1_c2" class="Stage_top_1_c2_id" alt="c" src="<?php echo get_template_directory_uri(); ?>/images/c2.png">
					<img id="Stage_top_1_t2" class="Stage_top_1_t2_id" alt="t" src="<?php echo get_template_directory_uri(); ?>/images/t2.png">
					<a href="#contact"><img id="Stage_top_1_contactRange" class="Stage_top_1_contactRange_id" src="<?php echo get_template_directory_uri(); ?>/images/contactMask.png"></a>
					<img id="Stage_top_1_contactMask" class="Stage_top_1_contactMask_id" src="<?php echo get_template_directory_uri(); ?>/images/contactMask0.png">
					<a href="http://rurumisaki.com/picture"><img id="Stage_top_1_doorClose" class="Stage_top_1_doorClose_id" alt="works" src="<?php echo get_template_directory_uri(); ?>/images/doorClose.png"></a>
					<img id="Stage_top_1_doorMask" class="Stage_top_1_doorMask_id" src="<?php echo get_template_directory_uri(); ?>/images/doorMask.png">
					<img id="Stage_top_1_treeL" class="Stage_top_1_treeL_id init" src="<?php echo get_template_directory_uri(); ?>/images/treeL.png">
					<img id="Stage_top_1_treeR" class="Stage_top_1_treeR_id init" src="<?php echo get_template_directory_uri(); ?>/images/treeR.png">
				</div>
			</div>
		</nav>
	</div>
<?php wp_footer(); ?>
<?php endif; ?>
</body>
</html>
