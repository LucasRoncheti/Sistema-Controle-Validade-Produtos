<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM produto ORDER BY nome';
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                include '../../includes/php/productsRegisterList.php';
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
