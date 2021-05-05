var TargetDesc = {
	shape: ["Viereck", "Kreis"],
	amount: ["zwei", "drei"],
	shapep: ["Kreis", "Viereck"],
	amountp: ["drei", "zwei"],
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

function nextInstruction() {
	// switch (Settings.currentInst) {
	// 	case 0:
	// 		document.getElementById("contInst").innerHTML = "Weiter";
	// 	case 2: //Landing Page -> get demo -> Show stimuli; Explanation
	// 		Participant.birth = document.getElementById("txtBirth").value;
	// 		Participant.sex = parseInt($('input[name="sex"]:checked').val());
	// 		Participant.color = parseInt($('input[name="color"]:checked').val());
	// 		document.getElementById("divDemo").classList.toggle("hidden");
	// 		sendResults();
	// 		Participant.phpCode = phpCodes.Feedback;

	// 		if (jQuery(window).height() < jQuery(window).width()) {
	// 			Settings.currentInst++;
	// 		}

	// 		break;
	// 	case 3:
	// 		if (jQuery(window).height() > jQuery(window).width()) {
	// 			Settings.currentInst--;
	// 			alert(
	// 				"Ihr Gerät befindet sich noch im Hochkant-Format. Bitte halten Sie es für die Testung quer."
	// 			);
	// 		}
	// 		break;
	// 	case 4:
	// 		for (
	// 			let i = 0;
	// 			i < document.getElementsByClassName("Stimulus-ex").length;
	// 			i++
	// 		) {
	// 			let element = document.getElementsByClassName("Stimulus-ex")[i];
	// 			element.classList.toggle("hidden");
	// 		}
	// 		break;
	// 	case 5:
	// 		for (
	// 			let i = 0;
	// 			i < document.getElementsByClassName("Stimulus-ex").length;
	// 			i++
	// 		) {
	// 			let element = document.getElementsByClassName("Stimulus-ex")[i];
	// 			element.classList.toggle("hidden");
	// 		}
	// 		document.getElementById("divExamples").classList.toggle("hidden");
	// 		break;
	// 	case 6:
	// 		Settings.currentPage--;
	// 		swapImg();
	// 		document.getElementById("divExamples").classList.toggle("hidden");
	// 		break;
	// 	case 7:
	// 		document.getElementById("Manual").classList.toggle("hidden");
	// 		document.getElementById("TestContainer").classList.toggle("hidden");
	// 		document.getElementById("Frame").classList.remove("overflow");
	// 		document.body.addEventListener("touchmove", preventDefault, {
	// 			passive: false,
	// 		});
	// 		endExplo();
	// 		document.getElementById("backInst").classList.toggle("hidden");
	// 		break;
	// 	case 8:
	// 		sendResults();
	// 		document.getElementById("Frame").classList.remove("overflow");
	// 		document.body.addEventListener("touchmove", preventDefault, {
	// 			passive: false,
	// 		});
	// 		document.getElementById("Manual").classList.toggle("hidden");
	// 		document.getElementById("TestContainer").classList.toggle("hidden");
	// 		document.getElementById("progress").classList.toggle("hidden");
	// 		document.getElementById("backInst").classList.toggle("hidden");
	// 		Participant.phpCode = phpCodes.Update;
	// 		RT.pre = Date.now();
	// 		document.getElementById("contInst").classList.toggle("hidden");
	// 		progressInterval = setInterval(progressBar, 33);
	// 		//IntervalId = setTimeout(endTest,Settings.timelimit*1000);
	// 		break;
	// 	default:
	// 		break;
	// }
	switch (Settings.currentInst) {
		case 0:
			if (!getDemo()) {
				return false;
			}
			document.getElementById("contInst").innerHTML = "Start";
			break;
		case 1:
			document.getElementById("contInst").innerHTML = "Weiter";
			break;
		case 4:
			document.getElementById("Manual").classList.toggle("hidden");
			document.getElementById("TestContainer").classList.toggle("hidden");
			document.getElementById("Frame").classList.remove("overflow");
			document.body.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			endExplo();
			document.getElementById("backInst").classList.toggle("hidden");
			break;
		case 5:
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

		default:
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
	document.getElementById("backInst").classList.toggle("hidden");
	Settings.currentInst = 3;
	Settings.currentPage = 0;
	Participant.InstRep++;
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
initTest();

window.oncontextmenu = function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
};
