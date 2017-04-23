<?php if ($num > 30): ?>
<div id=active>
			<label for=slide1></label>
			<label for=slide2></label>
			<label for=slide3></label>
			<label for=slide4></label>
			<label for=slide5></label>
			<label for=slide6></label>
		</div>
		<div id=controls class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide5><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide6><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
		</div>
		<div id=controls2 class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide5><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide6><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
		</div>
<?php elseif ($num > 24): ?>
<div id=active>
			<label for=slide1></label>
			<label for=slide2></label>
			<label for=slide3></label>
			<label for=slide4></label>
			<label for=slide5></label>
		</div>
		<div id=controls class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide5><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
		</div>
		<div id=controls2 class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide5><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
		</div>
<?php else: ?>
<div id=active>
			<label for=slide1></label>
			<label for=slide2></label>
			<label for=slide3></label>
			<label for=slide4></label>
		</div>
		<div id=controls class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/prevMask.png" width="214" height="323" alt="prev"></label>
		</div>
		<div id=controls2 class="blurBtn1">
			<label for=slide1><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide2><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide3><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
			<label for=slide4><img src="<?php echo get_template_directory_uri(); ?>/images/nextMask.png" width="212" height="357" alt="next"></label>
		</div>
<?php endif;?>