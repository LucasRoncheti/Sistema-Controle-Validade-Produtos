<?php

include '../../includes/php/connection.php';


$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['date01']) && isset($data['date02'])) {
    $date01 = $data['date01'];
    $date02 = $data['date02'];

    $dateFormat1 = date('Y-m-d', strtotime($date01));
    $dateFormat2 = date('Y-m-d', strtotime($date02));

    $stmt = $conn->prepare("SELECT * FROM expdate WHERE datavalidade  BETWEEN ? AND ? ORDER BY datavalidade ");
    $stmt->bind_param('ss', $dateFormat1, $dateFormat2);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result) {

        
        include '../../includes/php/headerListExpirationCode.php';

        while ($row = $result->fetch_assoc()) {

           //calculate the days of the searched date
            $rowDatavalidade = strtotime($row['datavalidade']);

           
            $atualDate = strtotime(date("Y-m-d")); 


            $diffInSeconds = $rowDatavalidade - $atualDate;

            
            $diffInDays = floor($diffInSeconds / (60 * 60 * 24));

            $tagColor = "";

            $rangeArray = range(31, 60);

            $rangeArray1 = range(16, 30);


            switch ($diffInDays) {
                case in_array($diffInDays, $rangeArray):
                    $tagColor = "green tagColor";
                    include '../../includes/php/listExpirationCode.php';
              
                    break;

                case in_array($diffInDays, $rangeArray1):
                    $tagColor = "orange tagColor";
                    include '../../includes/php/listExpirationCode.php';
                    break;

                case ($diffInDays <= 15 && $diffInDays >= 0):
                    $tagColor = "red tagColor";
                    include '../../includes/php/listExpirationCode.php';
                   
                    break;

            }
        }
    }

    $conn->close();
}

