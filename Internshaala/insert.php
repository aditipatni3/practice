<?php
// Get the form data
$name = $_POST['name'];
$age = $_POST['age'];
$weight = $_POST['weight'];
$email = $_POST['email'];

// MySQL database connection configuration
$servername = 'localhost';
$username = '';
$password = '';
$dbname = '';

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert the user details into the database
$sql = "INSERT INTO users (name, age, weight, email) VALUES ('$name', $age, $weight, '$email')";

if ($conn->query($sql) === TRUE) {
    $userId = $conn->insert_id; // Get the inserted user ID

    // Handle the uploaded PDF file
    $healthReportFile = $_FILES['healthReport']['tmp_name'];
    $healthReportName = $_FILES['healthReport']['name'];

    $targetDir = 'uploads/';
    $targetFile = $targetDir . basename($healthReportName);

    if (move_uploaded_file($healthReportFile, $targetFile)) {
        // Insert the file details into the database
        $sql = "INSERT INTO health_reports (user_id, file_name) VALUES ($userId, '$healthReportName')";
        if ($conn->query($sql) === TRUE) {
            echo "User details and health report uploaded successfully!";
        } else {
            echo "Error inserting health report: " . $conn->error;
        }
    } else {
        echo "Error uploading health report: " . $_FILES['healthReport']['error'];
    }
} else {
    echo "Error inserting user details: " . $conn->error;
}

$conn->close();
?>
