<?php
/**
 * Plugin Name: UI Elementor Home Forcer
 * Description: Creates the Universal Institutions Elementor homepage from the exported
 *              template JSON and forces it as the site front page on every request.
 *              Used only for the local WordPress Playground preview.
 *
 * @package Universal_Institutions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ensure the Elementor home page exists; cache its ID in a global.
 */
add_action( 'init', function () {
	$found = get_posts(
		array(
			'post_type'   => 'page',
			'post_status' => 'any',
			'numberposts' => 1,
			'fields'      => 'ids',
			'meta_key'    => '_ui_elementor_home', // phpcs:ignore
			'meta_value'  => '1',                  // phpcs:ignore
		)
	);

	if ( ! empty( $found ) ) {
		$GLOBALS['ui_home_id'] = (int) $found[0];
		return;
	}

	$json    = @file_get_contents( '/wordpress/wp-content/ui-elementor/universal-institutions-home.json' ); // phpcs:ignore
	$data    = json_decode( $json, true );
	$content = ( is_array( $data ) && isset( $data['content'] ) ) ? $data['content'] : array();

	$id = wp_insert_post(
		array(
			'post_title'   => 'Home',
			'post_status'  => 'publish',
			'post_type'    => 'page',
			'post_content' => '',
		)
	);

	if ( $id && ! is_wp_error( $id ) ) {
		update_post_meta( $id, '_ui_elementor_home', '1' );
		update_post_meta( $id, '_elementor_edit_mode', 'builder' );
		update_post_meta( $id, '_elementor_template_type', 'wp-page' );
		update_post_meta( $id, '_elementor_version', '3.23.0' );
		update_post_meta( $id, '_wp_page_template', 'elementor_canvas' );
		update_post_meta( $id, '_elementor_data', wp_slash( wp_json_encode( $content ) ) );
		$GLOBALS['ui_home_id'] = (int) $id;
	}
}, 99 );

// Force this page as the static front page regardless of stored options.
add_filter( 'option_show_on_front', function ( $value ) {
	return ! empty( $GLOBALS['ui_home_id'] ) ? 'page' : $value;
} );
add_filter( 'option_page_on_front', function ( $value ) {
	return ! empty( $GLOBALS['ui_home_id'] ) ? $GLOBALS['ui_home_id'] : $value;
} );

// Print Elementor CSS inline so no generated files are required.
add_filter( 'option_elementor_css_print_method', function () {
	return 'internal';
} );
add_filter( 'pre_option_elementor_css_print_method', function () {
	return 'internal';
} );
