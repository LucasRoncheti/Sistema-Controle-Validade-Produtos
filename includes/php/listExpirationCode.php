<?php



$rowDatavalidade = strtotime($row['datavalidade']);

$atualDate = strtotime(date("Y-m-d"));

$diffInSeconds = $rowDatavalidade - $atualDate;
// Converte a diferença de segundos para dias
$diffInDays = floor($diffInSeconds / (60 * 60 * 24));



// conditional for the ico bell display ot not in the list of expirations date
$rowDataBell = strtotime($row['inputBell']);

$limitDate = "0000-00-00";
$limitDateConvet = strtotime($limitDate);

$tagColor = "";

if ($diffInDays <= 60 && $diffInDays >= 31) {
    $tagColor = "green tagColor";
} else if ($diffInDays <= 30 && $diffInDays >= 16) {
    $tagColor = "orange tagColor";
} else if ($diffInDays <= 15 || $diffInDays <= 0) {
    $tagColor = "red  tagColor";
} else {
    $tagColor = "green  tagColor";
}

$positionMap = $row['mapa'] / 3.7;
$roundPositionMap = round($positionMap);

$convertedDate = date('d/m/Y', strtotime($row['datavalidade']));
$dataCompra = date('d/m/Y', strtotime($row['datacompra']));

echo '    <li ontouchstart="touchStartAction(this,\'' . $row['nome'] . '\',\'' . $row['id'] . '\')" ontouchend="touchEndAction()" onmousedown="mouseDownAction(this,\'' . $row['nome'] . '\',\'' . $row['id'] . '\')" onclick="popUpInfoProducts(\'' . $dataCompra . '\',\'' . $row['andarPrateleira'] . '\',\'' . $roundPositionMap . '\',\'' . $row['srcmapa'] . '\')" class="item">';
echo '        <div class="imgItem">';
echo '            <img src="' . $row['src'] . '" alt="">';
echo '        </div>';
echo '        <p class="productP">' . $row['nome'] . '</p>';
echo '        <p class="idP">' . $row['numeroId'] . '</p>';
echo '        <p class="dateP">' . $convertedDate . '</p>';
echo '        <p class="quantityP">' . $row['quantidade'] . '</p>';
                if($rowDataBell <= $atualDate && $rowDataBell > $limitDateConvet ){
                    echo '        <div class="' . $tagColor . '"> ' . $diffInDays . ' Dias <i  class=" bellList bi bi-bell-fill"></i> </div>';
                }else{
                    echo '        <div class="' . $tagColor . '"> ' . $diffInDays . ' Dias  </div>';
                }
echo '<input id='. $row['id'] .' type="hidden" value='. $row['id'] .'>' ;                     
echo '    </li>';


