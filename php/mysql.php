<?php

require_once 'config.php';
$postData = json_decode(urldecode(file_get_contents("php://input")),true);
$payload = isset($postData['payload']) ? $postData['payload'] : '';
$participantGateway = new ParticipantGateway();
$participant = new Participant($payload);
$participantGateway->createParticipant($participant);

class Participant{
	public $VPCode =  "";
	public $persCode =  "";
	public $nickName =  "";
	public $version =  -1;
	public $InstRep =  -1;
	public $mistakes =  -1;
	public $RT =  "";
	public $response =  "";
	public $finished =  "";

    public function __construct($postData) {
        $this->VPCode = $postData["VPCode"];
        $this->persCode = $postData["persCode"];
        $this->nickName = $postData["nickName"];
        $this->version = $postData["version"];
        $this->InstRep = $postData["InstRep"];
        $this->mistakes = $postData["mistakes"];
        $this->RT = $postData["RT"];
        $this->response = $postData["response"];
        $this->finished = $postData["finished"];
    }
}

class ParticipantGateway{
    private function userExists(Participant $participant)
    {
        $exists = DB::queryFirstRow("SELECT `VPCode` FROM `AST_results` WHERE `VPCode`=%s", $participant->VPCode);
        if ($exists !== null) return true;
        return false;
    }

    public function createParticipant(Participant $participant){
        if($this->userExists($participant)){
            $this->updateParticipant($participant);
            return;
        }
        DB::insert("AST_results",[
            "VPCode" => $participant->VPCode,
            "persCode" => $participant->persCode,
            "nickName" => $participant->nickName,
            "version" => $participant->version,
            "InstRep" => $participant->InstRep,
            "mistakes" => $participant->mistakes,
            "RT" => $participant->RT,
            "response" => $participant->response,
            "finished" => $participant->finished,
        ]);
        if (DB::affectedRows() > 0) {
            serverResponse("created");
        }
        else{
            serverResponse("creationFailed");
        }
    }

    public function updateParticipant(Participant $participant){
        DB::update('AST_results',
        [
            "VPCode" => $participant->VPCode,
            "persCode" => $participant->persCode,
            "nickName" => $participant->nickName,
            "version" => $participant->version,
            "InstRep" => $participant->InstRep,
            "mistakes" => $participant->mistakes,
            "RT" => $participant->RT,
            "response" => $participant->response,
            "finished" => $participant->finished,
        ],
        "VPCode=%s", $participant->VPCode);
    }
}