<!DOCTYPE HTML>
<html>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1">
<title><?php wp_title('|',true, 'right'); ?><?php bloginfo('name'); ?></title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Happy+Monkey' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Merriweather+Sans' rel='stylesheet' type='text/css'>
<link href="<?php echo get_template_directory_uri(); ?>/css/reset.css" rel="stylesheet" type="text/css">
<link href="<?php echo get_template_directory_uri(); ?>/css/blog.css" rel="stylesheet" type="text/css">
<link href="<?php echo get_template_directory_uri(); ?>/css/blog-s.css" rel="stylesheet" media="only screen and (max-width: 639px)">
<script src="<?php echo get_template_directory_uri(); ?>/js/ios-orientationchange-fix.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/mdetect.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.2.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/matchMedia.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.7.1.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.exresize.0.1.0.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/kofusugimoto.ruru.blog.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.masonry.min.js"></script>
<?php wp_deregister_script('jquery'); ?>
<?php wp_head(); ?>
<!--[if IE]>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/PIE.js" charset="UTF-8"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/forPie.js" charset="UTF-8"></script>
<![endif]-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41244033-1', 'rurumisaki.com');
  ga('send', 'pageview');

</script>
</head>
<body <?php body_class(); ?>>
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
							<li id="nav4"><a><img src="<?php echo get_template_directory_uri(); ?>/images/menuWorks.png" width="155" height="67" alt="works"></a>
								<ul>
									<li id="nav6"><a class="bird2 hide-text" href="<?php echo site_url(); ?>/picture">picture</a></li>
									<li id="nav7"><a class="bird hide-text" href="<?php echo site_url(); ?>/needlework">needlework</a></li>
									<li id="nav8"><a class="bird3 hide-text" href="<?php echo site_url(); ?>/photo">photo</a></li>
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