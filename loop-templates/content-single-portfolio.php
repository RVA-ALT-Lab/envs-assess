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
		<div class="entry-meta">

			<?php understrap_posted_on(); ?>

		</div><!-- .entry-meta -->

	</header><!-- .entry-header -->

	<?php echo get_the_post_thumbnail( $post->ID, 'large' ); ?>

<!--Biography modal-->
<div class="modal fade" id="bio-modal" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-slideout" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="bioModalLabel">Student Name</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
       
      </div>
      <div class="modal-body">
      	<img id="stu-photo" src="" alt="Student biography image.">
      	<div id="stu-grad"></div>
        <div id="stu-majors"></div>
        <div id="stu-minors"></div>
        <h3>General Portfolio Data</h3>
        <div id="stu-page-count"></div>
        <div id="stu-post-count"></div>
        <div id="stu-created"></div>
        <div id="stu-last-update"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!--end bio modal-->
	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bio-modal">
                See Bio Snapshot
         </button>
	<div class="entry-content" id="content-<?php echo the_ID();?>">
		<div class="spinner-image">Loading . . . </div>
		<div id="envs-post-data">			
		</div>

		<?php the_content(); ?>

		<?php
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
