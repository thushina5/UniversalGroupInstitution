<?php
/**
 * Admissions CTA section.
 *
 * @package Universal_Institutions
 */
$ui_steps = array(
	array( 'icon' => 'file', 'title' => 'Submit Application', 'text' => 'Complete the online form in minutes.' ),
	array( 'icon' => 'calendar', 'title' => 'Attend Counselling', 'text' => 'Personalised guidance from our experts.' ),
	array( 'icon' => 'phone', 'title' => 'Confirm Your Seat', 'text' => 'Secure admission and begin your journey.' ),
);
?>
<section class="section" id="admissions">
	<div class="container">
		<div class="admissions-panel" data-reveal>
			<div class="bg-grid"></div>
			<div class="admissions-grid">
				<div>
					<span class="eyebrow eyebrow--light">Admissions 2026 Open</span>
					<h2>Begin Your <span class="accent">Integrated</span> Journey Today</h2>
					<p>Seats for PU, degree and integrated UPSC programs are limited. Apply early to secure your place and reserve hostel accommodation for the 2026 batch.</p>
					<div class="admissions-actions">
						<a class="btn btn-secondary" href="#contact">Start Application <?php echo ui_icon( 'arrow' ); // phpcs:ignore ?></a>
						<a class="btn btn-ghost" href="#contact">Download Brochure</a>
					</div>
				</div>
				<div class="steps">
					<?php foreach ( $ui_steps as $i => $step ) : ?>
						<div class="step glass" data-reveal data-delay="<?php echo esc_attr( $i + 1 ); ?>">
							<span class="ic"><?php echo ui_icon( $step['icon'], 'icon' ); // phpcs:ignore ?></span>
							<div>
								<strong><?php echo esc_html( ( $i + 1 ) . '. ' . $step['title'] ); ?></strong>
								<span><?php echo esc_html( $step['text'] ); ?></span>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>
