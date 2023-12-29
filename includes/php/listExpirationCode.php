<?php

$convertedDate = date('d/m/Y', strtotime($row['datavalidade']));
$dataCompra = date('d/m/Y', strtotime($row['datacompra']));

echo '    <li onclick="popUpInfoProducts(\'' . $dataCompra . '\',\'' . $row['andarPrateleira'] . '\',\'' . $row['mapa'] . '\',\'' . $row['srcmapa'] . '\')" class="item">';
echo '        <div class="imgItem">';
echo '            <img src="' . $row['src'] . '" alt="">';
echo '        </div>';
echo '        <p class="productP">' . $row['nome'] . '</p>';
echo '        <p class="idP">' . $row['numeroId'] . '</p>';
echo '        <p class="dateP">' . $convertedDate . '</p>';
echo '        <p class="quantityP">' . $row['quantidade'] . '</p>';
echo '        <div class=" ' . $tagColor . '"> ' . $diffInDays . ' Dias </div>';
echo '    </li>';