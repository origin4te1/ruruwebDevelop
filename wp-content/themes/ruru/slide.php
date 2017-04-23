<?php
	$num_post_type = wp_count_posts($mycpt);
	$num = number_format_i18n($num_post_type->publish);
	$btn_num = (int)(($num - 1) / 6 );
	$slide_count = 'slideCount' . ($btn_num + 1);
?>
<input checked type=radio name=slider id=slide1 class="<?php print $slide_count; ?>"/>
<?php
	for ($i = 1, $b = 2; $i < ($btn_num + 1); $i++, $b++):
?>
	<input type=radio name=slider id=slide<?php print $b; ?> class="<?php print $slide_count; ?>"/>
<?php endfor; ?>
<div id="mainWrapper">
	<article id="main">
		<header id="pageTitle">
			<h1>
			<?php if ($mycpt == 'picture'): ?>
			<img src="<?php echo get_template_directory_uri(); ?>/imagesH/picture.png" width="255" height="77" alt="picture">
			<?php elseif ($mycpt == 'photo'): ?>
			<img src="<?php echo get_template_directory_uri(); ?>/imagesH/photo.png" width="230" height="73" alt="photo">
			<?php else: ?>
			<img src="<?php echo get_template_directory_uri(); ?>/images/needlework.png" width="300" height="77" alt="needlework">
			<?php endif; ?>
			</h1>
		</header>
		<div id="slider">
			<div id="slides">
				<div id="overflow">
					<div class="inner">
						<?php $args = array(
							'post_type' => $mycpt,
							'post_status' => 'publish',
							'posts_per_page' => -1
						);
						query_posts($args);
						?>
						<?php if (have_posts()): ?>
						<?php $post_count = 1; ?>
						<?php $column_count = 1; ?>
						<div class="per20">
						<div class="img3column">
							<ul>
						<?php while (have_posts()): the_post(); ?>
							<?php
								$imgType = post_custom('image_type');
								$imgTypeName = 'works-thumb-'.$imgType;
							?>
							<?php if ( $post_count % 6 == 1 && $post_count != 1 ){ echo '</ul>' . "\n" . '</div>' . "\n" . '</div>' . "\n" . '<div class="per20">' . "\n" . '<div class="img3column">' . "\n" . '<ul>' . "\n"; };?>
							<li class="imgSelection <?php echo post_custom('image_type');?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id(); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
<?php the_post_thumbnail($imgTypeName); ?>
</a>
</li>
							<?php $post_count++; // カウンターを１増やす ?>
							<?php if ($post_count % 6 == 1 && $post_count != 1){ $column_count++;}?>
							<?php endwhile; ?>
							<?php echo '</ul>' . "\n" . '</div>' . "\n" . '</div>' . "\n"; // 最後に閉じる ?>
							<?php else : ?>
							<?php endif; ?>
						<?php wp_reset_query(); ?>
						<!-- / -->
					</div>
					<!-- .inner -->
				</div>
				<!-- #overflow -->
			</div>
			<!-- #slides -->
		</div>
		<!-- / #slider -->
	</article>
	<!-- / #main -->
</div>
<div id="socialBoxAlt">
	<ul>
		<li><a class="socialIcon fb hide-text" href="http://www.facebook.com/misaki.ruru" title="find me on facebook!">facebook</a></li>
		<li><a class="socialIcon tw hide-text" href="https://twitter.com/ruruwei" title="find me on Twitter!">Twitter</a></li>
	</ul>
</div>
<div id=active>
	<label for=slide1></label>
<?php for ($i = 1, $b = 2; $i < ($btn_num + 1); $i++, $b++):?>
	<label for=slide<?php print $b; ?>></label>
<?php endfor;?>
</div>
<div id=controls class="blurBtn1">
	<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
<?php for ($i = 1, $b = 2; $i < ($btn_num + 1); $i++, $b++):?>
	<label for=slide<?php print $b; ?>><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
<?php endfor; ?>
</div>
<div id=controls2 class="blurBtn1">
	<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
<?php for ($i = 1, $b = 2; $i < ($btn_num + 1); $i++, $b++):?>
	<label for=slide<?php print $b; ?>><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
<?php endfor; ?>
</div>