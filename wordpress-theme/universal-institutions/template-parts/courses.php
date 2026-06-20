<?php
/**
 * Courses section.
 *
 * @package Universal_Institutions
 */
?>
<section class="section" id="courses">
	<div class="container">
		<div class="section-head text-center grid-head" data-reveal>
			<span class="eyebrow">Academic Programs</span>
			<h2 class="section-title">Pre-University &amp; <span class="accent">Degree</span> Programs</h2>
			<p class="section-sub">Science, Commerce and Arts streams at PU level, Bangalore University affiliated degrees, and a flagship integrated IAS / IPS track &mdash; every program carries built-in civil-services preparation.</p>
		</div>

		<div class="grid cols-3">
			<?php foreach ( ui_courses() as $i => $course ) : ?>
				<article class="course-card" data-reveal data-delay="<?php echo esc_attr( ( $i % 3 ) + 1 ); ?>">
					<div class="course-top">
						<span class="course-icon"><?php echo ui_icon( $course['icon'], 'icon' ); // phpcs:ignore ?></span>
						<span class="tag tag-gold"><?php echo esc_html( $course['category'] ); ?></span>
					</div>
					<h3><?php echo esc_html( $course['title'] ); ?></h3>
					<p><?php echo esc_html( $course['description'] ); ?></p>
					<div class="chips">
						<?php foreach ( $course['highlights'] as $h ) : ?>
							<span class="chip"><?php echo esc_html( $h ); ?></span>
						<?php endforeach; ?>
					</div>
					<div class="course-meta">
						<span><?php echo ui_icon( 'clock' ); // phpcs:ignore ?> <?php echo esc_html( $course['duration'] ); ?></span>
						<span><?php echo ui_icon( 'cap' ); // phpcs:ignore ?> <?php echo esc_html( $course['level'] ); ?></span>
						<span><?php echo ui_icon( 'users' ); // phpcs:ignore ?> <?php echo esc_html( $course['seats'] ); ?> seats</span>
					</div>
					<a class="course-link" href="#admissions">View Curriculum <?php echo ui_icon( 'arrow-up-right' ); // phpcs:ignore ?></a>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
