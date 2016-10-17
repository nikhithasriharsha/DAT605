<?php
    $link = include_once('db_connect.php');


    $query = "SELECT * FROM parks order by RAND() limit 5";
    if ($result = mysqli_query($link, $query)) {
        $parks = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $parks[] = $row;
        }

        echo json_encode($parks);

        /* free result set */
        mysqli_free_result($result);
    }

 ?>
