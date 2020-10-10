<!DOCTYPE html>

<?php

$sql_connection = mysqli_connect('localhost', 'root', '', 'bpmintern');
session_start();
$user = $_SESSION["Username"];

if (isset($_GET["logout"])) {
    $_SESSION = [];
    session_unset();
    session_destroy();

    header("Location: index.php");
    exit;
} elseif (isset($_GET["userid"])) {
    $delete_id = $_GET["userid"];
    $delete_query = "DELETE FROM ACCOUNT WHERE ID = '$delete_id'";
    mysqli_query($sql_connection, $delete_query);
    echo "<script>
            document.location.href = 'usertable.php';
        </script>";
} elseif (isset($_POST["update"])) {
    $update_id = $_POST["update"];
    $update_username = $_POST["username"];
    $update_name = $_POST["name"];
    $update_birthday = $_POST["birthdate"];
    $update_country = $_POST["country"];
    $update_address = $_POST["address"];
    $update_postalcode = $_POST["post_code"];
    $update_phone = $_POST["phone"];
    $update_email = $_POST["email"];
    $update_preference = $_POST["preference"];

    $update_query =
        "UPDATE ACCOUNT SET
    USERNAME = '$update_username',
    NAME = '$update_name',
    BIRTHDAY = '$update_birthday',
    COUNTRY = '$update_country',
    ADDRESS = '$update_address',
    POSTALCODE = '$update_postalcode',
    PHONE = '$update_phone',
    EMAIL = '$update_email',
    PREFERENCES = '$update_preference'
    WHERE ID = '$update_id'";

    mysqli_query($sql_connection, $update_query);
    if (mysqli_affected_rows($sql_connection) > 0) {
        echo "<script>
                    alert('Update success!');
                </script>";
    } else {
        echo mysqli_error($sql_connection);
    }
}

$get_user_table = "SELECT * FROM ACCOUNT WHERE USERNAME != 'Admin'";
$user_table = mysqli_query($sql_connection, $get_user_table);

?>

<head>
    <meta charset="UTF-8">
    <title>User Display</title>
    <link rel="icon" type="image/x-icon" href="pics/FurnitureLogo.png">
    <link rel="stylesheet" type="text/css" href="css/usertable.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <nav class="nav-container">
        <img src="pics/FurnitureLogo.png" width="105" height="75">
        <a href="?logout=" class="nav-tab"><i class="fa fa-sign-out"></i> Logout</a>
        <button class="nav-tab"><i class="fa fa-home"></i> Home</button>
    </nav>

    <main>

        <h1> Users Table </h1>

        <div class="container">

            <div class="table-container">
                <table>
                    <tr>
                        <th class="options" colspan="2">Option</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Phone No.</th>
                        <th>Email</th>
                        <th>Preference</th>
                    </tr>
                    <?php foreach ($user_table as $user) :
                        $userid = $user['id']; ?>
                        <tr>
                            <td class="options">
                                <a href="javascript:void(0);" class="edit" id="edit" onclick="updating(<?= $userid ?>)">
                                    <i class="fa fa-pencil"></i> Edit
                                </a>
                            </td>
                            <td class="options">
                                <a href="?userid=<?= $userid ?>">
                                    <i class="fa fa-trash"></i> Delete
                                </a>
                            </td>
                            <td><?= $user["Username"] ?></td>
                            <td><?= $user["Name"] ?></td>
                            <td><?= $user["Birthday"] ?></td>
                            <td><?= $user["Country"] ?></td>
                            <td><?= $user["Address"] ?>, <?= $user["Postalcode"] ?></td>
                            <td><?= $user["Phone"] ?></td>
                            <td><?= $user["Email"] ?></td>
                            <td><?= $user["Preferences"] ?></td>
                        </tr>
                    <?php endforeach; ?>
                </table>
            </div>


            <div class="updateform">

                <button class="collapse">
                    <i class="fa fa-angle-up"></i>
                </button>
                <h1> Update </h1>

                <form action="" method="POST">

                    <label for="username">Username:</label>
                    <input type="text" placeholder="Enter Username(6-20 characters)" name="username" id="username" minlength="5" maxlength="20" autocomplete="off" required>

                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" autocomplete="off">

                    <label for="birthdate">Birthday:</label>
                    <input type="date" name="birthdate" id="birthdate" max="<?= date('Y-m-d') ?>" min="1920-01-01">

                    <label for="country">Country:</label>
                    <input type=text placeholder="Enter your country's name" name="country" id="country" autocomplete="off">

                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required></textarea>

                    <label for="post_code">Postal Code:</label>
                    <input type="text" name="post_code" id="post_code" maxlength="6" autocomplete="off" required>

                    <label for="phone">Phone:</label>
                    <input type="text" name="phone" id="phone" maxlength="13" autocomplete="off" required>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" autocomplete="off" required>

                    <label for="preference">Furniture Preference:</label>
                    <select id="preference" name="preference">
                        <option value="Kitchen and Dining"> Kitchen and Dining </option>
                        <option value="Bedroom"> Bedroom </option>
                        <option value="Living Room"> Living Room </option>
                        <option value="Office"> Home Office </option>
                        <option value="Outdoor"> Outdoor Furnitures </option>
                    </select>

                    <button type="submit" name="update" id="update-btn" class="buttons">Save changes</button>

                </form>
            </div>

        </div>
    </main>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="JS/ajax_update.js"></script>