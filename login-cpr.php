<!DOCTYPE>
<html>
<head>
   <link rel="stylesheet" href="side.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"> </script>
  <title> Login</title>
 
  </head>
<body>
 
   <br>
  <br>
<br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
 
  <br>
  <br>
  <br>
  <br>
   <h1>Login</h1>
  <br>
  <div class="container">
    <form method="post" action="">
        <div id="div_login">
          
            <div>
                <input type="text" class="textbox" id="txt_uname" name="txt_uname" placeholder="Cpr-nr" />
            </div>
            <div>
                <input type="password" class="textbox" id="txt_kode" name="txt_pwd" placeholder="Adgangskode"/>
            </div>
            <div>
               <button class="login" name="loginknap" id="login">Login</button>
            </div>
        </div>
    </form>
</div>
  
 

  
  <script src="srpkode.js"></script>
  </body>
</html>
<?php
session_start();
$servername = "localhost";
$username = "chri13h6";
$password = "nlLo9mPA"; 
$dbname = "chri13h6_srp_tabael"; 

$con = mysqli_connect($servername, $username, $password,$dbname);
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());


}
if(isset($_POST['loginknap'])){

    $cpr = mysqli_real_escape_string($con,$_POST['txt_uname']);
    $adgangskode = mysqli_real_escape_string($con,$_POST['txt_pwd']);

    if ($cpr != "" && $adgangskode != ""){

        $sql_query = "select count(*) as cntbruger from bruger where cpr='".$cpr."' and adgangskode='".$adgangskode."'";
        $result = mysqli_query($con,$sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntbruger'];

        if($count > 0){
            $_SESSION['uname'] = $cpr;
            header('Location: stemmesystem.php');
        }else{
            echo "Forkert Cpr-nr eller Adgangskode";
        }

    }

}

?>