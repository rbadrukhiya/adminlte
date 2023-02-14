<?php 

$conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');

$data = json_decode(file_get_contents('php://input'), true);



	$id = $data['id'];
	$status = $data['status'];

	$yo = "update comment set status = '$status' where id = '$id'";

	mysqli_query($conn, $yo);

 ?>