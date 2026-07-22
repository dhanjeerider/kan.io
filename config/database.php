<?php
return ['dsn' => sprintf('mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4', envv('DB_HOST','127.0.0.1'), envv('DB_PORT','3306'), envv('DB_DATABASE','kan_marketplace')), 'username' => envv('DB_USERNAME','root'), 'password' => envv('DB_PASSWORD','')];
