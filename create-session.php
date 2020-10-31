<?php

require 'vendor/autoload.php';

define("BaseURL", $_SERVER['REQUEST_SCHEME']."://".$_SERVER["HTTP_HOST"]."/");

$amount = $_POST["amount"];
echo "\$amount: $amount";

\Stripe\Stripe::setApiKey('pk_test_51Hi2SOKIPeeja8WuNPPtMa8YjaahUEyrGNhO9CjYOS1gwIqZd1s1m98LUADOxGwaNVJV9j8TkHrwd9bGDSPuBpE600AH97lBDh');

header('Content-Type: application/json');

$checkout_session = \Stripe\Checkout\Session::create([

  'payment_method_types' => ['card'],

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

  'success_url' => $baseURL . 'success.html',

  'cancel_url' => $baseURL . 'cancel.html',

]);

echo json_encode(['id' => $checkout_session->id]);
