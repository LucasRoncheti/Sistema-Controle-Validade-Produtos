<?php

include '../../includes/php/connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $productImageExpiration = $_POST['productImageExpiration'];
    $productExpiration = $_POST['productExpiration'];
    $idProductExpiration = $_POST['idProductExpiration'];
    $buyDate = $_POST['buyDate'];
    $expirationDate = $_POST['expirationDate'];
    $amount = $_POST['amount'];
    $selectFloor = $_POST['selectFloor'];
    $inputRange = $_POST['inputRange'];
    $imageMap = $_POST['imageMap'];


    $stmt = $conn->prepare('INSERT INTO
     expdate  (src, nome , numeroId, datacompra, datavalidade, quantidade, andarPrateleira ,mapa, srcmapa) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)' );

    $stmt ->bind_param('ssissiiis',
    $productImageExpiration,
    $productExpiration,
    $idProductExpiration,
    $buyDate,
    $expirationDate,
    $amount,
    $selectFloor,
    $inputRange,
    $imageMap);

    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        http_response_code(200);
        echo 'Produto Salvo com Sucesso!';
    } else {
        http_response_code(500);
        echo 'Erro ao cadastrar Produto!';
    }


}else{
    http_response_code(400);
    echo 'Método de requisição inválido';
}