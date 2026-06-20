<?php
/**
 * Contact / admission enquiry form handler (no plugin required).
 * Submits to admin-post.php with a nonce, validates, emails the admin,
 * then redirects back with a status flag.
 *
 * @package Universal_Institutions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ui_handle_contact() {
	// Verify nonce.
	if ( ! isset( $_POST['ui_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['ui_contact_nonce'] ) ), 'ui_contact' ) ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'error', home_url( '/#contact' ) ) );
		exit;
	}

	$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$program = isset( $_POST['program'] ) ? sanitize_text_field( wp_unslash( $_POST['program'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

	// Validate.
	$valid_name  = strlen( $name ) >= 2;
	$valid_email = is_email( $email );
	$valid_phone = (bool) preg_match( '/^[0-9+\-\s]{8,15}$/', $phone );

	if ( ! $valid_name || ! $valid_email || ! $valid_phone ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'invalid', home_url( '/#contact' ) ) );
		exit;
	}

	// Email the admin.
	$to      = get_option( 'admin_email' );
	$subject = sprintf( '[Admission Enquiry] %s', $name );
	$body    = sprintf(
		"New admission enquiry from the website:\n\nName: %s\nEmail: %s\nPhone: %s\nProgram: %s\n\nMessage:\n%s\n",
		$name,
		$email,
		$phone,
		$program,
		$message
	);
	$headers = array( 'Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $name . ' <' . $email . '>' );

	wp_mail( $to, $subject, $body, $headers );

	// TODO: forward to your CRM here if needed.

	wp_safe_redirect( add_query_arg( 'enquiry', 'success', home_url( '/#contact' ) ) );
	exit;
}
add_action( 'admin_post_nopriv_ui_contact', 'ui_handle_contact' );
add_action( 'admin_post_ui_contact', 'ui_handle_contact' );
