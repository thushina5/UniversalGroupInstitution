<?php
/**
 * Faculty section.
 *
 * @package Universal_Institutions
 */
?>
<section class="section" id="faculty">
	<div class="container">
		<div class="section-head text-center grid-head" data-reveal>
			<span class="eyebrow">Mentors &amp; Faculty</span>
			<h2 class="section-title">Guided by <span class="accent">Experts</span></h2>
			<p class="section-sub">Experienced academic faculty and seasoned civil-services mentors work side by side to support every learner through board, degree and UPSC milestones.</p>
		</div>

		<div class="grid cols-4">
			<?php foreach ( ui_faculty() as $i => $member ) : ?>
				<article class="faculty-card" data-reveal data-delay="<?php echo esc_attr( ( $i % 4 ) + 1 ); ?>">
					<div class="faculty-photo">
						<img src="<?php echo esc_url( $member['avatar'] ); ?>" alt="<?php echo esc_attr( $member['name'] ); ?>" loading="lazy" />
						<div class="faculty-social">
							<a href="#" aria-label="<?php echo esc_attr( $member['name'] ); ?> on LinkedIn"><?php echo ui_icon( 'linkedin' ); // phpcs:ignore ?></a>
							<a href="#" aria-label="Email <?php echo esc_attr( $member['name'] ); ?>"><?php echo ui_icon( 'mail' ); // phpcs:ignore ?></a>
						</div>
					</div>
					<div class="faculty-body">
						<h3><?php echo esc_html( $member['name'] ); ?></h3>
						<p class="role"><?php echo esc_html( $member['title'] ); ?></p>
						<p class="edu"><?php echo esc_html( $member['edu'] ); ?></p>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
