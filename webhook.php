<?php

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey('sk_test_51Hi2SOKIPeeja8WuZjT9UMWYe08Db2rKSmyx5cZw0mB3v0GP4eDB5BcTTRooGZGkVXlKZpsXAsxs732dzdZBb11o00S1cqNgEJ');

function log($val) {
  return file_put_contents('php://stderr', print_r($val, TRUE));
}

// You can find your endpoint's secret in your webhook settings
$endpoint_live = 'whsec_n8fAZxgPri3FeyK6phy3EMxN73LXyIdq';
$endpoint_test = 'whsec_Fmzv1IGqUOycmp4T3u8JgY8Cg0vxJRpn';

$endpoint_secret = $endpoint_test;

$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
$event = null;

try {
    $event = \Stripe\Webhook::constructEvent(
      $payload, $sig_header, $endpoint_secret
    );
  } catch(\UnexpectedValueException $e) {
    // Invalid payload
    http_response_code(400);
    exit();
  } catch(\Stripe\Exception\SignatureVerificationException $e) {
    // Invalid signature
    http_response_code(400);
    exit();
  }

  log("Passed signature verification!");
  http_response_code(200);

?>
