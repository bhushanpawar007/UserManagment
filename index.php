<?php
include ('header.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usermanagment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT project_title ,username FROM ilance_projects projects Join ilance_users users on projects.user_id=users.user_id";
$result = $conn->query($sql);

?>
<!-- Begin - Main Content -->
<div class="container-fluid">
<!--begin - Pagination nav -->
<nav aria-label="Page navigation example">
    <ul class="pagination">

    </ul>
</nav>
<!--end - pagination nav-->

<!--begin-Main Table -->
<table class="table table-bordered" id="user-tbl">
    <thead>
    <tr>

        <th scope="col">Project Title</th>
        <th scope="col">Username</th>
        <th scope="col">CategoryName</th>
    </tr>
    </thead>
    <tbody>
    <?php
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr class='tbl-row'>";
            echo "<td>";
            echo $row['project_title'];
            echo "</td>";

            echo "<td>";
            echo $row['username'];
            echo "</td>";

            echo "<td>";
            echo "Don't know yet";
            echo "</td>";
            echo "</tr>";
        }
    } else {
        echo "0 results";
    }
    ?>


    </tbody>
</table>
<!--end-Main Table -->
<!-- End - Main Content -->
</div>
<?php
include ('footer.php');
$conn->close();
?>
<script>
    $(document).ready(function() {
        $('#example').DataTable();
    } );
</script>

