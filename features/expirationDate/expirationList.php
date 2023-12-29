<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM expdate ORDER BY datavalidade';
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if ($result->num_rows > 0) {

            while ($row = mysqli_fetch_assoc($result)) {

                
            if($row['quantidade'] > 0){



               // Supondo que $row['datavalidade'] seja uma data no formato "Y-m-d"
        $rowDatavalidade = strtotime($row['datavalidade']);

        // Supondo que $atualDate seja a data atual no formato "Y-m-d"
        $atualDate = strtotime(date("Y-m-d"));  // Obtém a data atual

        // Calcula a diferença em segundos
        $diffInSeconds = $rowDatavalidade - $atualDate;

        // Converte a diferença de segundos para dias
        $diffInDays = floor($diffInSeconds / (60 * 60 * 24));

        $tagColor ="";

        if($diffInDays <= 60 && $diffInDays >= 31){
            $tagColor ="green tagColor";
        }
        else if($diffInDays <= 30 && $diffInDays >= 16){
            $tagColor ="orange tagColor";
        }
        else if($diffInDays <= 15 && $diffInDays >= 0){
            $tagColor = "red  tagColor";
        }else{
            $tagColor = "green  tagColor";
        }

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