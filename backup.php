
<?php
// Database credentials
$servername = "localhost";  // Database host (e.g., localhost or IP address)
$username = "root";         // Database username
$password = "";             // Database password
$dbname = "gopaldb";        // Database name

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message=$_POST['message'];

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare an SQL statement
    $sql = "INSERT INTO backup (name, email, message) VALUES ('$name', '$email','$message')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        header("Location: success.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>

