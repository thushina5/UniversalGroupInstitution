<?php
/**
 * Front page — composes all homepage sections.
 *
 * @package Universal_Institutions
 */

get_header();
?>
<main id="home">
	<?php
	get_template_part( 'template-parts/hero' );
	get_template_part( 'template-parts/marquee' );
	get_template_part( 'template-parts/about' );
	get_template_part( 'template-parts/courses' );
	get_template_part( 'template-parts/placements' );
	get_template_part( 'template-parts/admissions' );
	get_template_part( 'template-parts/testimonials' );
	get_template_part( 'template-parts/faculty' );
	get_template_part( 'template-parts/gallery' );
	get_template_part( 'template-parts/contact' );
	?>
</main>
<?php
get_footer();
