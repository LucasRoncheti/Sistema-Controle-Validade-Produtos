<?php

include '../../includes/php/connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $searchParam = $_POST['searchBar'];

    $searchParamWithWildcards = '%' . $searchParam . '%';

    $stmt = $conn->prepare("SELECT * FROM expdate WHERE nome LIKE ?  || numeroId LIKE ? ORDER BY nome");
    $stmt ->bind_param('ss',$searchParamWithWildcards,$searchParamWithWildcards);
    $stmt -> execute();
    $result = $stmt -> get_result();

    if($result){

        
        include '../../includes/php/headerListExpirationCode.php';
        while($row = $result ->fetch_assoc()){

            if($row['quantidade'] > 0){
   
            include '../../includes/php/listExpirationCode.php';
        }
        }

    }

   
    $conn->close();
}