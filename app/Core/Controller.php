<?php
namespace App\Core;
class Controller { protected function view(string $view,array $data=[]): string { extract($data); ob_start(); require dirname(__DIR__)."/Views/{$view}.php"; $content=ob_get_clean(); ob_start(); require dirname(__DIR__).'/Views/layouts/app.php'; return ob_get_clean(); } protected function json(array $data,int $status=200): string { http_response_code($status); header('Content-Type: application/json'); return json_encode($data, JSON_THROW_ON_ERROR); } protected function redirect(string $to): string { header('Location: '.$to); return ''; } }
