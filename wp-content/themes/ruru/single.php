<?php require_once 'headerBlog.php';?>
	<div id="content">
		<header id="pageTitle">
			<h1><a href="<?php echo site_url(); ?>/blog"><img src="<?php echo get_template_directory_uri(); ?>/images/blogTitle.png" width="220" height="73" alt="Blog"></a></h1>
		</header>
		<div id="contentInner" class="clearfix">
			<div id="socialBox">
				<ul>
					<li><a class="socialIcon fb hide-text" href="http://www.facebook.com/misaki.ruru" title="find me on facebook!">facebook</a></li>
					<li><a class="socialIcon tw hide-text" href="https://twitter.com/ruruwei" title="find me on Twitter!">Twitter</a></li>
				</ul>
			</div>
			<div id="singleBox" class="mason clearfix">
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
					<figure><a href="<?php echo $url; ?>"><?php the_post_thumbnail('blog-thumb-medium'); ?></a></figure>
						<?php the_content(); ?>
					</div>
					<?php comments_template(); ?>
				</article>
				<div id="pagenation">
					<p class="oldpage"><?php previous_post_link('&laquo; %link'); ?></p>
					<p class="newpage"><?php next_post_link('%link &raquo;'); ?></p>
				</div>
				<?php endwhile; ?>
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
			<?php $args = array(
					'posts_per_page' => 8,
					'post_type' => get_post_type()
					); query_posts($args); ?>
			<?php while (have_posts()): the_post(); ?>
			<article class="sideContent mason">
				<header>
					<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
					<figure><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('blog-thumb-small'); ?></a></figure>
				</header>
				<?php the_excerpt(); ?>
			</article>
			<?php endwhile; ?>
		</div>
		<!-- / .sideContent -->
	</div>
	<?php require_once 'profile_contact.php';?>
	<!-- / #content -->
	<div id="bgBlogL"></div>
	<footer id="footer" class="clearfix">
		<p><small>Copyright &copy; 2013 RURU MISAKI All Rights Reserved.</small></p>
		<div id="footerInnerWrapper">
			<div id="footerInnerYard"></div>
			<div id="footerInnerYard2"></div>
			<div id="animal"></div>
			<div id="animal2"></div>
		</div>
	</footer>
</div>
<!-- / #wrapper -->
<?php wp_footer(); ?>
</body>
</html>
