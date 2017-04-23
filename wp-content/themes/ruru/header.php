<!DOCTYPE HTML>
<html>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
<meta name="viewport" content="width=device-width,initial-scale=1">
<title><?php wp_title('|',true, 'right'); ?><?php bloginfo('name'); ?></title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/reset.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/baseAlt2.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/baseAlt2-s.css" media="only screen and (max-width: 639px)">
<link href="<?php echo get_template_directory_uri(); ?>/css/<?php $mycpt = get_post_type(); echo $mycpt; ?>.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/<?php $mycpt = get_post_type(); echo $mycpt; ?>-s.css" media="only screen and (max-width: 639px)">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
<link href="<?php echo get_template_directory_uri(); ?>/css/jquery.fancybox.css" rel="stylesheet" type="text/css">
<!--[if (gte IE 6)&(lte IE 8)]>
<script src="<?php echo get_template_directory_uri(); ?>/js/prototype.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/selectivizr-min.js"></script>
<![endif]-->
<script src="<?php echo get_template_directory_uri(); ?>/js/ios-orientationchange-fix.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/mdetect.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.2.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/matchMedia.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.7.1.min.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
<script type="text/javascript">
jQuery.noConflict()(function($){
var j$ = jQuery;
)};
</script>
<![endif]-->
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.pack.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/kofusugimoto.ruru.js"></script>
<?php wp_deregister_script('jquery'); ?>
<?php wp_head(); ?>
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
<div id="loading" class="hide-text">loading</div>
<div id="wrapper">
	<header id="header">
		<div id="gNav" class="blurBtn2">
			<div id="gNavInner">
				<div id="gNavBox">
					<h1 id="logo"><a href="<?php echo home_url('/'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" width="206" height="83" alt="ruru"></a></h1>
					<nav>
						
						<ul>
							<li id="nav2"><a><img src="<?php echo get_template_directory_uri(); ?>/images/menuProfile.png" width="191" height="67" alt="profile"></a></li>
							<li id="nav3"><a href="<?php echo site_url(); ?>/blog"><img src="<?php echo get_template_directory_uri(); ?>/images/menuBlog.png" width="117" height="67" alt="blog"></a></li>
							<li id="nav4" class="selected"><a><img src="<?php echo get_template_directory_uri(); ?>/images/menuWorks.png" width="155" height="67" alt="works"></a>
								<ul>
									<?php if ($mycpt == 'picture'): ?>
									<li id="nav6"><a class="bird2 hide-text" href="<?php echo site_url(); ?>/photo">photo</a></li>
									<li id="nav7"><a class="bird hide-text" href="<?php echo site_url(); ?>/needlework">needle work</a></li>
									<?php elseif ($mycpt == 'photo'): ?>
									<li id="nav6"><a class="bird2 hide-text" href="<?php echo site_url(); ?>/picture">picture</a></li>
									<li id="nav7"><a class="bird hide-text" href="<?php echo site_url(); ?>/needlework">needle work</a></li>
									<?php else: ?>
									<li id="nav6"><a class="bird2 hide-text" href="<?php echo site_url(); ?>/picture">picture</a></li>
									<li id="nav7"><a class="bird hide-text" href="<?php echo site_url(); ?>/photo">photo</a></li>
									<?php endif; ?>
								</ul>
							</li>
							<li id="nav5"><a><img src="<?php echo get_template_directory_uri(); ?>/images/menuContact.png" width="202" height="67" alt="contact"></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<nav id="menuIcon"><span class="hide-text">menu</span></nav>