<?php
/**
 * Understrap enqueue scripts
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'understrap_scripts' ) ) {
	/**
	 * Load theme's JavaScript and CSS sources.
	 */
	function understrap_scripts() {
		// Get the theme data.
		global $post;
		$the_theme     = wp_get_theme();
		$theme_version = $the_theme->get( 'Version' );

		$css_version = $theme_version . '.' . filemtime( get_template_directory() . '/css/theme.min.css' );
		wp_enqueue_style( 'understrap-styles', get_template_directory_uri() . '/css/theme.min.css', array(), $css_version );

		wp_enqueue_script( 'jquery' );

		$js_version = $theme_version . '.' . filemtime( get_template_directory() . '/js/theme.min.js' );
		wp_enqueue_script( 'understrap-scripts', get_template_directory_uri() . '/js/theme.min.js', array(), $js_version, true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
		if($post->post_type == 'portfolio'){
			wp_enqueue_script( 'envs-assess', get_template_directory_uri() . '/js/app.js', array(), '1', true );
			$port_url = get_field('portfolio_url', $post->ID);
			wp_localize_script('envs-assess', 'port', array(
			    'url' => $port_url,
			));
		}
		if(get_page_template_slug($post->ID)== 'page-templates/right-sidebarpage-assessment.php'){
			wp_enqueue_script( 'envs-assess-item', get_template_directory_uri() . '/js/app.js', array(), '1', true );
			// $port_url = get_field('portfolio_url', $post->ID);
			// wp_localize_script('envs-assess', 'port', array(
			//     'url' => $port_url,
			// ));
		}

	}
} // endif function_exists( 'understrap_scripts' ).

add_action( 'wp_enqueue_scripts', 'understrap_scripts' );
