<?php
namespace App\Core\Payments;
interface PaymentGatewayInterface { public function createPayment(array $order): array; public function verifyWebhook(string $payload,array $headers): bool; public function refund(array $order,float $amount): array; }
