<?php
use App\Controllers\Api\ApiController;
$router->get('/api/v1/products', [ApiController::class,'products']);
$router->get('/api/v1/categories', [ApiController::class,'categories']);
$router->get('/api/v1/vendors/{slug}', [ApiController::class,'vendor']);
$router->post('/api/v1/auth/login', [ApiController::class,'login']);
$router->post('/api/v1/orders', [ApiController::class,'order']);
$router->get('/api/v1/payments/{reference}', [ApiController::class,'payment']);
