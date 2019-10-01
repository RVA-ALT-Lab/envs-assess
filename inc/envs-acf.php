<?php 


//ACF JSON SAVER
add_filter('acf/settings/save_json', 'envs_assess_acf_json_save_point');
  
function envs_assess_acf_json_save_point( $path ) {
     
    // update path
    $path = plugin_dir_path( __FILE__ )  . '/acf-json';
    // return
    return $path;
     
}
 
 
add_filter('acf/settings/load_json', 'envs_assess_acf_json_load_point');
 
function envs_assess_acf_json_load_point( $paths ) {
     
    // remove original path (optional)
    unset($paths[0]);
     
     
    // append path
    $paths[] = plugin_dir_path( __FILE__ )  . '/acf-json';
     
     
    // return
    return $paths;
     
}

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
    'key' => 'group_5d8ccc0eb108e',
    'title' => 'Portfolio',
    'fields' => array(
        array(
            'key' => 'field_5d8ccc14c2c8c',
            'label' => 'Portfolio URL',
            'name' => 'portfolio_url',
            'type' => 'url',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'portfolio',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
));

endif;