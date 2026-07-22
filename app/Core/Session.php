<?php
namespace App\Core;
final class Session { public static function start(): void { if(session_status()!==PHP_SESSION_ACTIVE){ session_set_cookie_params(['httponly'=>true,'samesite'=>'Lax','secure'=>isset($_SERVER['HTTPS'])]); session_start(); } } public static function flash($k,$v=null){ if($v!==null) $_SESSION['_flash'][$k]=$v; $x=$_SESSION['_flash'][$k]??null; unset($_SESSION['_flash'][$k]); return $x; } }
