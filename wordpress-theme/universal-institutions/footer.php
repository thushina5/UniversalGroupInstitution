<?php
/**
 * Footer template.
 *
 * @package Universal_Institutions
 */
$ui_socials = array(
	array( 'icon' => 'facebook', 'label' => 'Facebook' ),
	array( 'icon' => 'linkedin', 'label' => 'LinkedIn' ),
	array( 'icon' => 'twitter', 'label' => 'Twitter' ),
	array( 'icon' => 'youtube', 'label' => 'YouTube' ),
	array( 'icon' => 'instagram', 'label' => 'Instagram' ),
);
$ui_programs = array( 'PU Science', 'PU Commerce', 'PU Arts', 'B.Com / BBA', 'BSc Environmental Science', 'Integrated IAS / IPS' );
$ui_inst     = ui_institution();
?>
<footer class="site-footer" id="footer">
	<div class="bg-grid"></div>
	<div class="container">
		<div class="footer-grid">
			<div class="footer-about">
				<a class="brand" href="#home">
					<span class="brand-badge" style="background:var(--secondary);color:var(--primary)"><?php echo ui_icon( 'cap', 'icon' ); // phpcs:ignore ?></span>
					<span class="brand-name">
						<strong style="color:#fff">Universal</strong>
						<span>Institutions</span>
					</span>
				</a>
				<p>A Bengaluru PU &amp; degree college with integrated IAS / IPS (UPSC &amp; PSC) training, guiding students since <?php echo esc_html( $ui_inst['since'] ); ?>.</p>
				<div style="margin-top:1rem">
					<?php foreach ( $ui_inst['sub'] as $b ) : ?>
						<p style="font-size:.78rem;color:rgba(255,255,255,.6);margin-top:.35rem"><span style="color:var(--secondary);font-weight:600"><?php echo esc_html( $b['abbr'] ); ?></span> &mdash; <?php echo esc_html( $b['name'] ); ?></p>
					<?php endforeach; ?>
				</div>
				<div class="footer-socials">
					<?php foreach ( $ui_socials as $s ) : ?>
						<a href="#" aria-label="<?php echo esc_attr( $s['label'] ); ?>"><?php echo ui_icon( $s['icon'] ); // phpcs:ignore ?></a>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="footer-col">
				<h4>Quick Links</h4>
				<ul>
					<?php foreach ( ui_nav_links() as $link ) : ?>
						<li><a href="<?php echo esc_attr( $link['href'] ); ?>"><?php echo esc_html( $link['label'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Programs</h4>
				<ul>
					<?php foreach ( $ui_programs as $p ) : ?>
						<li><a href="#courses"><?php echo esc_html( $p ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Newsletter</h4>
				<p style="margin-top:1.25rem;color:rgba(255,255,255,.6);font-size:.9rem">Subscribe for admission updates, events and scholarships.</p>
				<form class="newsletter" onsubmit="return false;">
					<input type="email" required placeholder="Your email" aria-label="Email for newsletter" />
					<button type="submit">Join</button>
				</form>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> Universal Institutions. All rights reserved.</p>
			<div class="footer-legal">
				<a href="#">Privacy Policy</a>
				<a href="#">Terms of Service</a>
				<a href="#home" class="to-top" aria-label="Back to top"><?php echo ui_icon( 'arrow-up' ); // phpcs:ignore ?></a>
			</div>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
