<?php
function connectBDD()
{
    try {
        $connectBDD = new PDO("mysql:host=localhost;dbname=lp_official;charset=utf8;", "root", "");
        return $connectBDD;
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
}

function my_search_student(string $email)
{
    $pdo = connectBDD();
    $sql = "SELECT * FROM student WHERE email = :email";
    $getOneStudent = $pdo->prepare($sql);
    $getOneStudent->bindParam(':email', $email, PDO::PARAM_STR);
    $getOneStudent->execute();
    return $getOneStudent->fetch(PDO::FETCH_ASSOC);
}

$response = [];

if (isset($_POST['email-search-student'])) {
    $email = $_POST['email-search-student'];
    $studentData = my_search_student($email);

    if ($studentData) {
        $response = [
            "status" => "success",
            "message" => [
                "fullname" => htmlspecialchars($studentData['fullname']),
                "grade" => htmlspecialchars($studentData['grade_id']),
                "email" => htmlspecialchars($studentData['email']),
                "birthdate" => htmlspecialchars($studentData['birthdate']),
                "gender" => htmlspecialchars($studentData['gender'])
            ]
        ];
    } else {
        $response = [
            "status" => "error",
            "message" => "Aucun étudiant trouvé avec cet e-mail."
        ];
    }
} else {
    $response = [
        "status" => "error",
        "message" => "Aucun e-mail fourni."
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
