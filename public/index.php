<?php
declare(strict_types=1);

use App\Core\{App, Router};

require __DIR__ . '/../app/bootstrap.php';

$router = new Router();
require __DIR__ . '/../routes/web.php';
require __DIR__ . '/../routes/api.php';
(new App($router))->run();
