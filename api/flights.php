<?php

$data = $_GET;

if(!empty($data['code'])){
  $code = $data['code'];
  $page = 1;
  $baseUrl = getcwd().'/flights/';
  if(!empty($data['page'])){
    $page = $data['page'];
  }
  $response = file_get_contents($baseUrl.$page.'.json');
  echo $response;exit();
}
echo json_encode(array());exit();