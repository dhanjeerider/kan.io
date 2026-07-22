<?php
namespace App\Core\Payments;
final class PaymentManager { public static function gateway(string $name): PaymentGatewayInterface { $map=config('payments.gateways'); $class=$map[$name]??$map[config('payments.default')]; return new $class; } }
