<?php

include '../../includes/php/connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $searchParam = $_POST['searchBar'];

    $searchParamWithWildcards = '%' . $searchParam . '%';

    $stmt = $conn->prepare("SELECT * FROM expdate WHERE nome LIKE ?  || numeroId LIKE ? ORDER BY nome");
    $stmt ->bind_param('ss',$searchParamWithWildcards,$searchParamWithWildcards);
    $stmt -> execute();
    $result = $stmt -> get_result();

    

    while($row = $result ->fetch_assoc()){

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
    $conn->close();
}