<?php
//カスタム投稿タイプ（日記）の登録
register_post_type(
	'blog',
	array(
		'label' => 'BLOG',
		'public' => true,
		'hierarchical' => false,
		'has_archive' => 'blog',
		'supports' => array(
				'title','editor','excerpt','thumbnail','comments','trackbacks'
		)
	)
);
register_taxonomy(
	'blog_cat',
	'blog',
	array(
		'label' => 'BLOGのカテゴリー',
		'hierarchical' => true,
		'rewrite' => array(
				'slug' => 'blog/cat'
		)
	)
);
register_taxonomy(
	'blog_tag',
	'blog',
	array(
			'label' => 'BLOGのタグ',
			'hierarchical' => false
	)
);
//カスタム投稿タイプ（picture）の登録
register_post_type(
	'picture',
	array(
		'label' => 'picture',
		'public' => true,
		'hierarchical' => false,
		'has_archive' => 'picture',
		'supports' => array(
				'title','custom-fields','thumbnail'
		)
	)
);
//カスタム投稿タイプ（photo）の登録
register_post_type(
		'photo',
		array(
				'label' => 'photo',
				'public' => true,
				'hierarchical' => false,
				'has_archive' => 'photo',
				'supports' => array(
						'title','thumbnail'
				)
		)
);
//カスタム投稿タイプ（needlework）の登録
register_post_type(
		'needlework',
		array(
				'label' => 'needlework',
				'public' => true,
				'hierarchical' => false,
				'has_archive' => 'needlework',
				'supports' => array(
						'title','thumbnail'
				)
		)
);
//カスタム投稿タイプ（sketch）の登録
register_post_type(
		'sketch',
		array(
				'label' => 'sketch',
				'public' => true,
				'hierarchical' => false,
				'has_archive' => 'sketch',
				'supports' => array(
						'title','thumbnail'
				)
		)
);

// 記事数の表示
function custom_post_dashboard() {
	$dashboard_custom_post_types= Array(
			'blog','picture','photo','needlework','sketch'
	);
	foreach($dashboard_custom_post_types as $custom_post_type) {
		global $wp_post_types;
		$num_post_type = wp_count_posts($custom_post_type);
		$num = number_format_i18n($num_post_type->publish);
		$text = _n( $wp_post_types[$custom_post_type]->labels->singular_name, $wp_post_types[$custom_post_type]->labels->name, $num_post_type->publish );
		$capability = $wp_post_types[$custom_post_type]->cap->edit_posts;
		if (current_user_can($capability)) {
			$num = "<a href='edit.php?post_type=" . $custom_post_type . "'>$num</a>";
			$text = "<a href='edit.php?post_type=" . $custom_post_type . "'>$text</a>";
		}
		echo '<tr>';
		echo '<td class="first b b_' . $custom_post_type . '">' . $num . '</td>';
		echo '<td class="t ' . $custom_post_type . '">' . $text . '</td>';
		echo '</tr>';
	}
}

add_action('right_now_content_table_end', 'custom_post_dashboard');
/*
 *  月別メニュー
 */

function add_my_post_type($where, $r) {

	$my_current_cpt = get_post_type();

	return str_replace(
			"post_type = 'post'",
			"post_type = '$my_current_cpt'",
			$where
	);
}
add_filter('getarchives_where','add_my_post_type',10,2);

//URLにカスタム投稿タイプを含める
function my_get_archives_link($link_html) {
	return str_replace(
			home_url('/'),
			home_url('/').get_post_type().'/',
			$link_html
	);
}
add_filter('get_archives_link', 'my_get_archives_link');

// リンク内にスパンタグを挿入
// 書式を変更
function my_archives_link($html){
	return preg_replace('@(\d{4})年(\d{1,2})月</a>[&]nbsp[;][(](\d{1,2})[)]</li>@', '$1/$2<span class="slideIn">$3件の記事</span></a></li>', $html);
}
add_filter('get_archives_link', 'my_archives_link');

/*
 *  リライトルール
 */

$mycpts = get_post_types(array('_builtin' => false));
foreach ($mycpts as $mycpt) {
	add_rewrite_rule($mycpt.'/cat/([^/]+)/?$', 'index.php?'.$mycpt.'_cat=$matches[1]', 'top');
	add_rewrite_rule($mycpt.'/([0-9]{4})/([0-9]{2})/?$', 'index.php?post_type='.$mycpt.'&year=$matches[1]&monthnum=$matches[2]', 'top');
	add_rewrite_rule($mycpt.'/([0-9]{4})/([0-9]{2})/page/([0-9]{1,})/?$', 'index.php?post_type='.$mycpt.'&year=$matches[1]&monthnum=$matches[2]&paged=$matches[3]', 'top');
}
//mobile判定
function is_mobile(){
    $useragents = array(
        'iPhone', // iPhone
        'iPod', // iPod touch
        'Android', // 1.5+ Android
        'dream', // Pre 1.5 Android
        'CUPCAKE', // 1.5+ Android
        'blackberry9500', // Storm
        'blackberry9530', // Storm
        'blackberry9520', // Storm v2
        'blackberry9550', // Storm v2
        'blackberry9800', // Torch
        'webOS', // Palm Pre Experimental
        'incognito', // Other iPhone browser
        'webmate' // Other iPhone browser
    );
    $pattern = '/'.implode('|', $useragents).'/i';
    return preg_match($pattern, $_SERVER['HTTP_USER_AGENT']);
}
//アイキャッチ画像
add_theme_support('post-thumbnails');
function manage_posts_columns($columns) {
	$columns['subtitle'] = "サブタイトル";
	$columns['thumbnail'] = __('Thumbnail');
	return $columns;
}
function add_column($column_name, $post_id) {
	//カスタムフィールド取得
	if( $column_name == 'subtitle' ) {
		$stitle = get_post_meta($post_id, 'subtitle', true);
	}
	//アイキャッチ取得
	if ( 'thumbnail' == $column_name) {
		$thum = get_the_post_thumbnail($post_id, array(50,50), 'thumbnail');
	}
	//使用していない場合「なし」を表示
	if ( isset($stitle) && $stitle ) {
		echo attribute_escape($stitle);
	} else if ( isset($thum) && $thum ) {
		echo $thum;
	} else {
		echo __('None');
	}
}
add_filter( 'manage_posts_columns', 'manage_posts_columns' );
add_action( 'manage_posts_custom_column', 'add_column', 10, 2 );
//サムネイルの画像サイズ
add_image_size('blog-thumb-medium',668,9999);
add_image_size('blog-thumb-small',191,9999);
add_image_size('blog-full',960,9999);
add_image_size('works-thumb-vertical',165,220,true);
add_image_size('works-thumb-horizontal',220,165,true);
add_image_size('works-thumb-square',220,220,true);
add_image_size('works-full',960,960);
//Blog 投稿用画像サイズ
function add_custom_image_sizes() {
    global $my_custom_image_sizes;
    $my_custom_image_sizes = array(
        'x-large' => array(
            'name'       => 'ブログ用',
            'width'      => 668,
            'height'     => 9999,
            'crop'       => false,
            'selectable' => true
        ),
    );
    foreach ( $my_custom_image_sizes as $slug => $size ) {
        add_image_size( $slug, $size['width'], $size['height'], $size['crop'] );
    }
}
add_action( 'after_setup_theme', 'add_custom_image_sizes' );
function add_custom_image_size_select( $size_names ) {
    global $my_custom_image_sizes;
    $custom_sizes = get_intermediate_image_sizes();
    foreach ( $custom_sizes as $custom_size ) {
        if ( isset( $my_custom_image_sizes[$custom_size]['selectable'] ) && $my_custom_image_sizes[$custom_size]['selectable'] ) {
            $size_names[$custom_size] = $my_custom_image_sizes[$custom_size]['name'];
        }
    }
    return $size_names;
}
add_filter( 'image_size_names_choose', 'add_custom_image_size_select' );
//特定のページでプラグインオフ
/*
if (!(($mycpt == 'blog') || is_admin())) {
	add_action( 'wp_print_styles', 'my_deregister_styles', 100 );
	function my_deregister_styles() {
		wp_deregister_style( 'wp-pointer' );
	}
	add_action( 'wp_print_script', 'my_deregister_script', 100 );
	function my_deregister_script() {
		wp_deregister_script( 'wp-pointer' );
	}
}*/

//文字数
function exp_length($length) {
	return 90;
}
add_filter('excerpt_mblength', 'exp_length');

//省略記号
function exp_more($more) {
	return '...<span class="slideIn"> <a href="'. get_permalink($post->ID) .'">read more</a></span>';
}
add_filter('excerpt_more', 'exp_more');

// 受信コメント
function comlist($comment, $args, $depth) {
$GLOBALS['comment'] = $comment; ?>

<li class="compost">
<?php comment_text(); ?>
<p class="cominfo">
<?php comment_date(); ?> <?php comment_time(); ?>
 |
<?php comment_author_link(); ?>
</p>

<?php
}
?>