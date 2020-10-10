<!DOCTYPE html>

<?php

/* Connect to database */
$sql_connection = mysqli_connect('localhost', 'root', '', 'bpmintern');

/* Check if the button has been pressed */
if (isset($_POST["register"])) {

    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirmpw"];

    $validate_query = "SELECT USERNAME FROM ACCOUNT WHERE USERNAME = '$username'";
    $result = mysqli_query($sql_connection, $validate_query);

    foreach ($result as $res) :
        $listed_username = $res["USERNAME"];
    endforeach;

    if ($password != $confirm_password) {
        echo "<script>
            alert('The password does not match with the confirmed password');
            document.location.href = 'index.php';
        </script>";
    } elseif (mysqli_num_rows($result) != 0) {
        echo "<script>
            alert('Account has already existed');
            document.location.href = 'index.php';
        </script>";
    }

    $name = htmlspecialchars($_POST["name"]);
    $birthday = htmlspecialchars($_POST["birthdate"]);
    $country = htmlspecialchars($_POST["country"]);
    $address = htmlspecialchars($_POST["address"]);
    $postalcode = htmlspecialchars($_POST["post_code"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $preferences = htmlspecialchars($_POST["preference"]);


    $register_query = "INSERT INTO ACCOUNT(Username, Password, Name, Birthday, Country, Address, Postalcode, Phone, Email, Preferences) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $register = mysqli_prepare($sql_connection, $register_query);
    mysqli_stmt_bind_param($register, 'ssssssssss', $username, $password, $name, $birthday, $country, $address, $postalcode, $phone, $email, $preferences);
    mysqli_stmt_execute($register);
    mysqli_stmt_store_result($register);

    if (mysqli_stmt_affected_rows($register) > 0) {
        echo "<script>
            alert('Your account has been created');
        </script>";
    }
} elseif (isset($_POST["login"])) {
    /* To avoid SQL Injection, there are two methods */
    /*

        1. mysqli_real_escape_string(data);
        This method saves more time when working on small projects
        But, in bigger projects this method is not recommended because it makes the web performance slower

        2. Prepare Statement method
        This method is more recommended than the first.
        Syntax:
        query = "SELECT * FROM TABLE WHERE COLUMN NAME = ?";
        preparedstatement = mysqli_prepare(connection, query);
        mysqli_stmt_bind_param(preparedstatement, parameter_amount,[data]);
        mysqli_execute(preparedstatement);
        $result = mysqli_stmt_store_result(preparedstatement);

    */
    $login_user = htmlspecialchars($_POST["user"]);
    $login_password = htmlspecialchars($_POST["pass"]);
    $get_users_table = "SELECT USERNAME, PASSWORD FROM ACCOUNT WHERE USERNAME = ? AND PASSWORD = ?";

    $result = mysqli_prepare($sql_connection, $get_users_table);
    mysqli_stmt_bind_param($result, 'ss', $login_user, $login_password);
    mysqli_stmt_execute($result);
    mysqli_stmt_store_result($result);

    if (mysqli_stmt_num_rows($result) != 0) {
        session_start();
        $_SESSION["Username"] = $login_user;
        header('Location:usertable.php');
    } else {
        echo "<script>
            alert('Wrong username or password!');
        </script>";
    }
}


?>

<head>
    <meta charset="UTF-8">
    <title>Landing Page</title>
    <link rel="icon" type="image/x-icon" href="pics/FurnitureLogo.png">
    <link rel="stylesheet" type="text/css" href="css/landingpage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <nav class="nav-container">
        <img src="pics/FurnitureLogo.png" width="105" height="75">
        <button class="nav-tab" id="login"> <i class="fa fa-sign-in"></i> Login</button>
        <button class="nav-tab"> <i class="fa fa-home"></i> Home</button>
    </nav>

    <div id="modal">
        <div id="modal-box">
            <button><i class="fa fa-times"></i></button>
            <h1> <i class="fa fa-user"></i> LOGIN </h1>
            <div class="login-form">
                <form action="" method="post">
                    <label for="login-user">Username: </label>
                    <input type="text" name="user" id="login-user" autocomplete="off" required>
                    <br>
                    <label for="login-password">Password:</label>
                    <input type="password" name="pass" id="login-password" required>

                    <button type="submit" name="login" id="login">Login</button>
                </form>
            </div>
        </div>
    </div>

    <main>
        <div class="left-row">
            <h1> Gotz Furniture Store </h1>
            <div class="description">
                <p> Providing all kinds of furnitures with variety of designs and prices </p>
                <p> Just for you! </p>
            </div>
        </div>
        <div class="right-row">

            <h1>SIGN UP</h1>


            <form action="" method="post">

                <div class="form">

                    <div class="logininfo">
                        <label for="username">Username:</label>
                        <input type="text" placeholder="Enter Username(6-20 characters)" name="username" id="username" minlength="5" maxlength="20" autocomplete="off" required>

                        <label for="password">Password:</label>
                        <input type="password" placeholder="6-12 characters" minlength="6" maxlength="12" name="password" id="password" required>

                        <label for="confirmpw">Confirm Password:</label>
                        <input type="password" minlength="6" maxlength="12" name="confirmpw" id="confirmpw" required>

                        <label for="preference">Furniture Preference:</label>
                        <select id="preference" name="preference">
                            <option value="Kitchen and Dining"> Kitchen and Dining </option>
                            <option value="Bedroom"> Bedroom </option>
                            <option value="Living Room"> Living Room </option>
                            <option value="Office"> Home Office </option>
                            <option value="Outdoor"> Outdoor Furnitures </option>
                        </select>


                        <label for="phone">Phone:</label>
                        <input type="text" name="phone" id="phone" maxlength="13" autocomplete="off" required>

                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" autocomplete="off" required>

                    </div>

                    <div class="personalinfo">
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

                    </div>

                </div>

                <button type="submit" name="register" class="buttons">Register</button>

            </form>

        </div>
    </main>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="JS/landingpagefunc.js"></script>