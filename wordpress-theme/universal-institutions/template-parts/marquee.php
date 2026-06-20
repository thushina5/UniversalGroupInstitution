<?php
/**
 * Recruiter marquee.
 *
 * @package Universal_Institutions
 */
$ui_recruiters = array_merge( ui_recruiters(), ui_recruiters() );
?>
<section class="marquee-sec">
	<div class="container">
		<p class="marquee-label">Preparing students for India&rsquo;s most respected careers</p>
		<div class="marquee">
			<div class="marquee-track">
				<?php foreach ( $ui_recruiters as $name ) : ?>
					<span><?php echo esc_html( $name ); ?></span>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
