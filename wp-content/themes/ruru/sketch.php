<?php
require_once("../../../wp-config.php");
$now_post_num = $_POST['now_post_num'];
$get_post_num = $_POST['get_post_num'];
$sql = "SELECT
        $wpdb->posts.ID
    FROM 
        $wpdb->posts
    WHERE 
        $wpdb->posts.post_type = 'sketch' AND $wpdb->posts.post_status = 'publish'
    ORDER BY 
        $wpdb->posts.menu_order ASC";
         
$results = $wpdb->get_results($sql);
$numposts = $wpdb->get_var("SELECT count(*) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'sketch'");
	$num = number_format($numposts);
	$btn_num = (int)(($num - 1) / 6 );
	$slide_count = 'slideCount' . ($btn_num + 1);
	$post_count = 1;
	$column_count = 1;
?>
<div id="navPainting"><a href="#" class="hide-text">painting</a></div>
<input checked type=radio name=slider id=slide1 class="<?php print $slide_count; ?>"/>
<?php for ($i = 1, $b = 2; $i < ($btn_num + 1); $i++, $b++): ?>
	<input type=radio name=slider id=slide<?php print $b; ?> class="<?php print $slide_count; ?>"/>
<?php endfor; ?>
<div id="mainWrapper">
	<article id="main">
		<header id="pageTitle">
			<h1>
			<img src="<?php echo get_template_directory_uri(); ?>/imagesH/picture.png" width="255" height="77" alt="picture">
			</h1>
		</header>
		<div id="slider">
			<div id="slides">
				<div id="overflow">
					<div class="inner">
						<div class="per20">
						<div class="img3column">
							<ul>
						<?php foreach ($results as $result):?>
							<?php
								$imgType = get_post_meta($result->ID,'image_type',true);
								$imgTypeName = 'works-thumb-'.$imgType;
							?>
							<?php if ( $post_count % 6 == 1 && $post_count != 1 ){ echo '</ul>' . "\n" . '</div>' . "\n" . '</div>' . "\n" . '<div class="per20">' . "\n" . '<div class="img3column">' . "\n" . '<ul>' . "\n"; };?>
							<li class="imgSelection off <?php echo $imgType;?>"><a rel="group" href="<?php $image_id = get_post_thumbnail_id($result->ID); $image_url = wp_get_attachment_image_src($image_id, 'works-full', true); echo $image_url[0]; ?>">
<?php print get_the_post_thumbnail($result->ID, "$imgTypeName"); ?>
</a>
</li>
							<?php $post_count++; // カウンターを１増やす ?>
							<?php if ($post_count % 6 == 1 && $post_count != 1){ $column_count++;}?>
							<?php endforeach;?>
							<?php echo '</ul>' . "\n" . '</div>' . "\n" . '</div>' . "\n"; // 最後に閉じる ?>
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