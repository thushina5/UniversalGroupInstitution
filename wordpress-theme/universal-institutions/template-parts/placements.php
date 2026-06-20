<?php
/**
 * Placement statistics section.
 *
 * @package Universal_Institutions
 */
?>
<section class="section placements" id="placements">
	<div class="bg-grid"></div>
	<div class="container">
		<div class="section-head text-center grid-head" data-reveal>
			<span class="eyebrow eyebrow--light">Our Track Record</span>
			<h2 class="section-title">A Quarter Century of <span class="accent">Guidance</span></h2>
			<p class="section-sub">For over two decades, our integrated approach has helped students earn their degrees while building the foundation for IAS, IPS, KAS and other civil-services careers.</p>
		</div>

		<div class="grid cols-4">
			<?php foreach ( ui_stats() as $i => $stat ) : ?>
				<div class="stat-card glass" data-reveal data-delay="<?php echo esc_attr( $i + 1 ); ?>">
					<span class="ic"><?php echo ui_icon( $stat['icon'], 'icon' ); // phpcs:ignore ?></span>
					<p class="val" data-count="<?php echo esc_attr( $stat['value'] ); ?>" data-suffix="<?php echo esc_attr( $stat['suffix'] ); ?>">0<?php echo esc_html( $stat['suffix'] ); ?></p>
					<p class="lbl"><?php echo esc_html( $stat['label'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
