<?php 

    //data to connect to a database server

    $serverName = "localhost";
    $username = "root";
    $password = "";
    $dbName = "sistemavalidadeprodutos";


    $conn = new mysqli($serverName, $username, $password, $dbName);


    if($conn->connect_error){
        die("Erro na conexão". $conn-> connect_error);
    }

?>