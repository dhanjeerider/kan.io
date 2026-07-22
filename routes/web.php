<?php
use App\Controllers\{ShopController,AuthController,AdminController,VendorController,CustomerController,CheckoutController};
$router->get('/', [ShopController::class,'home']);
$router->get('/product/{slug}', [ShopController::class,'product']);
$router->get('/cart', [ShopController::class,'cart']);
$router->post('/cart/add', [ShopController::class,'addCart']);
$router->get('/login', [AuthController::class,'login']); $router->post('/login', [AuthController::class,'doLogin']);
$router->get('/register', [AuthController::class,'register']); $router->post('/register', [AuthController::class,'doRegister']);
$router->post('/logout', [AuthController::class,'logout']);
$router->get('/checkout', [CheckoutController::class,'checkout'], ['auth']); $router->post('/checkout/place', [CheckoutController::class,'place'], ['auth']);
$router->get('/admin', [AdminController::class,'dashboard'], ['admin']); $router->get('/admin/vendors', [AdminController::class,'vendors'], ['admin']); $router->post('/admin/vendors/{id}', [AdminController::class,'approveVendor'], ['admin']); $router->get('/admin/reports/orders.csv', [AdminController::class,'reports'], ['admin']);
$router->get('/vendor', [VendorController::class,'dashboard'], ['vendor']); $router->get('/vendor/products', [VendorController::class,'products'], ['vendor']); $router->post('/vendor/products', [VendorController::class,'saveProduct'], ['vendor']);
$router->get('/customer', [CustomerController::class,'dashboard'], ['auth']);
