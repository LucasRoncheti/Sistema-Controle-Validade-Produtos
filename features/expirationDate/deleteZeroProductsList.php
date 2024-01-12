<?php
// delete the product 
include '../../includes/php/connection.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));
$productIdZero = $data->id;




$sql = "DELETE FROM expdate WHERE id = $productIdZero";

$result = $conn->query($sql);

if ($result === TRUE) {


    $response = array("success" => true);
} else {
    $response = array("success" => false, "error" => $conn->error);
}


$conn->close();

echo json_encode($response);
?>