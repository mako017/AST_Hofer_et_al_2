 <?php
 //Classes
class Participant
{
	public $VPCode 			= 			-88;
	public $sex 			= 			-88;
	public $color 			=			-88;
	public $birth 			= 			"-88";
	public $version 		= 			-88;
	public $consent1		=			-"88";
	public $consent2		=			-"88";
	public $consent3		=			-"88";
	public $InstRep			=			-"88";

	public $mistakes 		= 			"-88";
	public $RT 				= 			"-88";
	public $response		=			"-88";
	public $finished		= 			"-88";

	public $resolution		=			"-88";
	public $os 				= 			"-88";



	public function getPost($inp)
	{
		if (isset($inp['VPCode'])) {
			$this->VPCode = $inp['VPCode'];
		}
		if (isset($inp['sex'])) {
			$this->sex = $inp['sex'];
		}
		if (isset($inp['color'])) {
			$this->color = $inp['color'];
		}
		if (isset($inp['birth'])) {
			$this->birth = $inp['birth'];
		}
		if (isset($inp['version'])) {
			$this->version = $inp['version'];
		}
		if (isset($inp['consent1'])) {
			$this->consent1 = $inp['consent1'];
		}
		if (isset($inp['consent2'])) {
			$this->consent2 = $inp['consent2'];
		}
		if (isset($inp['consent3'])) {
			$this->consent3 = $inp['consent3'];
		}
		if (isset($inp['InstRep'])) {
			$this->InstRep = $inp['InstRep'];
		}
		///////////////
		if (isset($inp['mistakes'])) {
			$this->mistakes = $inp['mistakes'];
		}
		if (isset($inp['RT'])) {
			$this->RT = $inp['RT'];
		}
		if (isset($inp['response'])) {
			$this->response = $inp['response'];
		}
		if (isset($inp['finished'])) {
			$this->finished = $inp['finished'];
		}
		///////////////
		if (isset($inp['resolution'])) {
			$this->resolution = $inp['resolution'];
		}
		if (isset($inp['os'])) {
			$this->os = $inp['os'];
		}
	}
}

//Functions

function openConnection($host, $db, $us, $pw, $verbose=False)
{

	$conn = mysqli_connect($host, $us, $pw, $db);

	if (mysqli_connect_errno()) {
	    die('<p>Verbindung zum MySQL Server fehlgeschlagen: '.mysqli_connect_error().'</p>');
	} else {
		if ($verbose) {echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p >';}
		return $conn;
	}
}

function newParticipant($conn, $VP, $verbose=False)
{
	$sql = "INSERT INTO BT_Moritz (VPCode, Birth, Sex, Color, Consent1, Consent2, Consent3, TestVersion, Resolution, OS)
	VALUES ('" . $VP->VPCode .  
	"', '" . $VP->birth . 
	"', '" . $VP->sex . 
	"', '" . $VP->color . 
	"', '" . $VP->consent1 . 
	"', '" . $VP->consent2 . 
	"', '" . $VP->consent3 . 
	"', '" . $VP->version . 
	"', '" . $VP->resolution . 
	"', '" . $VP->os . "')";

	if (mysqli_query($conn, $sql)) {
		if ($verbose) {echo "New record created successfully";} 
		//echodbId($conn, $VP); //später noch einfügen
	} else {
		if ($verbose) {echo "Error: " . $sql . "<br>" . mysqli_error($conn);}
	}
}

function updatePractice($conn, $VP, $verbose=False)
{
	$sql = "UPDATE BT_Moritz SET Mistakes='" . $VP->mistakes .
	"', InstRep='" . $VP->InstRep . 
	"' WHERE VPCode='" . $VP->VPCode . "'";
	if (mysqli_query($conn, $sql)) {
	    if ($verbose) {echo "Record updated successfully";}
	} else {
	    if ($verbose) {echo "Error: " . $sql . "<br>" . mysqli_error($conn);}
	}
}

function updateResponse($conn, $VP, $verbose=False)
{
	$sql = "";
	if ($VP->finished == "true") {
		$sql = "UPDATE BT_Moritz SET Response='" . $VP->response . 
		"', RT='" . $VP->RT . 
		"', Finished='" . $VP->finished .
		"' WHERE VPCode='" . $VP->VPCode . "'";
		//
		echo("FUCk");
	}
	else {
		$sql = "UPDATE BT_Moritz SET Response='" . $VP->response . "', RT='" . $VP->RT . "' WHERE VPCode='" . $VP->VPCode . "'";
	}
	if (mysqli_query($conn, $sql)) {
	    if ($verbose or $VP->finished == "true") {echo "Record updated successfully";}
	} else {
	    if ($verbose) {echo "Error: " . $sql . "<br>" . mysqli_error($conn);}
	}

}

//Variables

$host_name = 'host';
$database = 'database';
$user_name = 'user';
$password = 'password';
$VP = new Participant();

//Main
if (isset($_POST['phpCode'])) {
	$postData = $_POST;
	$phpCode = $postData['phpCode'];
	switch ($phpCode) {
		case 0:																		//New entry
			$VP->getPost($postData);
			$conn = openConnection($host_name, $database, $user_name, $password);
			newParticipant($conn, $VP);
			break;
		case 1:
			$VP->getPost($postData);
			$conn = openConnection($host_name, $database, $user_name, $password);
			updatePractice($conn, $VP);
			break;
		case 2: 																	//Update entry
			$VP->getPost($postData);
			$conn = openConnection($host_name, $database, $user_name, $password);
			updateResponse($conn, $VP);
			break;
		default:
			# code...
			break;
	}
}

try {
    mysqli_close($conn);
} catch (Exception $e) {
    echo 'Exception caught: ',  $e->getMessage(), "\n";
}

?> 
