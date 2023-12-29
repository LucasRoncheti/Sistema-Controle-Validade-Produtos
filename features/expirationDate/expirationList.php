<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM expdate ORDER BY datavalidade';
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if ($result->num_rows > 0) {

            while ($row = mysqli_fetch_assoc($result)) {

                
            if($row['quantidade'] > 0){
                
            $convertedDate = date('d/m/Y', strtotime($row['datavalidade']));
            $dataCompra = date('d/m/Y', strtotime($row['datacompra']));
                
            echo '    <li onclick="popUpInfoProducts(\''.$dataCompra.'\',\''.$row['andarPrateleira'].'\',\''.$row['mapa'].'\',\''.$row['srcmapa'].'\')" class="item">';
            echo '        <div class="imgItem">';
            echo '            <img src="'.$row['src'].'" alt="">';
            echo '        </div>';
            echo '        <p class="productP">'.$row['nome'].'</p>';
            echo '        <p class="idP">'.$row['numeroId'].'</p>';
            echo '        <p class="dateP">'.$convertedDate.'</p>';
            echo '        <p class="quantityP">'.$row['quantidade'].'</p>';
            echo '        <div class=" green tagColor"></div>';
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