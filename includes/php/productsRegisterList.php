<?php 

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