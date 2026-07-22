<?php
namespace App\Core;
final class App { public function __construct(private Router $router){} public function run(): void { Session::start(); echo $this->router->dispatch(Request::capture()); } }
