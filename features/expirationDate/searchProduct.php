<?php

include '../../includes/php/connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $searchParam = $_POST['searchBar'];

    $searchParamWithWildcards = '%' . $searchParam . '%';

    $stmt = $conn->prepare("SELECT * FROM produto WHERE nome  LIKE ?");
    $stmt ->bind_param('s',$searchParamWithWildcards);
    $stmt -> execute();
    $result = $stmt -> get_result();

    while($row = $result ->fetch_assoc()){
             echo '  <li  onclick="selectProduct(\'' . $row["id"] . '\', \'' . $row['img'] . '\', \'' . $row["nome"] . '\')" class="itemSave cursorPointer">';
            echo '    <div class="imgItemSave">';
            echo '       <img id="thumbnailList' . $row["id"] . '" src="' . $row['img'] . '" alt="thumbnail">';
            echo '   </div>';
            echo '   <p id="nameList' . $row["id"] . '" class="productPSave">' . $row["nome"] . '</p>';
            echo '   <p  id="idList' . $row["id"] . '" class="IdProductSave">' . $row["numeroId"] . '</p>';
            echo ' </li>';
    }

    $conn->close();
}