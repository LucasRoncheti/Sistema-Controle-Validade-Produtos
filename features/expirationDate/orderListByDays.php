<?php
// sort the list using the buttons (2 meses, 1mes e 15 dias)

include '../../includes/php/connection.php';


$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['date'])) {
    $date = $data['date'];

    $limitDate1 = date('y-m-d', strtotime($date));

    if ($date === "0000-00-00") {

        $stmt = $conn->prepare("SELECT * FROM expdate WHERE inputBell != ? ORDER BY inputBell desc");
        $stmt->bind_param('s', $date);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result) {

            include '../../includes/php/headerListExpirationCode.php';

            while ($row = $result->fetch_assoc()) {


                $rowDatavalidade = strtotime($row['datavalidade']);


                $atualDate = strtotime(date("Y-m-d"));  // Obtém a data atual


                $diffInSeconds = $rowDatavalidade - $atualDate;


                $diffInDays = floor($diffInSeconds / (60 * 60 * 24));

                $tagColor = "";

                $rangeArray = range(31, 60);

                $rangeArray1 = range(16, 30);
                $rangeArray2 = range(60,10000);

                if ($row['quantidade'] > 0 && $row['inputBell'] != $date) {

                    switch ($diffInDays) {
                        case in_array($diffInDays, $rangeArray):
                            $tagColor = "green tagColor";
                            include '../../includes/php/listExpirationCode.php';
                         
                            break;

                            case in_array($diffInDays, $rangeArray2):
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

        }
       
    } else {

        $limitDate2 = date('y-m-d', strtotime($date));

        $stmt = $conn->prepare("SELECT * FROM expdate WHERE datavalidade <= ? ORDER BY datavalidade");
        $stmt->bind_param('s', $limitDate2);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result) {

            include '../../includes/php/headerListExpirationCode.php';

            while ($row = $result->fetch_assoc()) {


                $rowDatavalidade = strtotime($row['datavalidade']);


                $atualDate = strtotime(date("Y-m-d"));  // Obtém a data atual


                $diffInSeconds = $rowDatavalidade - $atualDate;


                $diffInDays = floor($diffInSeconds / (60 * 60 * 24));

                $tagColor = "";

                $rangeArray = range(31, 60);

                $rangeArray1 = range(16, 30);

                if ($row['quantidade'] > 0) {

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

        }




        $conn->close();
    }

}

