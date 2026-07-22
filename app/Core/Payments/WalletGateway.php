<?php
namespace App\Core\Payments;
class WalletGateway extends CashOnDeliveryGateway { public function createPayment(array $order): array {return ['status'=>'paid','redirect'=>'/customer/orders'];} }
