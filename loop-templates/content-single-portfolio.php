<?php
/**
 * Single post partial template.
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<header class="entry-header">

		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

    <!-- TODO: Do we need this entry meta data? -->
    <div class="entry-meta">
      <?php //understrap_posted_on(); ?>
		</div><!-- .entry-meta -->

	</header><!-- .entry-header -->

  <!-- TODO, revisit this thing  -->
 <?php //echo get_the_post_thumbnail( $post->ID, 'large' ); ?>

	<div class="entry-content" id="content-<?php echo the_ID();?>">
    <!-- This is our Vue app instance -->
    <div id="assessment-app"></div>
		<?php
    // TODO: Do we want this? Assuming it would navigate between portfolios, so yes most likely
		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'understrap' ),
				'after'  => '</div>',
			)
		);
		?>

	</div><!-- .entry-content -->

	<footer class="entry-footer">

		<?php understrap_entry_footer(); ?>

	</footer><!-- .entry-footer -->

</article><!-- #post-## -->
