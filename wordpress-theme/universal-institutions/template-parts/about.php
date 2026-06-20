<?php
/**
 * About / Why Integrated section.
 *
 * @package Universal_Institutions
 */
$ui_pillars = array(
	array( 'icon' => 'clock', 'title' => 'No Years Lost', 'text' => 'UPSC preparation begins alongside PU and degree classes, so aspirants gain a head start instead of waiting until graduation.' ),
	array( 'icon' => 'cap', 'title' => 'One Campus, Two Goals', 'text' => 'Board, university and civil-services coaching run together under a single, structured timetable.' ),
	array( 'icon' => 'building', 'title' => 'Mentor-Led Discipline', 'text' => 'Daily answer writing, current affairs and mind maps build the habits that crack prelims, mains and the interview.' ),
);
$ui_points = array(
	'Pre-University, Degree and UPSC under one roof',
	'Bangalore University affiliated programs',
	'25+ years of coaching experience',
);
?>
<section class="section" id="about">
	<div class="container" style="display:grid;gap:3.5rem;align-items:center;grid-template-columns:1fr">
		<div class="about-grid" style="display:grid;gap:3.5rem;align-items:center">
			<div data-reveal>
				<span class="eyebrow">Why Integrated Education</span>
				<h2 class="section-title" style="margin-top:1.25rem">Degree Today, <span class="accent">Service</span> Tomorrow</h2>
				<p class="section-sub">Most students discover the civil-services dream only after their degree &mdash; and then spend years catching up. Universal Group of Institutions was built to remove that gap. Our integrated model weaves IAS / IPS (UPSC &amp; PSC) training into Pre-University and degree education from the very first day.</p>
				<p class="section-sub" style="margin-top:1rem">Through <strong>Universal School of Administration</strong> and the <strong>Universal Coaching Centre</strong>, learners earn a recognised qualification while steadily building the knowledge, writing practice and temperament that public service demands.</p>
				<ul style="list-style:none;padding:0;margin-top:1.5rem;display:grid;gap:.75rem">
					<?php foreach ( $ui_points as $point ) : ?>
						<li style="display:flex;align-items:center;gap:.65rem;font-size:.9rem;font-weight:500;color:var(--primary-900)">
							<span style="color:var(--secondary-500);display:inline-flex"><?php echo ui_icon( 'check' ); // phpcs:ignore ?></span>
							<?php echo esc_html( $point ); ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div style="display:grid;gap:1.25rem">
				<?php foreach ( $ui_pillars as $i => $p ) : ?>
					<div class="contact-info-item" data-reveal data-delay="<?php echo esc_attr( $i + 1 ); ?>" style="align-items:flex-start">
						<span class="ic"><?php echo ui_icon( $p['icon'], 'icon' ); // phpcs:ignore ?></span>
						<div>
							<h3 style="font-size:1.1rem;font-weight:700;color:var(--primary)"><?php echo esc_html( $p['title'] ); ?></h3>
							<p style="margin-top:.25rem;font-size:.88rem;color:rgba(10,46,101,.7)"><?php echo esc_html( $p['text'] ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<style>
@media (min-width: 1024px) { #about .about-grid { grid-template-columns: 1fr 1fr; } }
</style>
