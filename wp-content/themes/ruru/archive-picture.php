<?php require_once 'header.php';?>
	<div id="content">
		<!-- Slider Setup -->
		<div id="navSketch"><a href="#" class="hide-text">sketch</a></div>
		<?php require_once 'slide.php';?>
		<?php require_once 'profile_contact.php';?>
		<footer id="footer">
			<div id="bgTable"><img src="<?php echo get_template_directory_uri(); ?>/images/table.png" width="214" height="162"></div>
			<p><small class="white">Copyright &copy; 2013 RURU MISAKI All Rights Reserved.</small></p>
			<div id="footerInnerWrapper">
				<div id="footerInnerPic"></div>
				<div id="footerInnerPic2"></div>
				<div id="footerInnerPic3"></div>
			</div>
		</footer>
		<div id="bg"></div>
		<div id="bg2"></div>
		<div id="bgKtool"><img src="<?php echo get_template_directory_uri(); ?>/images/kitchentool.png" width="239" height="197"></div>
		<div id="preloadedImages"></div>
	</div>
	<!-- / #content -->
</div>
<!--[if IE 9]><script src="<?php echo get_template_directory_uri(); ?>/js/PIE_IE9.js"></script><![endif]-->
<!-- <script>
$(function() {
  if (window.PIE) {
    $('div.img3column ul li.imgSelection img, #fancybox-content').each(function() {
      PIE.attach(this);
    });
  }
});
</script> -->
<!-- / #wrapper -->
<?php wp_footer(); ?>
</body>
</html>
