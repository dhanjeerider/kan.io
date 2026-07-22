<?php
return [
    'default' => 'cod',
    'gateways' => [
        'cod' => App\Core\Payments\CashOnDeliveryGateway::class,
        'wallet' => App\Core\Payments\WalletGateway::class,
        'stripe' => App\Core\Payments\StripeGateway::class,
    ],
];
