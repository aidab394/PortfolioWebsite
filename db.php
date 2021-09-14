<?php 
    $c = mysqli_connect("localhost","root","","port");
    if (mysqli_connect_errno()) {
        die("Can't connect to database\nError: ".mysqli_connect_error());
    }
?>