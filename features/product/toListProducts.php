<?php

include '../../includes/php/connection.php';

try {
    $sql = 'SELECT * FROM produto ORDER BY nome';
    $result = mysqli_query($conn, $sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
           echo    ' <li class="itemSave">';
           echo    '    <div class="imgItemSave">';
           echo    '       <img id="thumbnailList'.$row["id"].'" src="'. $row['img'] .'" alt="thumbnail">';
           echo    '   </div>';
           echo    '   <p id="nameList'.$row["id"].'" class="productPSave">'.$row["nome"].'</p>';
           echo    '   <p  id="idList'.$row["id"].'" class="IdProductSave">'.$row["numeroId"].'</p>';
           echo    '   <div class="tagColorSave">';
           echo    '         <i onclick="colectData(\''.$row["id"].'\')" class="bi bi-pencil-fill"></i>';
           echo    '        <i onclick= "deleteProducts(\''.$row["id"].'\',\''.$row["img"].'\')"  class="bi bi-trash-fill"></i>';
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
