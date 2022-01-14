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
	 $email= $_POST['email'];
	 $pwd= $_POST['pwd'];

	 $sql = "INSERT INTO projects (email, pwd) VALUES ('$email','$pwd')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
		
	 } else {
		echo "Error: " . $sql . " " . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>