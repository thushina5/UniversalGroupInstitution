<?php
/**
 * Testimonials slider.
 *
 * @package Universal_Institutions
 */
$ui_testimonials = ui_testimonials();
?>
<section class="section testimonials">
	<div class="container">
		<div class="section-head text-center" data-reveal>
			<span class="eyebrow">Our Achievers</span>
			<h2 class="section-title">Stories of <span class="accent">Success</span></h2>
			<p class="section-sub">Hear from the students and alumni who pursued their degrees and civil-services dreams together at Universal.</p>
		</div>

		<div class="slider" id="testimonial-slider">
			<?php foreach ( $ui_testimonials as $i => $t ) : ?>
				<div class="slide<?php echo 0 === $i ? ' active' : ''; ?>" data-slide="<?php echo esc_attr( $i ); ?>">
					<div class="quote-card glass-card">
						<div class="stars" aria-label="<?php echo esc_attr( $t['rating'] ); ?> star rating">
							<?php for ( $s = 0; $s < (int) $t['rating']; $s++ ) : ?>
								<?php echo ui_icon( 'star' ); // phpcs:ignore ?>
							<?php endfor; ?>
						</div>
						<p class="quote-text">&ldquo;<?php echo esc_html( $t['quote'] ); ?>&rdquo;</p>
						<div class="quote-person">
							<img src="<?php echo esc_url( $t['avatar'] ); ?>" alt="<?php echo esc_attr( $t['name'] ); ?>" loading="lazy" />
							<div>
								<strong><?php echo esc_html( $t['name'] ); ?></strong>
								<span><?php echo esc_html( $t['role'] ); ?></span>
							</div>
						</div>
					</div>
				</div>
			<?php endforeach; ?>

			<div class="slider-controls">
				<button class="slider-btn" id="prev-slide" aria-label="Previous testimonial"><?php echo ui_icon( 'chevron-left' ); // phpcs:ignore ?></button>
				<div class="dots" id="slider-dots">
					<?php foreach ( $ui_testimonials as $i => $t ) : ?>
						<button class="dot<?php echo 0 === $i ? ' active' : ''; ?>" data-dot="<?php echo esc_attr( $i ); ?>" aria-label="Go to testimonial <?php echo esc_attr( $i + 1 ); ?>"></button>
					<?php endforeach; ?>
				</div>
				<button class="slider-btn" id="next-slide" aria-label="Next testimonial"><?php echo ui_icon( 'chevron-right' ); // phpcs:ignore ?></button>
			</div>
		</div>
	</div>
</section>
