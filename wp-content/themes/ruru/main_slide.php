<div id="mainWrapper">
	<article id="main">
		<header id="pageTitle">
			<h1>
			<?php if ($my_current_cpt = 'picture'): ?>
			<img src="<?php echo get_template_directory_uri(); ?>/imagesH/picture.png" width="255" height="77" alt="picture">
			<?php elseif ($my_current_cpt = 'photo'): ?>
			<img src="<?php echo get_template_directory_uri(); ?>/imagesH/photo.png" width="230" height="73" alt="photo">
			<?php else: ?>
			<img src="images/needlework.png" width="300" height="77" alt="needlework">
			<?php endif; ?>
			</h1>
		</header>
		<div id="slider">
			<div id="slides">
				<div id="overflow">
					<div class="inner">
						<div class="per20">
							<div class="img3column">
								<ul>
									<?php $args = array(
										'post_type' => $my_current_cpt,
										'post_status' => 'publish',
										'posts_per_page' => -1
									);
									query_posts($args);
									?>
									<?php if (have_posts()): ?>
									<?php while (have_posts()): the_post(); ?>
										<?php
											$imgType = post_custom('image_type');
											$imgTypeName = 'works-thumb-'.$imgType;
										?>
										<?php if (($wp_query->current_post % 7) == 6 && ($wp_query->current_post === $wp_query->post_count - 1)):?>
						<div class="per20">
							<div class="img3column">
								<ul>
										<li class="imgSelection <?php echo post_custom('image_type');?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id(); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
												<?php the_post_thumbnail($imgTypeName); ?>
											</a>
										</li>
								</ul>
							</div>
						</div>
										<?php elseif (($wp_query->current_post % 6) == 5 or ($wp_query->current_post === $wp_query->post_count - 1)): ?>
												<li class="imgSelection <?php echo post_custom('image_type');?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id(); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
												<?php the_post_thumbnail($imgTypeName); ?>
									</a></li>
								</ul>
							</div>
						</div>
										<?php elseif (($wp_query->current_post % 7) == 6):?>
						<div class="per20">
							<div class="img3column">
								<ul>
										<li class="imgSelection <?php echo post_custom('image_type');?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id(); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
												<?php the_post_thumbnail($imgTypeName); ?>
												</a></li>
										<?php else: ?>
										<li class="imgSelection <?php echo post_custom('image_type');?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id(); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
												<?php the_post_thumbnail($imgTypeName); ?>
												</a></li>
										<?php endif;?>
									<?php endwhile; ?>
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
