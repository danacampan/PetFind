<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $streetName = $_POST["streetName"];

    // Handle file upload
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["photo"]["name"]);
    move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile);

    $emailTemplate = file_get_contents("email_template.html");

    // Replace placeholders in email template with data
    $emailBody = str_replace("{{streetName}}", $streetName, $emailTemplate);
    $emailBody = str_replace("{{photoUrl}}", $targetFile, $emailBody);

    $to = "maria.campan03@e-uvt.ro";
    $subject = "Lost Pet Report";
    $headers = "From: campan.dana15@gmail.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $emailBody, $headers)) {
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        echo json_encode(["error" => "Failed to send email"]);
    }
}
?>
