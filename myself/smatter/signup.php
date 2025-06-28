<?php
session_start();
require 'db.php';

function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = sanitize_input($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if (empty($email) || empty($password) || empty($confirm_password)) {
        $message = "All fields are required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Invalid email format.";
    } elseif ($password !== $confirm_password) {
        $message = "Passwords do not match.";
    } else {
        // Check if user already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            $message = "User with this email already exists.";
        } else {
            // Hash the password
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            // Insert new user
            $stmt_insert = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
            $stmt_insert->bind_param("ss", $email, $password_hash);

            if ($stmt_insert->execute()) {
                $message = "Signup successful.";
            } else {
                $message = "Error: " . $stmt_insert->error;
            }
            $stmt_insert->close();
        }
        $stmt->close();
    }
}

$conn->close();

echo $message;
?>
