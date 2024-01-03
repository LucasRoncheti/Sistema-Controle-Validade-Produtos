<?php

echo '  <li  onclick="selectProduct(\'' . $row["id"] . '\', \'' . $row['img'] . '\', \'' . $row["nome"] . '\')" class="itemSave cursorPointer">';
echo '    <div class="imgItemSave">';
echo '       <img id="thumbnailList' . $row["id"] . '" src="' . $row['img'] . '" alt="thumbnail">';
echo '   </div>';
echo '   <p id="nameList' . $row["id"] . '" class="productPSave">' . $row["nome"] . '</p>';
echo '   <p  id="idList' . $row["id"] . '" class="IdProductSave">' . $row["numeroId"] . '</p>';
echo ' </li>';
