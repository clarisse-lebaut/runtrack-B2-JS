<?php
function my_insert_student($email, $fullname, $gender, $grade, $birthdate)
{
    // Simule une insertion en base de données
    if (!empty($email) && !empty($fullname) && !empty($gender) && !empty($grade) && !empty($birthdate)) {
        return true;
    }
    return false;
}

$email = isset($_POST['student-email']) ? $_POST['student-email'] : '';
$fullname = isset($_POST['student-fullname']) ? $_POST['student-fullname'] : '';
$gender = isset($_POST['student-gender']) ? $_POST['student-gender'] : '';
$grade = isset($_POST['student-grade']) ? $_POST['student-grade'] : '';
$birthdate = isset($_POST['student-birthdate']) ? $_POST['student-birthdate'] : '';

// Simule l'insertion des données et retourne une réponse JSON
if (my_insert_student($email, $fullname, $gender, $grade, $birthdate)) {
    $response = ['status' => 'success', 'message' => 'Student registered successfully!'];
} else {
    $response = ['status' => 'error', 'message' => 'Failed to register student.'];
}

// Assurez-vous que l'entête indique du JSON
header('Content-Type: application/json');
echo json_encode($response);