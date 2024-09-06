<?php
function my_insert_student(string $email, string $fullname, string $gender, int $grade, DateTime $birthdate): bool
{
    // Vous pouvez ajouter des validations ou des traitements ici
    if (!empty($email) && !empty($fullname) && !empty($gender) && !empty($grade) && !empty($birthdate)) {
        // Simuler une insertion réussie
        return true;
    } else {
        // Simuler un échec d'insertion
        return false;
    }

}

$email = isset($_POST['student-email']) ? $_POST['student-email'] : ''; // Assuré que le nom correspond à ce qui est utilisé dans le formulaire HTML
$fullname = isset($_POST['student-fullname']) ? $_POST['student-fullname'] : ''; // Assuré que le nom correspond à ce qui est utilisé dans le formulaire HTML
$gender = isset($_POST['student-gender']) ? $_POST['student-gender'] : ''; // Assuré que le nom correspond à ce qui est utilisé dans le formulaire HTML
$grade = isset($_POST['student-grade']) ? $_POST['student-grade'] : ''; // Assuré que le nom correspond à ce qui est utilisé dans le formulaire HTML
$birthdate = isset($_POST['student-birthdate']) ? $_POST['student-birthdate'] : ''; // Assuré que le nom correspond à ce qui est utilisé dans le formulaire HTML

// Appeler la fonction simulée
if (my_insert_student($email, $fullname, $gender, $grade, $birthdate)) {
    $response['status'] = 'success';
    $response['message'] = 'Student registered successfully!';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to register student.';
}

// Envoyer la réponse en format JSON
header('Content-Type: application/json');
echo json_encode($response);
