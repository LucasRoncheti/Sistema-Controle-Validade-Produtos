<?php

include '../../includes/php/connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $searchParam = $_POST['searchBar'];

    $searchParamWithWildcards = '%' . $searchParam . '%';

    $stmt = $conn->prepare("SELECT * FROM produto WHERE nome LIKE ?  || numeroId LIKE ?");
    $stmt ->bind_param('ss',$searchParamWithWildcards,$searchParamWithWildcards);
    $stmt -> execute();
    $result = $stmt -> get_result();

    while($row = $result ->fetch_assoc()){
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

    $conn->close();
}