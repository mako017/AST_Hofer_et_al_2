var Distractors = [
	["11.png","12.png","13.png","14.png"],
	["21.png","22.png","23.png","24.png"],
	["31.png","32.png","33.png","34.png"],
	["41.png","42.png","43.png","44.png"]
];

var Targets = [];

var Settings = {
	version 			: 				Math.floor((Math.random() * 2)), //nicht optimal
	pages 				: 				getTestPages(readTxt("reihenfolge.json")),
	timelimit 			: 				180,
	maxMistakes			:				6,
	mistakesExceeded	:				0,
	feedbackPages		: 				1,

	currentInst 		: 				0,
	currentItem 		: 				0,
	currentPage 		: 				0,
	lastTouch 			: 				0,

	ImgPath 			: 				"Stimuli/",

	TestState 			: 				0 //0=Exploration, 1=Feedback, 2=Warm Up, 3=Test
};

var Participant = {
	VPCode 				: 				getVPCode(),
	sex  				: 				0,
	color				:				0,
	birth 				: 				"",
	version 			: 				Settings.version,
	consent1			:				false,
	consent2			:				false,
	consent3			:				false,
	InstRep 			:				0,

	mistakes			:				0,
	RT 					: 				"",
	response			:				"",
	finished 			:				false,

	resolution 			: 				getResolution(),
	os 					: 				navigator.userAgent,

	phpCode 			: 				0

};

var phpCodes = {
	New 				: 				0,
	Feedback			:				1,
	Update 				: 				2
};

var RT = {
	pre 				: 				null,
	post 				: 				null
};

var images = [];

var IntervalId = null;
var progressInterval = null;

function progressBar() {
	let bar = document.getElementById("real-progress");
	let barWidth = parseFloat(bar.style.width) + 100/(Settings.timelimit*1000)*33;
	if (!parseFloat(barWidth)) {
		barWidth = 100/(Settings.timelimit*1000)*33;
	}
	if (barWidth > 100) {
		bar.style.width ='100%';
		clearInterval(progressInterval);
		endTest();	
	}
	bar.style.width = barWidth + '%'; 
}

function initTest() {
	for (let index = 0; index < 4; index++) {
		preload(Distractors[index]);
		
	}
	Targets[0] = Distractors[Settings.version];
	Targets[1] = Distractors[Settings.version+2];
	for (let i = 0; i < 2; i++) {
		var index = Distractors.indexOf(Targets[i]);
		if (index > -1) {
			Distractors.splice(index, 1);
		}
	}
	if (Settings.version == 0) {
		document.getElementById("stim1").src="img/Viereck.png";
		document.getElementById("stim2").src="img/Kreis.png";
		document.getElementById("exampleImg1").src="Stimuli/11.png";
		document.getElementById("exampleImg2").src="Stimuli/31.png";

	}
	else {
		document.getElementById("stim1").src="img/Kreis.png";
		document.getElementById("stim2").src="img/Viereck.png";
		document.getElementById("exampleImg1").src="Stimuli/21.png";
		document.getElementById("exampleImg2").src="Stimuli/41.png";
	}
}

function readTxt(path) {
	var txt = '';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
	  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
	    txt = xmlhttp.responseText;
	  }
	};
	xmlhttp.open("GET",path,false);
	xmlhttp.send();
	return(txt);
}

function getTestPages(inputString) {
	var output = [];

	output = JSON.parse(inputString);

	return(output);
}

function getVPCode() {
	var r = Math.random().toString(36).substr(2, 9);
	return r;
}

function getResolution() {
	var tmp = window.devicePixelRatio;
	var W = String(screen.width*tmp);
	var H = String(screen.height*tmp);

	return W + "x" + H;
}

function getDemo(VP) {
	VP.age 		= parseInt(document.getElementById('sel_age').value);
	VP.sex 		= parseInt($('input[name="sex"]:checked').val());
	VP.edu 		= parseInt(document.getElementById("sel_edu").value);
	VP.nat 		= parseInt($('input[name="nat"]:checked').val());
	VP.natOther	= document.getElementById("nat_other").value;

	if (VP.natOther == "") {
		VP.natOther = "-99";
	}	
}

function sendResults() {
	if (navigator.onLine) {
		$.post("mysql.php", Participant);
	}
	else if (Participant.finished) {
		download(Participant.VPCode + ".txt", JSON.stringify(Participant));
	}
}

function endTest() {
		clearInterval(IntervalId);
		Participant.finished = true;
		sendResults();
		document.getElementById('TestContainer').classList.toggle("hidden");
		document.getElementById('Manual').classList.toggle("hidden");
}

function preload() {
	for (i = 0; i < preload.arguments[0].length; i++) {
		images[i] = new Image();
		images[i].src = Settings.ImgPath + preload.arguments[0][i];
	}
}

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);
  }
