<?php
namespace App\Core\Payments;
class CashOnDeliveryGateway implements PaymentGatewayInterface { public function createPayment(array $order): array {return ['status'=>'pending','redirect'=>'/customer/orders'];} public function verifyWebhook(string $payload,array $headers): bool {return true;} public function refund(array $order,float $amount): array {return ['status'=>'manual','amount'=>$amount];} }
