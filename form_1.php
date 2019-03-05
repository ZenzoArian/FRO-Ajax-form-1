<?php
// Zenzo Arian MD1B
	$firstName = $_GET['firstName'];
	$lastName = $_GET['lastName'];
	$age = $_GET['age'];
	$Email = $_GET['Email'];
	echo "<h2>Response Demo Form</h2><h3> ";
	echo "You submitted the following information<br><ul>";
	echo "<li>Name: <strong> $firstName $lastName</strong></li>";
	echo "<li>Age: <strong> $age</strong></li>";
	echo "<li>e-mail: <strong> $Email</strong></li>";
	echo "<br><br>date is " . date("Y-m-d") . "<br>";
	echo "The time is " . date("h:i:sa");
	echo "</li></ul></h3>";
?>
