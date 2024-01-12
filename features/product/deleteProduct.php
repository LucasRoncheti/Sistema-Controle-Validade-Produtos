<?php
// delete the product 
include '../../includes/php/connection.php';
header('Content-Type: application/json');


$data = json_decode(file_get_contents("php://input"));
$productIdZero = $data->id;



$sqlImg = "SELECT img FROM produto WHERE id = $productIdZero";
$result = mysqli_query($conn, $sqlImg);
if ($result) {
    if ($result->num_rows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $pathImage = $row['img'];
        }
    }
}

$caminhoDoArquivo = "../." . $pathImage;

if (file_exists($caminhoDoArquivo)) {
    if (unlink($caminhoDoArquivo)) {


        $sql = "DELETE FROM produto WHERE id = $productIdZero";

        $result = $conn->query($sql);

        if ($result === TRUE) {



            $response = array("success" => true);
        } else {
            $response = array("success" => false, "error" => $conn->error);
        }

    }
}



$conn->close();



echo json_encode($response);
?>