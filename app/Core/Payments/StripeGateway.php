<?php
namespace App\Core\Payments;
class StripeGateway implements PaymentGatewayInterface { public function createPayment(array $order): array {return ['status'=>'requires_action','redirect'=>'/checkout/confirm?gateway=stripe&order='.$order['id']];} public function verifyWebhook(string $payload,array $headers): bool { $secret=envv('STRIPE_WEBHOOK_SECRET',''); $sig=$headers['Stripe-Signature']??''; return $secret!=='' && hash_equals(hash_hmac('sha256',$payload,$secret),$sig); } public function refund(array $order,float $amount): array {return ['status'=>'queued','amount'=>$amount];} }
