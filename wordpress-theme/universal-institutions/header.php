<?php
/**
 * Header template.
 *
 * @package Universal_Institutions
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
	<nav class="nav" aria-label="Primary">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>#home">
			<span class="brand-badge"><?php echo ui_icon( 'cap', 'icon' ); // phpcs:ignore ?></span>
			<span class="brand-name">
				<strong><?php echo esc_html( get_bloginfo( 'name' ) ? get_bloginfo( 'name' ) : 'Universal' ); ?></strong>
				<span>Institutions</span>
			</span>
		</a>

		<ul class="nav-links">
			<?php foreach ( ui_nav_links() as $link ) : ?>
				<li><a href="<?php echo esc_attr( $link['href'] ); ?>"><?php echo esc_html( $link['label'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>

		<div class="nav-cta">
			<a class="phone" href="tel:+918045678900">+91 80 4567 8900</a>
			<a class="btn btn-secondary" href="#admissions">Apply Now</a>
		</div>

		<button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
			<?php echo ui_icon( 'menu', 'icon-menu' ); // phpcs:ignore ?>
		</button>
	</nav>

	<div class="mobile-menu" id="mobile-menu">
		<ul>
			<?php foreach ( ui_nav_links() as $link ) : ?>
				<li><a href="<?php echo esc_attr( $link['href'] ); ?>" data-close><?php echo esc_html( $link['label'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>
		<a class="btn btn-secondary btn-block" href="#admissions" data-close>Apply Now</a>
	</div>
</header>
