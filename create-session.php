<?php

require 'vendor/autoload.php';

define("BaseURL", $_SERVER['REQUEST_SCHEME']."://".$_SERVER["HTTP_HOST"]);

$amount = intval($_REQUEST["amount"]) * 100;

// live
\Stripe\Stripe::setApiKey('sk_live_');
// test
//\Stripe\Stripe::setApiKey('sk_test_');

header('Content-Type: application/json');

$checkout_session = \Stripe\Checkout\Session::create([

  'payment_method_types' => ['card',],
  'line_items' => [[
    'price_data' => [
      'currency' => 'usd',
      'unit_amount' => $amount,
      'product_data' => [
        'name' => 'MANtra Retreat Donation',
      ],
    ],
    'quantity' => 1,
  ]],

  'mode' => 'payment',
  'success_url' => BaseURL . '/success.html',
  'cancel_url' => BaseURL . '/cancel.html',

]);

echo json_encode(['id' => $checkout_session->id]);
