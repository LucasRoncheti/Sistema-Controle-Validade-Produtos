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
        
        include '../../includes/php/productsLi.php';
        
    }

    $conn->close();
}