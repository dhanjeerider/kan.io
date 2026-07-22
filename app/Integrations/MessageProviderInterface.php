<?php
namespace App\Integrations; interface MessageProviderInterface { public function sendSms(string $phone,string $message): bool; public function sendWhatsApp(string $phone,string $message): bool; public function sendEmail(string $email,string $subject,string $html): bool; }
