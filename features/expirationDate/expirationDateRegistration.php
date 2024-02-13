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
    $inputBell = $_POST['inputBell'];

    // Verificar se o registro já existe
    $stmtIdExpirationVerify = $conn->prepare('SELECT COUNT(*) FROM expdate WHERE numeroId = ?');
    $stmtIdExpirationVerify->bind_param('s', $idProductExpiration);
    $stmtIdExpirationVerify->execute();
    $stmtIdExpirationVerify->bind_result($count);
    $stmtIdExpirationVerify->fetch();
    $stmtIdExpirationVerify->close();

    if ($count > 0) {
        // Se o registro já existir, retornar uma mensagem de erro
        http_response_code(409); // 409 Conflict
        echo 'O registro já existe no banco de dados.';
    } else {
        // Se o registro não existir, proceder com a inserção
        $stmt = $conn->prepare('INSERT INTO expdate (src, nome, numeroId, datacompra, datavalidade, quantidade, andarPrateleira, mapa, srcmapa, inputBell) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
        $stmt->bind_param(
            'ssissiiiss',
            $productImageExpiration,
            $productExpiration,
            $idProductExpiration,
            $buyDate,
            $expirationDate,
            $amount,
            $selectFloor,
            $inputRange,
            $imageMap,
            $inputBell
        );

        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            http_response_code(200);
            echo 'Produto Salvo com Sucesso!';
        } else {
            http_response_code(500);
            echo 'Erro ao cadastrar Produto!';
        }
    }

} else {
    http_response_code(400);
    echo 'Método de requisição inválido';
}
?>
