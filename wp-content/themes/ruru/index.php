<!DOCTYPE HTML>
<html>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<title><?php wp_title('|',true, 'right'); ?><?php bloginfo('name'); ?></title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Happy+Monkey' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Merriweather+Sans' rel='stylesheet' type='text/css'>
<link href="<?php echo get_template_directory_uri(); ?>/css/reset.css" rel="stylesheet" type="text/css">
<link href="<?php echo get_template_directory_uri(); ?>/css/baseAlt2.css" rel="stylesheet" type="text/css">
<link href="<?php echo get_template_directory_uri(); ?>/css/blog.css" rel="stylesheet" type="text/css">
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.2.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/bgpos.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.7.1.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/kofusugimoto.ruru.blog.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.masonry.min.js"></script>
<script>
$(function() {
	$("#contentInner").imagesLoaded(function(){
		$('.mason').css('opacity',0);
		$('.mason').fadeTo(500, 1);
		this.masonry({
			itemSelector: ".mason",
			isFitWidth: true,
			columnWidth: 244,
			isAnimated: !Modernizr.csstransitions
		});
	});
});
</script>
<!--[if IE]>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/PIE.js" charset="UTF-8"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/forPie.js" charset="UTF-8"></script>
<![endif]-->
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
<body <?php body_class(); ?>>
<div id="wrapper">
	<header id="header">
		<div id="gNav" class="blurBtn2">
			<div id="gNavInner">
				<div id="gNavBox">
					<h1 id="logo"><a href="<?php echo home_url('/'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" width="206" height="83" alt="ruru"></a></h1>
					<nav>
						<ul>
							<li id="nav2"><a><img src="<?php echo get_template_directory_uri(); ?>/images/menuProfile.png" width="191" height="67" alt="profile"></a></li>
							<li id="nav3" class="selected"><a href="<?php echo site_url(); ?>/blog"><img src="<?php echo get_template_directory_uri(); ?>/images/menuBlog.png" width="117" height="67" alt="blog"></a></li>
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
	<div id="content">
		<header id="pageTitle">
			<h1><img src="<?php echo get_template_directory_uri(); ?>/images/blogTitle.png" width="160" height="73" alt="Blog"></h1>
		</header>
		<div id="contentInner">
			<div id="socialBox">
				<ul>
					<li><a class="socialIcon fb hide-text" href="http://www.facebook.com/misaki.ruru" title="find me on facebook!">facebook</a></li>
					<li><a class="socialIcon tw hide-text" href="https://twitter.com/ruruwei" title="find me on Twitter!">Twitter</a></li>
				</ul>
			</div>
			<div id="singleBox" class="mason">
				<?php
				$args = array(
						'post_type' => 'blog',
						'post_status' => 'publish',
						'posts_per_page' => 2,
						'paged' => $paged
				);
				query_posts($args);
				?>
				<?php while (have_posts()): the_post(); ?>
				<?php
				$thumb = wp_get_attachment_image_src(
				get_post_thumbnail_id($post->ID),
				'blog-full');
				$url = $thumb['0'];
				?>
				<article class="singleContent">
					<ul class="postInfo">
						<li class="date">DATE :
							<time datetime="<?php echo get_the_date('Y-m-d'); ?>" pubdate="pubdate"><?php echo get_the_date('Y/n/d'); ?></time>
						</li>
						<li class="category">CATEGORY : <?php echo get_the_term_list($post->ID,'blog_cat','',', '); ?></li>
					</ul>
					<header class="singlePostTitle">
						<h1><?php the_title(); ?></h1>
					</header>
					<div class="singlePost">
					<figure><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('blog-thumb-medium'); ?></a></figure>
						<?php the_content(); ?>
					</div>
					<?php $withcomments = true; comments_template('/comments.php'); ?>
				</article>
				<?php endwhile; ?>
				<div id="pagenation">
					<p class="oldpage"><?php next_posts_link('&laquo;古い記事'); ?></p>
					<p class="newpage"><?php previous_posts_link('新しい記事 &raquo;'); ?></p>
				</div>
				<?php wp_reset_query(); ?>
			</div>
			<aside class="mason">
				<nav id="categories" class="sideContent">
					<h1>CATEGORIES</h1>
					<ul>
						<?php $argsCat = array(
								'taxonomy' => get_post_type().'_cat',
								'title_li' => '',
								'title' => false
							); ?>
						<?php wp_list_categories($argsCat); ?><!--CSS .current-cat { ... }-->
					</ul>
				</nav>
				<nav id="archives" class="sideContent">
					<h1>ARCHIVES</h1>
					<ul>
						<?php wp_get_archives('show_post_count=1'); ?>
					</ul>
				</nav>
			</aside>
			<article class="sideContent mason">
				<header>
					<h1><a href="">マークアップの整理</a></h1>
					<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				</header>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<!-- / .sideContent -->
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>中の人へ感謝の気持ちも込めてシェアします！何年もお世話になっているサイトばかりですが、ここ最近はWebフォント関連のサイトが増えてきましたね。いいな！と思えるサイトがあれば嬉しいです。<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<!-- / .sideContent -->
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めて<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<!-- / .sideContent -->
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めて<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めて<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めて<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めて<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
			<article class="sideContent mason">
				<header>
					<h1><a href="">タイトル</a></h1>
				</header>
				<figure><a href=""><img class="sideImg" src="images/photoblog01.jpg" width="200" height="150" alt="赤ちゃんの写真"></a></figure>
				<p>久しぶりにブックマークしているサイトを整理しました。という事でお掃除後の恒例行事？私がブックマークしているフォント・Webフォント・テキスト関連のWebサイトを、中の人へ感謝の気持ちも込めてシェアしmasidsj<span class="slideIn"> <a href="">...read more</a></span></p>
			</article>
		</div>
		<!-- / .sideContent -->
	</div>
	<article class="profile">
		<h1>RURU profile</h1>
		<p class="hide-text bird3" title="I'll just introduce myself">I'll just introduce myself</p>
		<p>1985年生まれ</p>
		<div class="closeBtn">
			<p class="hide-text"><a>閉じる</a></p>
		</div>
	</article>
	<article class="contact">
		<p class="hide-text bird3" title="get in touch!">get in touch!</p>
		<form action=" " method="post"  autocomplete="on">
			<p>
				<label for="username" class="user" > Name <span class="required">*</span></label>
				<input type="text" name="username" id="username"  required="required" placeholder="お名前を入力してください"  />
			</p>
			<p>
				<label for="usermail" class="email"> E-mail <span class="required">*</span></label>
				<input type="email" name="usermail" id="usermail" placeholder="メールアドレスを入力してください" required="required"  />
			</p>
			<p>
				<label for="message" class="comment"> Message <span class="required">*</span></label>
				<textarea id="message" cols="20" rows="5" placeholder="メッセージを入力してください"  required="required" ></textarea>
			</p>
			<p class="indication"><span class="required">*</span> 必須項目</p>
			<input type="submit" value="SEND A MESSAGE" id="sendBtn"/>
			<div class="closeBtn">
				<p class="hide-text"><a>閉じる</a></p>
			</div>
		</form>
	</article>
	<!-- / #content -->
	<div id="bgBlogL"></div>
	<footer id="footer" class="clearfix">
		<p><small>Copyright &copy; 2013 RURU MISAKI All Rights Reserved.</small></p>
		<div id="footerInnerWrapper">
			<div id="footerInnerYard"></div>
			<div id="footerInnerYard2"></div>
		</div>
	</footer>
</div>
<!-- / #wrapper -->
<?php wp_footer(); ?>
</body>
</html>
