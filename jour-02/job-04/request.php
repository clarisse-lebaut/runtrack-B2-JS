<?php
function my_insert_student($email, $fullname, $gender, $grade, $birthdate)
{
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

if (my_insert_student($email, $fullname, $gender, $grade, $birthdate)) {
    $response = ['status' => 'success', 'message' => 'Student registered successfully!'];
} else {
    $response = ['status' => 'error', 'message' => 'Failed to register student.'];
}

header('Content-Type: application/json');
echo json_encode($response);