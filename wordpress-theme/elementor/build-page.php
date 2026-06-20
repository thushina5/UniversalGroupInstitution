<?php
/**
 * Builds an Elementor homepage from the exported template JSON.
 * Executed once by the Playground blueprint (runPHP step).
 *
 * @package Universal_Institutions
 */

if ( ! defined( 'ABSPATH' ) ) {
	require_once '/wordpress/wp-load.php';
}

$json_path = '/wordpress/wp-content/ui-elementor/universal-institutions-home.json';
$raw       = file_exists( $json_path ) ? file_get_contents( $json_path ) : '';
$data      = json_decode( $raw, true );
$content   = ( is_array( $data ) && isset( $data['content'] ) ) ? $data['content'] : array();

// Fresh ephemeral DB on each boot, so just create the page.
$page_id = wp_insert_post(
	array(
		'post_title'   => 'Home',
		'post_status'  => 'publish',
		'post_type'    => 'page',
		'post_content' => '',
	)
);

if ( is_wp_error( $page_id ) || ! $page_id ) {
	echo 'Failed to create page.';
	return;
}

// Wire the page up as an Elementor canvas page.
update_post_meta( $page_id, '_elementor_edit_mode', 'builder' );
update_post_meta( $page_id, '_elementor_template_type', 'wp-page' );
update_post_meta( $page_id, '_elementor_version', '3.23.0' );
update_post_meta( $page_id, '_wp_page_template', 'elementor_canvas' );
update_post_meta( $page_id, '_elementor_data', wp_slash( wp_json_encode( $content ) ) );

// Remove the default sample pages so the homepage is unambiguous.
foreach ( array( 'Sample Page', 'Privacy Policy' ) as $junk_title ) {
	$junk = get_posts(
		array(
			'post_type'   => 'page',
			'title'       => $junk_title,
			'post_status' => 'any',
			'numberposts' => 1,
		)
	);
	if ( ! empty( $junk ) ) {
		wp_delete_post( $junk[0]->ID, true );
	}
}

// Make it the homepage and print CSS inline (no generated files needed).
update_option( 'show_on_front', 'page' );
update_option( 'page_on_front', $page_id );
update_option( 'elementor_css_print_method', 'internal' );
update_option( 'blogname', 'Universal Group of Institutions' );

// Ensure Elementor's default "kit" exists — frontend rendering fatals without it.
if ( class_exists( '\Elementor\Plugin' ) ) {
	$instance = \Elementor\Plugin::$instance;

	// Run Elementor's activation/upgrade routine so default settings + kit are created.
	if ( class_exists( '\Elementor\Core\Upgrade\Manager' ) ) {
		do_action( 'elementor/init' );
	}

	if ( isset( $instance->kits_manager ) && method_exists( $instance->kits_manager, 'get_active_id' ) ) {
		$active_id = (int) get_option( 'elementor_active_kit' );
		$kit_post  = $active_id ? get_post( $active_id ) : null;

		if ( ! $kit_post ) {
			// Create a minimal kit and mark it active.
			$kit_id = wp_insert_post(
				array(
					'post_title'  => 'Default Kit',
					'post_type'   => 'elementor_library',
					'post_status' => 'publish',
				)
			);
			if ( $kit_id && ! is_wp_error( $kit_id ) ) {
				update_post_meta( $kit_id, '_elementor_template_type', 'kit' );
				update_post_meta( $kit_id, '_elementor_edit_mode', 'builder' );
				wp_set_object_terms( $kit_id, 'kit', 'elementor_library_type' );
				update_option( 'elementor_active_kit', $kit_id );
			}
		}
	}

	if ( isset( $instance->files_manager ) ) {
		$instance->files_manager->clear_cache();
	}
}

echo 'Elementor home built: page ' . intval( $page_id );
