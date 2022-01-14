<?php
$servername='localhost';
$username='root';
$password='';
$dbname ='registordoc';
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
if(isset($_POST['save']))
{	 
	 
	 $email = $_POST['email'];
	 $password = $_POST['password'];
	
	 
	 
	 $sql = "INSERT INTO registordoctor (email, password) VALUES('$email', '$password')";
	 if (mysqli_query($conn, $sql)) 
	 {
		echo "Record Submit Successfully !";
		
		
	 } else {
		echo "Error: " . $sql . " " . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
include 'submit.php';
?>