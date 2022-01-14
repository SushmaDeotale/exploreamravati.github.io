<?php
$servername='localhost';
$username='root';
$password='';
$dbname = 'dwop';
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
if(isset($_POST['save']))
{	 
	 $name   =  $_POST['name'];
	 $email  =  $_POST['email'];
	 $mobile =  $_POST['mobile'];
	 $text   =  $_POST['text'];

	 
	 $sql = "INSERT INTO contact (name, email, mobile, text) VALUES('$name', '$email', '$mobile', '$text')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
		
	 } else {
		echo "Error: " . $sql . " " . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
include "index.html";
?>

