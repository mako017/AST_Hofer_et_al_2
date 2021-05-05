<?php
require_once('db.class.php');
DB::$host = 'host';
DB::$user = 'user';
DB::$password = 'password';
DB::$dbName = 'dbName';
DB::$encoding = 'utf8';

function serverResponse(string $call, $payload="")
{
    $response = (object)["call"=> $call, "payload" => $payload];
    echo json_encode($response);
}