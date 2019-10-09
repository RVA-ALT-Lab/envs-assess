<?php
/**
 * The right sidebar for assessment
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! is_active_sidebar( 'right-sidebar' ) ) {
	return;
}

// when both sidebars turned on reduce col size to 3 from 4.
$sidebar_pos = get_theme_mod( 'understrap_sidebar_position' );
?>

<?php if ( 'both' === $sidebar_pos ) : ?>
	<div class="col-md-3 widget-area form-fixed" id="right-sidebar" role="complementary">
<?php else : ?>
	<div class="col-md-4 widget-area form-fixed" id="right-sidebar" role="complementary">
<?php endif; ?>
		<?php 
		global $post;
		$gfrom_id = get_field('form_id', $post->ID);
		gravity_form( $gfrom_id, false, false, false, null, false, '', true ); ?>

</div><!-- #right-sidebar -->
