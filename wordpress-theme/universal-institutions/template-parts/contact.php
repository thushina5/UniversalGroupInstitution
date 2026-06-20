<?php
/**
 * Contact section with admission enquiry form.
 *
 * @package Universal_Institutions
 */
$ui_inst         = ui_institution();
$ui_contact_info = array(
	array( 'icon' => 'pin', 'k' => 'Visit Us', 'v' => $ui_inst['address'] ),
	array( 'icon' => 'phone', 'k' => 'Call Us', 'v' => implode( '  ·  ', $ui_inst['phones'] ) ),
	array( 'icon' => 'mail', 'k' => 'Email Us', 'v' => $ui_inst['email'] ),
);

// Read the redirect status flag.
$ui_status = isset( $_GET['enquiry'] ) ? sanitize_key( wp_unslash( $_GET['enquiry'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
?>
<section class="section" id="contact">
	<div class="container">
		<div class="contact-grid">
			<div data-reveal>
				<span class="eyebrow">Get In Touch</span>
				<h2 class="section-title" style="margin-top:1.25rem">Begin Your <span class="accent">Journey</span></h2>
				<p class="section-sub">Have questions about programs, scholarships or campus life? Our admissions team responds within 24 hours.</p>
				<div style="margin-top:2rem">
					<?php foreach ( $ui_contact_info as $info ) : ?>
						<div class="contact-info-item">
							<span class="ic"><?php echo ui_icon( $info['icon'], 'icon' ); // phpcs:ignore ?></span>
							<div>
								<p class="k"><?php echo esc_html( $info['k'] ); ?></p>
								<p class="v"><?php echo esc_html( $info['v'] ); ?></p>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<div data-reveal data-delay="1">
				<div class="contact-form glass-card">
					<?php if ( 'success' === $ui_status ) : ?>
						<div class="form-note success">
							<strong>Application received!</strong> Thank you for reaching out &mdash; our admissions team will contact you within 24 hours.
						</div>
					<?php elseif ( 'invalid' === $ui_status ) : ?>
						<div class="form-note error">Please provide a valid name, email and phone number.</div>
					<?php elseif ( 'error' === $ui_status ) : ?>
						<div class="form-note error">Something went wrong. Please try again.</div>
					<?php endif; ?>

					<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" id="contact-form" novalidate>
						<input type="hidden" name="action" value="ui_contact" />
						<?php wp_nonce_field( 'ui_contact', 'ui_contact_nonce' ); ?>

						<div class="form-row two">
							<div class="field">
								<label for="cf-name">Full Name</label>
								<input type="text" id="cf-name" name="name" placeholder="Jane Doe" required />
							</div>
							<div class="field">
								<label for="cf-email">Email Address</label>
								<input type="email" id="cf-email" name="email" placeholder="jane@email.com" required />
							</div>
						</div>

						<div class="form-row two">
							<div class="field">
								<label for="cf-phone">Phone Number</label>
								<input type="tel" id="cf-phone" name="phone" placeholder="+91 98765 43210" required />
							</div>
							<div class="field">
								<label for="cf-program">Program of Interest</label>
								<select id="cf-program" name="program">
									<option value="" disabled selected>Select a program</option>
									<?php foreach ( ui_courses() as $course ) : ?>
										<option value="<?php echo esc_attr( $course['title'] ); ?>"><?php echo esc_html( $course['title'] ); ?></option>
									<?php endforeach; ?>
								</select>
							</div>
						</div>

						<div class="field">
							<label for="cf-message">Message</label>
							<textarea id="cf-message" name="message" rows="4" placeholder="Tell us how we can help..."></textarea>
						</div>

						<button type="submit" class="btn btn-primary btn-block">
							Submit Enquiry <?php echo ui_icon( 'send' ); // phpcs:ignore ?>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
