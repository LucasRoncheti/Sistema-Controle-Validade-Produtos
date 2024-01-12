<?php
header('Content-Type: text/plain');

include '../../includes/php/connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $productName = $_POST['productName'];
    $productIdZero = $_POST['productId'];
    $id = $_POST['id'];

    $uploadDirectory = '../../src/uploads/';
    $downloaddirectory  = './src/uploads/';

    if (!file_exists($uploadDirectory)) {
        mkdir($uploadDirectory, 0777, true);
    }

    if ($_FILES['image']) {
        $tempFile = $_FILES['image']['tmp_name'];

        // Obtenha a extensão do arquivo original
        $originalExtension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);

        // Construa o novo nome do arquivo usando o nome do produto e uma string única (timestamp)
        $newFileName = $productName . '_' . time() . '.' . $originalExtension;

        $targetFile = $uploadDirectory . $newFileName;
        $targetDownloadDirectory = $downloaddirectory . $newFileName;

        if (move_uploaded_file($tempFile, $targetFile)) {
            
            $stmt = $conn->prepare('UPDATE produto SET nome=?, numeroId=?, img=? WHERE id=?');
            $stmt->bind_param('sisi', $productName, $productIdZero, $targetDownloadDirectory, $id);
            $stmt->execute();
            

            if ($stmt->affected_rows > 0) {
                http_response_code(200);
                echo 'Produto atualizado com Sucesso!';
            } else {
                http_response_code(500);
                echo 'Erro ao atualizar Produto!';
            }
        } else {
            http_response_code(500);
            echo 'Erro ao fazer upload da imagem.';
        }
    } else {
        http_response_code(400);
        echo 'Nenhuma imagem recebida.';
    }
} else {
    http_response_code(400);
    echo 'Método de requisição inválido';
}

$conn->close();
?>
