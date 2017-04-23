<?php require_once 'header.php';?>
	<div id="content">
		<!-- Slider Setup -->
		<?php require_once 'slide.php';?>
		<?php require_once 'profile_contact.php';?>
		<footer id="footer">
		<p><small>Copyright &copy; 2013 RURU MISAKI All Rights Reserved.</small></p>
		<div id="footerInnerWrapper">
			<div id="footerInnerNeedle"></div>
			<div id="footerInnerNeedle2"></div>
		</div>
	</footer>
	<div id="cloud01"><img src="<?php echo get_template_directory_uri(); ?>/images/cloud01Dark.png" width="266" height="191"></div>
	<div id="cloud02"><img src="<?php echo get_template_directory_uri(); ?>/images/cloud02Dark.png" width="158" height="118"></div>
	<!--<div id="bgPicture"></div>-->
	<div id="preloadedImages"></div>
	</div>
	<!-- / #content -->
</div>
<!-- / #wrapper -->
<?php wp_footer(); ?>
</body>
</html>
