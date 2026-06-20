<?php
/**
 * Central content for the Universal Institutions theme.
 * Edit these arrays to change site copy — mirrors the Next.js lib/data.ts.
 *
 * @package Universal_Institutions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ui_nav_links() {
	return array(
		array( 'label' => 'Home', 'href' => '#home' ),
		array( 'label' => 'About', 'href' => '#about' ),
		array( 'label' => 'Programs', 'href' => '#courses' ),
		array( 'label' => 'UPSC/IAS', 'href' => '#placements' ),
		array( 'label' => 'Campus', 'href' => '#gallery' ),
		array( 'label' => 'Contact', 'href' => '#contact' ),
	);
}

/**
 * Core institution facts (real, from the public site).
 */
function ui_institution() {
	return array(
		'name'    => 'Universal Group of Institutions',
		'since'   => 1999,
		'address' => 'Gururayanapura, Ramohalli Post, Tavarekere Hobli, Bangalore South, Bengaluru – 560074',
		'phones'  => array( '+91 63668 16611', '+91 96866 64985', '080-2339 6403' ),
		'email'   => 'info@universalinstitutions.com',
		'sub'     => array(
			array( 'abbr' => 'USA', 'name' => 'Universal School of Administration' ),
			array( 'abbr' => 'UCC', 'name' => 'Universal Coaching Centre' ),
		),
	);
}

function ui_courses() {
	return array(
		array(
			'icon'        => 'health',
			'title'       => 'Pre-University — Science',
			'category'    => 'PU College',
			'duration'    => '2 Years',
			'level'       => 'Class 11 & 12',
			'description' => 'PCMB and PCMC combinations with built-in civil-services foundation, so students build board, competitive and UPSC fundamentals together.',
			'highlights'  => array( 'PCMB / PCMC', 'CET & NEET prep', 'UPSC foundation' ),
			'seats'       => 120,
		),
		array(
			'icon'        => 'chart',
			'title'       => 'Pre-University — Commerce',
			'category'    => 'PU College',
			'duration'    => '2 Years',
			'level'       => 'Class 11 & 12',
			'description' => 'A commerce stream pairing accountancy, business studies and economics with integrated aptitude and general-studies training.',
			'highlights'  => array( 'Accountancy', 'Economics', 'UPSC foundation' ),
			'seats'       => 120,
		),
		array(
			'icon'        => 'book',
			'title'       => 'Pre-University — Arts',
			'category'    => 'PU College',
			'duration'    => '2 Years',
			'level'       => 'Class 11 & 12',
			'description' => 'History, political science and economics taught with a civil-services lens — ideal for students aiming at IAS, IPS and KAS careers early.',
			'highlights'  => array( 'Polity & History', 'Answer writing', 'Current affairs' ),
			'seats'       => 90,
		),
		array(
			'icon'        => 'briefcase',
			'title'       => 'B.Com — Bachelor of Commerce',
			'category'    => 'Degree',
			'duration'    => '3 Years',
			'level'       => 'Undergraduate',
			'description' => 'A Bangalore University affiliated degree blending core commerce with continuous UPSC / KPSC mentoring across all three years.',
			'highlights'  => array( 'BU affiliated', 'Finance & taxation', 'Integrated UPSC' ),
			'seats'       => 80,
		),
		array(
			'icon'        => 'building',
			'title'       => 'BBA — Business Administration',
			'category'    => 'Degree',
			'duration'    => '3 Years',
			'level'       => 'Undergraduate',
			'description' => 'Management foundations in marketing, HR and operations, combined with leadership and civil-services preparation for versatile careers.',
			'highlights'  => array( 'Management core', 'Leadership labs', 'Integrated UPSC' ),
			'seats'       => 60,
		),
		array(
			'icon'        => 'cap',
			'title'       => 'Integrated IAS / IPS Programme',
			'category'    => 'Civil Services',
			'duration'    => 'Across Degree',
			'level'       => 'UPSC / KPSC',
			'description' => 'Our flagship integrated track — degree education plus structured UPSC, KAS and PSC coaching from day one through prelims, mains and interview.',
			'highlights'  => array( 'Prelims to interview', 'Daily answer writing', 'Mentor panel' ),
			'seats'       => 100,
		),
	);
}

function ui_stats() {
	// "25+ years" is from the site; other figures are illustrative — replace with verified numbers.
	return array(
		array( 'value' => 25,   'suffix' => '+', 'label' => 'Years of Excellence',     'icon' => 'trend' ),
		array( 'value' => 5000, 'suffix' => '+', 'label' => 'Students Mentored',       'icon' => 'users' ),
		array( 'value' => 50,   'suffix' => '+', 'label' => 'University Rank Holders',  'icon' => 'trophy' ),
		array( 'value' => 100,  'suffix' => '%', 'label' => 'Integrated UPSC Approach', 'icon' => 'building' ),
	);
}

function ui_recruiters() {
	// Repurposed as the careers / exams we prepare students for.
	return array( 'UPSC', 'IAS', 'IPS', 'KAS', 'KPSC', 'Bangalore University', 'PU Board', 'CET', 'NEET Foundation', 'Civil Services' );
}

function ui_testimonials() {
	return array(
		array(
			'name'   => 'Keerthana R.',
			'role'   => 'Civil Services Aspirant · USA Batch',
			'avatar' => 'https://i.pravatar.cc/160?img=45',
			'quote'  => 'Starting UPSC preparation alongside my PU classes meant I never lost two precious years. By the time I finished my degree, prelims felt familiar rather than frightening.',
			'rating' => 5,
		),
		array(
			'name'   => 'Arjun Gowda',
			'role'   => 'B.Com Graduate & University Rank Holder',
			'avatar' => 'https://i.pravatar.cc/160?img=12',
			'quote'  => 'The integrated model kept me disciplined — degree lectures in the morning, answer-writing practice in the evening. The mentors treated every doubt as important.',
			'rating' => 5,
		),
		array(
			'name'   => 'Sahana M.',
			'role'   => 'PU Science · KAS Foundation Track',
			'avatar' => 'https://i.pravatar.cc/160?img=47',
			'quote'  => 'The current-affairs sessions and mind maps made polity and history genuinely enjoyable. I walked into my degree already comfortable with the UPSC syllabus.',
			'rating' => 5,
		),
		array(
			'name'   => 'Imran Pasha',
			'role'   => 'BBA Alumnus · UCC Coaching',
			'avatar' => 'https://i.pravatar.cc/160?img=33',
			'quote'  => 'Universal feels like a community, not a coaching factory. The faculty know you by name and push you toward both your degree results and your service dream.',
			'rating' => 5,
		),
	);
}

function ui_faculty() {
	return array(
		array( 'name' => 'Dr. Ramesh Prasad',     'title' => 'Director, Universal School of Administration', 'edu' => 'Civil Services Mentorship',     'avatar' => 'https://i.pravatar.cc/240?img=15' ),
		array( 'name' => 'Smt. Anitha Kulkarni',  'title' => 'Senior UPSC Mentor — Polity & Governance',     'edu' => 'Universal Coaching Centre',     'avatar' => 'https://i.pravatar.cc/240?img=49' ),
		array( 'name' => 'Prof. Venkatesh Rao',   'title' => 'Head, Pre-University Science',                 'edu' => 'PCMB / PCMC Faculty',           'avatar' => 'https://i.pravatar.cc/240?img=51' ),
		array( 'name' => 'Dr. Lakshmi Narayan',   'title' => 'Faculty, Commerce & Economics',                'edu' => 'Degree College',                'avatar' => 'https://i.pravatar.cc/240?img=20' ),
	);
}

function ui_gallery() {
	return array(
		array( 'src' => 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80', 'alt' => 'Library and reading hall', 'span' => 'span-2-col span-2-row' ),
		array( 'src' => 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80', 'alt' => 'Students in a UPSC discussion circle', 'span' => '' ),
		array( 'src' => 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=700&q=80', 'alt' => 'Felicitation of rank holders', 'span' => '' ),
		array( 'src' => 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=700&q=80', 'alt' => 'Science laboratory session', 'span' => '' ),
		array( 'src' => 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=700&q=80', 'alt' => 'Campus seminar hall', 'span' => 'span-2-col' ),
	);
}

/**
 * Inline SVG icon helper (Lucide-style paths).
 */
function ui_icon( $name, $class = '' ) {
	$paths = array(
		'cpu'       => '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
		'briefcase' => '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
		'palette'   => '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
		'chart'     => '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
		'health'    => '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
		'cap'       => '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
		'trend'     => '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
		'building'  => '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
		'trophy'    => '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
		'globe'     => '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
		'clock'     => '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
		'users'     => '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
		'arrow'     => '<path d="M5 12h14M12 5l7 7-7 7"/>',
		'arrow-up-right' => '<path d="M7 7h10v10M7 17 17 7"/>',
		'play'      => '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
		'sparkles'  => '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
		'award'     => '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
		'book'      => '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
		'calendar'  => '<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
		'file'      => '<path d="M16 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l5 5v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 15l2 2 4-4"/>',
		'phone'     => '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
		'pin'       => '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
		'mail'      => '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
		'send'      => '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
		'check'     => '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
		'star'      => '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
		'chevron-left'  => '<path d="m15 18-6-6 6-6"/>',
		'chevron-right' => '<path d="m9 18 6-6-6-6"/>',
		'arrow-up'  => '<path d="m5 12 7-7 7 7M12 19V5"/>',
		'facebook'  => '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
		'linkedin'  => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
		'twitter'   => '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
		'youtube'   => '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
		'instagram' => '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
		'quote'     => '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
		'menu'      => '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
		'close'     => '<path d="M18 6 6 18M6 6l12 12"/>',
	);

	$d = isset( $paths[ $name ] ) ? $paths[ $name ] : '';
	return '<svg class="' . esc_attr( $class ) . '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $d . '</svg>';
}
