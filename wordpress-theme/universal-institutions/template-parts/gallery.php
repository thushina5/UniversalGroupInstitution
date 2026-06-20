<?php
/**
 * Gallery section.
 *
 * @package Universal_Institutions
 */
?>
<section class="section testimonials" id="gallery">
	<div class="container">
		<div class="section-head text-center" data-reveal>
			<span class="eyebrow">Campus Life</span>
			<h2 class="section-title">Life at <span class="accent">Universal</span></h2>
			<p class="section-sub">A focused, disciplined campus in Bengaluru &mdash; classrooms, libraries and labs designed for students balancing academics with serious exam preparation.</p>
		</div>

		<div class="gallery-grid">
			<?php foreach ( ui_gallery() as $i => $item ) : ?>
				<figure class="gallery-item <?php echo esc_attr( $item['span'] ); ?>" data-reveal data-delay="<?php echo esc_attr( ( $i % 5 ) + 1 ); ?>">
					<img src="<?php echo esc_url( $item['src'] ); ?>" alt="<?php echo esc_attr( $item['alt'] ); ?>" loading="lazy" />
					<figcaption><?php echo esc_html( $item['alt'] ); ?></figcaption>
				</figure>
			<?php endforeach; ?>
		</div>
	</div>
</section>
