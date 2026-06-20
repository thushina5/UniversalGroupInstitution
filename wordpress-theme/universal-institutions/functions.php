<?php
/**
 * Universal Institutions theme functions.
 *
 * @package Universal_Institutions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'UI_THEME_VERSION', '1.0.0' );

require_once get_template_directory() . '/inc/content.php';
require_once get_template_directory() . '/inc/contact-handler.php';

/**
 * Theme setup.
 */
function ui_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'customize-selective-refresh-widgets' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'universal-institutions' ),
		)
	);
}
add_action( 'after_setup_theme', 'ui_theme_setup' );

/**
 * Enqueue styles and scripts.
 */
function ui_enqueue_assets() {
	// Google Fonts.
	wp_enqueue_style(
		'ui-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap',
		array(),
		null
	);

	// Main theme stylesheet (style.css in the theme root).
	wp_enqueue_style( 'ui-style', get_stylesheet_uri(), array( 'ui-fonts' ), UI_THEME_VERSION );

	// Front-end behaviour.
	wp_enqueue_script( 'ui-main', get_template_directory_uri() . '/assets/js/main.js', array(), UI_THEME_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'ui_enqueue_assets' );

/**
 * Allow external demo images (Unsplash / pravatar) without warnings.
 * (Purely cosmetic — remove once you host images locally.)
 */
function ui_register_image_sources() {
	// No-op placeholder; external <img> tags are used directly in templates.
}
add_action( 'init', 'ui_register_image_sources' );

/**
 * Basic SEO: meta description + Open Graph + JSON-LD on the front page.
 */
function ui_seo_head() {
	$site_name = get_bloginfo( 'name' );
	$desc      = 'Universal Group of Institutions is a Bengaluru PU and degree college with integrated IAS / IPS (UPSC & PSC) training across Science, Commerce, Arts and Bangalore University affiliated degrees.';
	$url       = home_url( '/' );
	$image     = get_template_directory_uri() . '/assets/og-image.jpg';
	?>
	<meta name="description" content="<?php echo esc_attr( $desc ); ?>" />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="<?php echo esc_attr( $site_name ); ?>" />
	<meta property="og:title" content="<?php echo esc_attr( $site_name ); ?> | Premier Education & Career Excellence" />
	<meta property="og:description" content="<?php echo esc_attr( $desc ); ?>" />
	<meta property="og:url" content="<?php echo esc_url( $url ); ?>" />
	<meta property="og:image" content="<?php echo esc_url( $image ); ?>" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="<?php echo esc_attr( $site_name ); ?>" />
	<meta name="twitter:description" content="<?php echo esc_attr( $desc ); ?>" />
	<meta name="theme-color" content="#0A2E65" />
	<script type="application/ld+json">
	<?php
	echo wp_json_encode(
		array(
			'@context'    => 'https://schema.org',
			'@type'       => 'CollegeOrUniversity',
			'name'        => $site_name ? $site_name : 'Universal Group of Institutions',
			'url'         => $url,
			'description' => $desc,
			'address'     => array(
				'@type'           => 'PostalAddress',
				'streetAddress'   => 'Gururayanapura, Ramohalli Post, Tavarekere Hobli, Bangalore South',
				'addressLocality' => 'Bengaluru',
				'addressRegion'   => 'Karnataka',
				'postalCode'      => '560074',
				'addressCountry'  => 'IN',
			),
			'contactPoint' => array(
				'@type'       => 'ContactPoint',
				'telephone'   => '+91-63668-16611',
				'contactType' => 'admissions',
				'email'       => 'info@universalinstitutions.com',
			),
		)
	);
	?>
	</script>
	<?php
}
add_action( 'wp_head', 'ui_seo_head', 5 );
