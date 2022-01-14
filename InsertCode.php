<?php
$servername='localhost';
$username='root';
$password='';
$dbname ='logindoc';
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
if(isset($_POST['save']))
{	 
	 $firstname = $_POST['firstname'];
	 $lastname =$_POST['lastname'];
	 $email = $_POST['email'];
	 $enterpassword = $_POST['enterpassword'];
	  $confirmpassword = $_POST['confirmpassword'];
	 
	 
	 $sql = "INSERT INTO logindoctor (firstname, lastname, email, enterpassword, confirmpassword) VALUES('$firstname', '$lastname', '$email', '$enterpassword', '$confirmpassword')";
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