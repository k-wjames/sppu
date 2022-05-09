<?php

$con=new mysqli('localhost','root','','sppu');

if($con){
    echo "Connection Successful"
}else{
    die(mysqli_error($con));
}

?>