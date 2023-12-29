<?php

include '../../includes/php/connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $barCode = $_POST["inputBarCode"];

    $stmt = $conn->prepare('UPDATE expdate SET quantidade = quantidade - 1 WHERE numeroId = ?');
    $stmt->bind_param('s', $barCode);
    $stmt->execute();

    if ($stmt->affected_rows != 0) {
        $sql = "SELECT * FROM expdate WHERE numeroId = '$barCode'";
        $result = mysqli_query($conn, $sql);
        
        if ($result) {
            if ($row = mysqli_fetch_assoc($result)) {

                $dateFormated = date('d/m/Y',strtotime( $row['datavalidade']));

                echo '    ';
                echo '        <div class=" productImageSell">';
                echo '            <img class=" productImageBarCode" src="' . $row['src'] . '" alt="">';
                echo '        </div>';


                echo '        <div class="productDescriptions">';
                echo '            <p>Produto:' . $row['nome'] . '</p>';
                echo '            <p>Data Validade: ' . $dateFormated . '</p>';
                echo '            <p>Quantidade disponível: ' . $row['quantidade'] . ' </p>';
                echo '        </div>';
                echo '        <div class="color">';
                echo '        </div>';

                echo '   ';

            }
        }


    }

} else {
    echo "Método de requisição inválido.";
}

