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