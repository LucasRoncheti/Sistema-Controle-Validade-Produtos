<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM expdate ORDER BY datavalidade';
    $result = mysqli_query($conn, $sql);

    if ($result) {

        echo '    <li   class="itemMainLIst">';
        echo '        <div class="imgItem">';
        echo '            <img src="src/img/cameraicon.png" alt="">';
        echo '        </div>';
        echo '        <p class="productP">Nome do produto</p>';
        echo '        <p class="idP">Numero id</p>';
        echo '        <p class="quantityP">Quant.</p>';
       
        echo '    </li>';

        if ($result->num_rows > 0) {

            while ($row = mysqli_fetch_assoc($result)) {


                if ($row['quantidade'] == 0) {

                    echo '    <li  onclick="deleteProductList(\''.$row['id'].'\')" class="itemListZero">';
                    echo '        <div class="imgItem">';
                    echo '            <img src="' . $row['src'] . '" alt="">';
                    echo '        </div>';
                    echo '        <p class="productP">' . $row['nome'] . '</p>';
                    echo '        <p class="idP">' . $row['numeroId'] . '</p>';
                    echo '        <p class="quantityP">' . $row['quantidade'] . '</p>';
             
                    echo '    </li>';
                }
            }
        } else {
            echo '<p style ="text-align:center;">Nenhum resultado encontrado</p>';
        }
    } else {
        throw new Exception('Erro na execução da consulta SQL: ' . mysqli_error($conn));
    }
} catch (Exception $e) {
    echo 'Erro: ' . $e->getMessage();
}

$conn->close();
?>