<?php
namespace App\Core;
final class Csrf { public static function token(): string { return $_SESSION['_csrf'] ??= bin2hex(random_bytes(32)); } public static function check(?string $t): void { if(!hash_equals($_SESSION['_csrf']??'', (string)$t)){ http_response_code(419); exit('CSRF token mismatch'); } } }
