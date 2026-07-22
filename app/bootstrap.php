<?php
declare(strict_types=1);

spl_autoload_register(function (string $class): void {
    $prefix = 'App\\';
    if (str_starts_with($class, $prefix)) {
        $path = __DIR__ . '/' . str_replace('\\', '/', substr($class, strlen($prefix))) . '.php';
        if (is_file($path)) require $path;
    }
});

function envv(string $key, mixed $default = null): mixed {
    static $loaded = false;
    if (!$loaded && is_file(dirname(__DIR__) . '/.env')) {
        foreach (file(dirname(__DIR__) . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            if ($line === '' || str_starts_with(trim($line), '#') || !str_contains($line, '=')) continue;
            [$k, $v] = explode('=', $line, 2);
            $_ENV[trim($k)] = trim($v, " \t\n\r\0\x0B\"");
        }
        $loaded = true;
    }
    return $_ENV[$key] ?? getenv($key) ?: $default;
}
function config(string $key, mixed $default = null): mixed {
    [$file, $name] = array_pad(explode('.', $key, 2), 2, null);
    $data = require dirname(__DIR__) . "/config/{$file}.php";
    return $name ? ($data[$name] ?? $default) : $data;
}
function e(mixed $value): string { return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8'); }
function url(string $path = ''): string { return rtrim((string)config('app.url'), '/') . '/' . ltrim($path, '/'); }
