<?php
return [
    'name' => envv('APP_NAME', 'KAN Marketplace'),
    'url' => envv('APP_URL', 'http://localhost:8000'),
    'debug' => filter_var(envv('APP_DEBUG', false), FILTER_VALIDATE_BOOL),
    'locale' => 'en',
    'supported_locales' => ['en', 'es', 'fr'],
];
