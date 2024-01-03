<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM expdate ORDER BY datavalidade';
    $result = mysqli_query($conn, $sql);

    if ($result) {

        
        include '../../includes/php/headerListExpirationCode.php';
        if ($result->num_rows > 0) {

            while ($row = mysqli_fetch_assoc($result)) {


                if ($row['quantidade'] > 0) {

                    include '../../includes/php/listExpirationCode.php';
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