<?php
namespace App\Controllers;
use App\Core\{Controller,Request,Auth,Csrf}; use App\Models\Order; use App\Core\Payments\PaymentManager;
class CheckoutController extends Controller { public function checkout(){return $this->view('checkout/index',['cart'=>$_SESSION['cart']??[]]);} public function place(Request $r){Csrf::check($r->get('_csrf')); $id=(new Order)->createFromCart(Auth::user()['id'],$_SESSION['cart']??[],$r->get('payment_method','cod')); $_SESSION['cart']=[]; $payment=PaymentManager::gateway($r->get('payment_method','cod'))->createPayment(['id'=>$id]); return $this->redirect($payment['redirect']);} }
