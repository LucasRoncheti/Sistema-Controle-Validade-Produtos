<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM produto ORDER BY nome';
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row_sql = mysqli_fetch_assoc($result)) {
           echo    ' <li class="itemSave">';
           echo    '    <div class="imgItemSave">';
           echo    '       <img src="'. $row_sql['img'] .'" alt="thumbnail">';
           echo    '   </div>';
           echo    '   <p class="productPSave">'.$row_sql["nome"].'</p>';
           echo    '   <p class="IdProductSave">'.$row_sql["numeroId"].'</p>';
           echo    '   <div class="tagColorSave">';
           echo    '         <i class="bi bi-pencil-fill"></i>';
           echo    '        <i onclick= "deleteProducts(\''.$row_sql["id"].'\',\''.$row_sql["img"].'\')"  class="bi bi-trash-fill"></i>';
           echo    '     </div>';
           echo    ' </li>';
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
