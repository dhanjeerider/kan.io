<?php
namespace App\Integrations; interface ShippingProviderInterface { public function quote(array $address,array $items): array; public function createLabel(array $shipment): array; public function track(string $trackingNumber): array; }
