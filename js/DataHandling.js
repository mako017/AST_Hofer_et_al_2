var Distractors = [
	["11.png", "12.png", "13.png", "14.png"],
	["21.png", "22.png", "23.png", "24.png"],
	["31.png", "32.png", "33.png", "34.png"],
	["41.png", "42.png", "43.png", "44.png"],
];

var Targets = [];

var Settings = {
	version: Math.floor(Math.random() * 2), //nicht optimal
	pages: getTestPages(
		JSON.stringify([
			["d11", "t21", "t22", "d11", "t21", "d23", "d13", "d23", "t11"],
			["d12", "t14", "d14", "d12", "t12", "t14", "t24", "d22", "t12"],
			["d21", "d24", "d11", "t23", "t12", "d22", "t12", "d13", "t24"],
			["t22", "t23", "d23", "d22", "t22", "d14", "t23", "t13", "t12"],
			["d14", "d11", "t22", "t24", "d11", "d14", "t22", "d22", "t14"],
			["d23", "t11", "t23", "d23", "d11", "d23", "t24", "d14", "d11"],
			["t21", "d11", "t12", "t13", "d23", "d12", "d12", "d23", "d14"],
			["d14", "d12", "t22", "t13", "t22", "d24", "t21", "d22", "t23"],
			["d14", "d13", "t23", "d14", "d14", "t14", "t11", "t14", "t23"],
			["t21", "d24", "t11", "d21", "t22", "d21", "t22", "t23", "t23"],
			["t23", "d24", "d22", "t14", "t24", "t24", "d11", "d22", "d21"],
			["d22", "d23", "t12", "d22", "t21", "t14", "d21", "d24", "d13"],
			["d14", "t24", "d12", "t23", "d22", "t11", "d21", "d14", "d24"],
			["t24", "d12", "t11", "t13", "t12", "d11", "t22", "t23", "d24"],
			["t21", "d23", "d12", "t12", "t22", "t11", "t13", "d22", "d11"],
			["t24", "d24", "t24", "t22", "d23", "t23", "d11", "t21", "t13"],
			["t13", "d14", "t21", "t24", "t21", "d11", "d21", "d24", "d21"],
			["t14", "d12", "d13", "t21", "t21", "d11", "t14", "t13", "d22"],
			["d24", "t23", "t14", "d22", "t14", "d12", "t11", "t21", "d12"],
			["t23", "d21", "d22", "t14", "d21", "t13", "d12", "t14", "d13"],
			["t14", "t13", "t11", "d23", "d14", "t12", "t12", "d11", "d13"],
			["d14", "d22", "t14", "t22", "d22", "d24", "d11", "d24", "t21"],
			["t11", "d23", "t14", "t23", "d12", "d11", "d21", "t23", "d14"],
			["d13", "d24", "t22", "d11", "d21", "d23", "d23", "t11", "t13"],
			["t23", "t14", "d22", "d23", "t13", "d23", "t12", "d21", "d13"],
			["d13", "t22", "t22", "t12", "t14", "d24", "d22", "t12", "t11"],
			["t22", "d12", "d14", "d22", "t22", "t22", "d14", "d12", "t22"],
			["d24", "d14", "t24", "t14", "t24", "d12", "d24", "t23", "d11"],
			["t22", "t23", "t24", "t12", "d14", "d13", "d13", "t14", "d11"],
			["t24", "d14", "d23", "t11", "t22", "d12", "t14", "d11", "d13"],
			["d13", "t21", "d21", "t21", "t13", "t14", "t21", "t23", "d24"],
			["t21", "d12", "t23", "t12", "d12", "d22", "t14", "t24", "d23"],
			["d21", "t23", "t21", "d23", "t24", "t11", "t14", "d13", "t11"],
			["t24", "t22", "d21", "t21", "d13", "t13", "d11", "t23", "d23"],
			["t23", "t12", "d21", "t12", "t12", "d21", "t14", "d12", "d14"],
			["d23", "t13", "d12", "d22", "t23", "d24", "d21", "t22", "t24"],
			["t11", "d13", "d11", "d21", "t12", "d24", "t24", "d24", "t13"],
			["t24", "d23", "d12", "t24", "t14", "d24", "t21", "t22", "t13"],
			["t12", "d24", "t21", "d24", "d12", "t21", "t21", "d13", "d11"],
			["t21", "t24", "d21", "d13", "d14", "d22", "t24", "t23", "t14"],
			["d11", "d13", "d13", "t21", "t23", "t21", "d14", "t14", "t23"],
			["t13", "d11", "d13", "t22", "t12", "d13", "t12", "d24", "t13"],
			["d21", "t24", "t14", "t11", "d12", "d22", "t22", "t13", "t13"],
			["t13", "d12", "t23", "t22", "d21", "t11", "d11", "t13", "t13"],
			["d21", "d12", "d11", "t13", "d13", "d21", "t13", "d14", "t12"],
			["t14", "t11", "d23", "t23", "d23", "d24", "d12", "t12", "t13"],
			["t11", "d11", "t11", "d22", "t24", "d12", "t22", "d24", "d13"],
			["d14", "d22", "d12", "t23", "d14", "d12", "t13", "t11", "d14"],
			["d21", "d23", "d23", "t23", "t11", "t13", "t13", "d11", "d12"],
			["t13", "t12", "t12", "t23", "t11", "d11", "d13", "d13", "t13"],
			["t24", "d24", "d22", "t24", "d12", "t14", "d23", "t13", "d24"],
			["d22", "t24", "d21", "d13", "t22", "t24", "t11", "d14", "t21"],
			["d11", "t11", "d14", "d13", "t14", "d14", "t12", "t12", "d24"],
			["d23", "d22", "t23", "t11", "t23", "t24", "t12", "d11", "d13"],
			["t22", "t21", "d11", "d24", "t24", "d21", "d24", "t22", "d14"],
			["d14", "t22", "d11", "t23", "t14", "t14", "t12", "d13", "d14"],
			["d14", "t14", "t23", "d13", "d21", "d13", "t22", "t14", "t11"],
			["d14", "d23", "t22", "t23", "t12", "d24", "t24", "t13", "t21"],
			["d22", "t21", "t21", "d11", "t11", "d21", "t13", "d21", "d23"],
			["t14", "t13", "d24", "d22", "d23", "d24", "t12", "d24", "d24"],
			["t24", "t21", "d13", "t13", "d22", "t14", "t14", "d12", "t11"],
			["d11", "d23", "d24", "t24", "t13", "d22", "t12", "d23", "t21"],
			["t22", "d22", "t14", "d22", "t13", "d14", "t21", "d13", "t22"],
			["t21", "d14", "t14", "d22", "d21", "d14", "t23", "t22", "t23"],
			["d22", "d11", "d12", "t13", "d24", "t14", "t13", "d21", "d21"],
			["d21", "d21", "d22", "t21", "t23", "d21", "d23", "d12", "t11"],
			["d13", "d23", "t11", "d13", "d11", "t21", "d22", "d23", "t12"],
			["d12", "d14", "d21", "d21", "t22", "t24", "d23", "t23", "d14"],
			["d22", "t11", "d24", "d23", "t11", "d24", "d14", "t11", "t24"],
			["t13", "d22", "d24", "t11", "t13", "d11", "t22", "t24", "t24"],
			["d11", "d22", "t21", "d13", "t12", "d12", "t22", "d14", "d23"],
			["d12", "t24", "d23", "t11", "t11", "d13", "d12", "t12", "t11"],
			["t12", "d21", "d11", "d13", "d23", "d22", "d24", "t11", "t11"],
			["t12", "t11", "d11", "t22", "d23", "t13", "d12", "d21", "d21"],
			["t21", "d11", "t24", "t14", "d21", "t24", "d13", "t21", "d12"],
			["d12", "d13", "d22", "t21", "t14", "t14", "d22", "t22", "t24"],
			["d23", "d23", "t21", "t23", "d14", "t12", "t11", "t12", "t24"],
			["t11", "d24", "t24", "t22", "d12", "d24", "t12", "t23", "t11"],
			["d21", "d13", "d24", "d22", "t12", "d14", "t12", "d11", "t21"],
			["t22", "d12", "d12", "t21", "t13", "t12", "d21", "d13", "d13"],
		])
	), //getTestPages(readTxt("reihenfolge.json")),
	timelimit: 180,
	maxMistakes: 6,
	mistakesExceeded: 0,
	feedbackPages: 1,

	currentInst: 0,
	currentItem: 0,
	currentPage: -1,
	lastTouch: 0,

	ImgPath: "Stimuli/",

	TestState: 0, //0=Exploration, 1=Feedback, 2=Warm Up, 3=Test
};

var Participant = {
	VPCode: getVPCode(),
	persCode: "",
	nickName: "",
	version: Settings.version,
	InstRep: 0,

	mistakes: 0,
	RT: "",
	response: "",
	finished: false,

	resolution: getResolution(),
	os: navigator.userAgent,
};

var RT = {
	pre: null,
	post: null,
};

var images = [];

var IntervalId = null;
var progressInterval = null;

function progressBar() {
	let bar = document.getElementById("real-progress");
	let barWidth =
		parseFloat(bar.style.width) + (100 / (Settings.timelimit * 1000)) * 33;
	if (!parseFloat(barWidth)) {
		barWidth = (100 / (Settings.timelimit * 1000)) * 33;
	}
	if (barWidth > 100) {
		bar.style.width = "100%";
		clearInterval(progressInterval);
		endTest();
	}
	bar.style.width = barWidth + "%";
}

function initTest() {
	console.log(Settings.version);
	for (let index = 0; index < 4; index++) {
		preload(Distractors[index]);
	}
	Targets[0] = Distractors[Settings.version];
	Targets[1] = Distractors[Settings.version + 2];
	for (let i = 0; i < 2; i++) {
		var index = Distractors.indexOf(Targets[i]);
		if (index > -1) {
			Distractors.splice(index, 1);
		}
	}
	if (Settings.version === 0) {
		document.getElementById("stim1").src = "img/Viereck.png";
		document.getElementById("stim2").src = "img/Kreis.png";
		document.getElementById("exampleImg1").src = "Stimuli/11.png";
		document.getElementById("exampleImg2").src = "Stimuli/31.png";
	} else {
		document.getElementById("stim1").src = "img/Kreis.png";
		document.getElementById("stim2").src = "img/Viereck.png";
		document.getElementById("exampleImg1").src = "Stimuli/21.png";
		document.getElementById("exampleImg2").src = "Stimuli/41.png";
	}
}

function readTxt(path) {
	var txt = "";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
			txt = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", path, false);
	xmlhttp.send();
	return txt;
}

function getTestPages(inputString) {
	var output = [];

	output = JSON.parse(inputString);

	return output;
}

function getVPCode() {
	var r = Math.random().toString(36).substr(2, 9);
	return r;
}

function getResolution() {
	var tmp = window.devicePixelRatio;
	var W = String(screen.width * tmp);
	var H = String(screen.height * tmp);

	return W + "x" + H;
}

function getDemo() {
	Participant.persCode = document.getElementById("pers-id").value;
	Participant.nickName = document.getElementById("nick-id").value;
	if (
		(Participant.persCode.trim() === "") |
		(Participant.nickName.trim() === "")
	) {
		alert("Bitte gib Deinen Personencode und Nickname ein");
		return false;
	}
	return true;
}

function sendResults() {
	$.post(
		"./php/mysql.php",
		encodeURI(JSON.stringify({ payload: Participant }))
	);
}

function endTest() {
	clearInterval(IntervalId);
	Participant.finished = true;
	sendResults();
	document.getElementById("TestContainer").classList.toggle("hidden");
	document.getElementById("Manual").classList.toggle("hidden");
}

function preload() {
	for (i = 0; i < preload.arguments[0].length; i++) {
		images[i] = new Image();
		images[i].src = Settings.ImgPath + preload.arguments[0][i];
	}
}

function download(filename, text) {
	var element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/plain;charset=utf-8," + encodeURIComponent(text)
	);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
