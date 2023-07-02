<?php
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

$email = $_GET['email'];

// Fetch the health report from the database
$sql = "SELECT file_name FROM health_reports JOIN users ON health_reports.user_id = users.id WHERE users.email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $fileName = $row['file_name'];
    $filePath = 'uploads/' . $fileName;

    // Check if the file exists
    if (file_exists($filePath)) {
        // Set appropriate headers
        header('Content-Type: application/pdf');
        header('Content-Disposition: inline; filename="' . $fileName . '"');

        // Output the file
        readfile($filePath);
    } else {
        echo "Health report not found for the given email ID.";
    }
} else {
    echo "Health report not found for the given email ID.";
}

$conn->close();
?>
