var TargetDesc = {
	shape: ["Viereck", "Kreis"],
	amount: ["drei", "zwei"],
	shapep: ["Kreis", "Viereck"],
	amountp: ["zwei", "drei"],
};

var FeedbackText = {
	target:
		"Falsch, Blumen mit einem " +
		TargetDesc.shape[Settings.version] +
		" in der Mitte und " +
		TargetDesc.amount[Settings.version] +
		" roten Blütenblättern oder mit einem " +
		TargetDesc.shapep[Settings.version] +
		" in der Mitte und " +
		TargetDesc.amountp[Settings.version] +
		" roten Blütenblättern müssen nach oben geschoben werden. Bitte korrigieren Sie die rot markierte Blume.",
	distr:
		"Falsch, nur Blumen mit einem " +
		TargetDesc.shape[Settings.version] +
		" in der Mitte und " +
		TargetDesc.amount[Settings.version] +
		" roten Blütenblättern oder Blumen mit einem " +
		TargetDesc.shapep[Settings.version] +
		" in der Mitte und " +
		TargetDesc.amountp[Settings.version] +
		" roten Blütenblättern dürfen nach oben geschoben werden. Bitte korrigieren Sie die rot markierte Blume.",
};

function jumpOff() {
	const URL =
		"http://enterURLHere.com" +
		`?persCode=${encodeURIComponent(
			Participant.persCode
		)}&nickName=${encodeURIComponent(Participant.nickName)}`;
	window.location.href = URL;
}

function nextInstruction() {
	switch (Settings.currentInst) {
		case 0:
			if (!getDemo()) {
				return false;
			}
			sendResults();
			document.getElementById("contInst").innerHTML = "Start";
			break;
		case 1:
			document.getElementById("contInst").innerHTML = "Weiter";
			break;
		case 5:
			document.getElementById("Manual").classList.toggle("hidden");
			document.getElementById("TestContainer").classList.toggle("hidden");
			document.getElementById("Frame").classList.remove("overflow");
			document.body.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			endExplo();
			document.getElementById("backInst").classList.toggle("hidden");
			break;
		case 6:
			sendResults();
			document.getElementById("Frame").classList.remove("overflow");
			document.body.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			document.getElementById("Manual").classList.toggle("hidden");
			document.getElementById("TestContainer").classList.toggle("hidden");
			document.getElementById("progress").classList.toggle("hidden");
			document.getElementById("backInst").classList.toggle("hidden");
			RT.pre = Date.now();
			document.getElementById("contInst").classList.toggle("hidden");
			progressInterval = setInterval(progressBar, 33);
			//IntervalId = setTimeout(endTest,Settings.timelimit*1000);
			break;
	}

	document
		.getElementById("page" + Settings.currentInst)
		.classList.toggle("hidden");
	Settings.currentInst++;
	document
		.getElementById("page" + Settings.currentInst)
		.classList.toggle("hidden");
}

function resetInstruction() {
	document
		.getElementById("page" + Settings.currentInst)
		.classList.toggle("hidden");
	Settings.currentInst = 2;
	Settings.currentPage = -1;
	Participant.InstRep++;
	document
		.getElementById("page" + Settings.currentInst)
		.classList.toggle("hidden");
	document.getElementById("backInst").classList.toggle("hidden");
	nextInstruction();
}
function preventDefault(e) {
	e.preventDefault();
}

document
	.getElementById("contInst")
	.addEventListener("click", nextInstruction, true);
document
	.getElementById("backInst")
	.addEventListener("click", resetInstruction, true);
document.getElementById("jumpOff").addEventListener("click", jumpOff, true);
initTest();

window.oncontextmenu = function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
};

getURL();
if (
	Participant.persCode !== "" &&
	Participant.persCode !== "null" &&
	Participant.nickName !== "" &&
	Participant.nickName !== "null"
) {
	document.getElementById("contInst").click();
}
