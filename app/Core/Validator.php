<?php
namespace App\Core;
final class Validator { public static function require(array $data,array $fields): array { $e=[]; foreach($fields as $f) if(trim((string)($data[$f]??''))==='') $e[$f]='Required'; return $e; } }
