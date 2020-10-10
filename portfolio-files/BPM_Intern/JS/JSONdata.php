<?php

$conn = mysqli_connect('localhost', 'root', '', 'bpmintern');

if (isset($_GET["userid"])) {
    $updated_id = $_GET["userid"];
    $query = "SELECT * FROM ACCOUNT WHERE ID = '$updated_id'";
    $result = mysqli_query($conn, $query);
    $rows = [];

    foreach ($result as $row) {
        $rows["id"] = $row["id"];
        $rows["Username"] = $row["Username"];
        $rows["Name"] = $row["Name"];
        $rows["Birthday"] = $row["Birthday"];
        $rows["Country"] = $row["Country"];
        $rows["Address"] = $row["Address"];
        $rows["Postalcode"] = $row["Postalcode"];
        $rows["Phone"] = $row["Phone"];
        $rows["Email"] = $row["Email"];
        $rows["Preferences"] = $row["Preferences"];
    }

    echo json_encode($rows);
}
