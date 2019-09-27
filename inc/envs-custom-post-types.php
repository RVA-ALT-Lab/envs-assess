<?php


//portfolio custom post type

// Register Custom Post Type portfolio
// Post Type Key: portfolio

function create_portfolio_cpt() {

  $labels = array(
    'name' => __( 'Portfolios', 'Post Type General Name', 'textdomain' ),
    'singular_name' => __( 'Portfolio', 'Post Type Singular Name', 'textdomain' ),
    'menu_name' => __( 'Portfolio', 'textdomain' ),
    'name_admin_bar' => __( 'Portfolio', 'textdomain' ),
    'archives' => __( 'Portfolio Archives', 'textdomain' ),
    'attributes' => __( 'Portfolio Attributes', 'textdomain' ),
    'parent_item_colon' => __( 'Portfolio:', 'textdomain' ),
    'all_items' => __( 'All Portfolios', 'textdomain' ),
    'add_new_item' => __( 'Add New Portfolio', 'textdomain' ),
    'add_new' => __( 'Add New', 'textdomain' ),
    'new_item' => __( 'New Portfolio', 'textdomain' ),
    'edit_item' => __( 'Edit Portfolio', 'textdomain' ),
    'update_item' => __( 'Update Portfolio', 'textdomain' ),
    'view_item' => __( 'View Portfolio', 'textdomain' ),
    'view_items' => __( 'View Portfolios', 'textdomain' ),
    'search_items' => __( 'Search Portfolios', 'textdomain' ),
    'not_found' => __( 'Not found', 'textdomain' ),
    'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
    'featured_image' => __( 'Featured Image', 'textdomain' ),
    'set_featured_image' => __( 'Set featured image', 'textdomain' ),
    'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
    'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
    'insert_into_item' => __( 'Insert into portfolio', 'textdomain' ),
    'uploaded_to_this_item' => __( 'Uploaded to this portfolio', 'textdomain' ),
    'items_list' => __( 'Portfolio list', 'textdomain' ),
    'items_list_navigation' => __( 'Portfolio list navigation', 'textdomain' ),
    'filter_items_list' => __( 'Filter Portfolio list', 'textdomain' ),
  );
  $args = array(
    'label' => __( 'portfolio', 'textdomain' ),
    'description' => __( '', 'textdomain' ),
    'labels' => $labels,
    'menu_icon' => '',
    'supports' => array('title', 'editor', 'revisions', 'author', 'trackbacks', 'custom-fields', 'thumbnail',),
    'taxonomies' => array(),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,
    'show_in_admin_bar' => true,
    'show_in_nav_menus' => true,
    'can_export' => true,
    'has_archive' => true,
    'hierarchical' => false,
    'exclude_from_search' => false,
    'show_in_rest' => true,
    'publicly_queryable' => true,
    'capability_type' => 'post',
    'menu_icon' => 'dashicons-universal-access-alt',
  );
  register_post_type( 'portfolio', $args );
  
  // flush rewrite rules because we changed the permalink structure
  global $wp_rewrite;
  $wp_rewrite->flush_rules();
}
add_action( 'init', 'create_portfolio_cpt', 0 );