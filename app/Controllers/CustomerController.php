<?php
namespace App\Controllers;
use App\Core\Controller; use App\Models\Order;
class CustomerController extends Controller { public function dashboard(){return $this->view('customer/dashboard',['orders'=>(new Order)->all('user_id=?',[\App\Core\Auth::user()['id']])]);} }
