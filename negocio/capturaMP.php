<?php
require 'negocio/config.php';

$payment = $_GET['payment_id'];
$status = $_GET['status'];
$payment = $_GET['payment_type'];
$order_id = $_GET['merchant_order_id'];

echo "<h3>Pago Exitoso</h3>";
echo $payment.'<br';
echo $status.'<br';
echo $payment.'<br';
echo $order_id.'<br';

unset($_SESSION['carrito']);
?>