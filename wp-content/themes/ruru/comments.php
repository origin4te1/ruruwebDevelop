<?php if (is_single()): ?>
<article class="comments">
	<?php if(have_comments()): ?>
	<h1>COMMENTS</h1>
	<ul class="commentlist">
	<?php wp_list_comments('callback=comlist'); ?>
	</ul>
	<?php endif; ?>
	<?php comment_form();?>
</article>
<?php else :?>
<article class="comments">
	<h1><a href="<?php the_permalink(); ?>"><?php comments_number(); ?></a></h1>
</article>
<?php endif; ?>