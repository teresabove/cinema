<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use \Firebase\JWT\JWT;
//require_once 'C:\xampp\htdocs\progetto\cinema\app\config\config.php';
require_once 'app\foundation\FSconto.php';
require_once 'app\entity\ESconto.php';

$app->get('/api/sconto/all',function(ServerRequestInterface $request, ResponseInterface $response){
    $f=new FSconto();
    $res=$f->loadall();
    $response= json_encode($res);
    return $response;
});


