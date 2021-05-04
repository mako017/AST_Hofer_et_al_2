var TargetDesc = {
	shape: ["Viereck", "Kreis"],
	amount: ["zwei", "drei"],
	shapep: ["Kreis", "Viereck"],
	amountp: ["drei", "zwei"],
};

var Instructions = [
	"Im Folgenden werden Sie auf Ihrem Smartphone/Tablet einen kurzen Konzentrationstest bearbeiten.",
	"Meine Teilnahme an der Studie ist freiwillig. Ich kann jederzeit und ohne Angaben von Gründen den Test durch Schließen des Fensters beenden, ohne dass sich daraus negative Folgen für mich ergeben. Ich erkläre mich damit einverstanden, dass meine persönlichen Daten im Rahmen dieser Studie anonymisiert aufgezeichnet und für die wissenschaftliche Auswertung verwendet werden. Alle personenbezogenen Daten unterliegen dem Datenschutz und werden streng vertraulich behandelt. Einer möglichen Veröffentlichung der anonymisierten Daten dieser Studie stimme ich zu.<br>",
	'Bitte geben Sie zuerst Ihr Geburtsdatum und Geschlecht ein. Klicken Sie bitte auf "WEITER", um zu erfahren, was Ihre Aufgabe ist.',
	"Bitte drehen Sie Ihr Smartphone oder Tablet und belassen es über die gesamte Testung in dieser Position",
	"In diesem Test werden Sie Reihen von Blumen sehen, die Sie so schnell wie möglich sortieren sollen. Sie können die Blumen nach oben oder nach unten schieben, um sie zu sortieren. Klicken Sie bitte auf ‚WEITER’, um zu erfahren, welche Blumen Sie nach oben oder unten schieben sollen.",
	'Die Blumen in diesem Test haben verschiedene Merkmale. Sie haben unterschiedlich viele rote Blütenblätter (<img src="img/bluetenblatt.png" class="small-element">) und in der Mitte entweder einen blauen Kreis (<img src="img/kreis.png" class="small-element">) oder ein blaues Viereck (<img src="img/viereck.png" class="small-element">). Es sollen aber nur Blumen mit bestimmten Kombinationen nach oben geschoben werden.',
	"Blumen mit diesen Kombinationen sollen nach OBEN sortiert werden:",
	"Bevor es richtig losgeht, möchten wir Sie mit der Aufgabe vertraut machen. Sie werden gleich eine Beispielreihe mit Blumen sehen, die sie sortieren sollen. Bitte fangen Sie ganz links in der Zeile mit der ersten Blume an. Wenn Sie richtig sortiert haben, erscheint ein grünes Viereck. Wenn sie falsch sortiert haben, erscheint ein rotes Viereck. In diesem Fall korrigieren Sie bitte Ihre Antwort und machen dann mit der nächsten Blume weiter.",
	'Nun kann es richtig losgehen. Wenn Sie auf ‚WEITER‘ klicken, beginnt der Test. Sie haben dann 3 Minuten Zeit, so viele Blumen wie möglich zu sortieren. Bitte denken Sie daran, immer mit der ersten Blume ganz links zu beginnen und so schnell wie möglich alle Blumen zu sortieren.<br> Falls Sie die Instruktionen noch einmal lesen möchten, klicken Sie bitte auf "Zurück".',
	"Wir würden Sie bitten, noch einige Fragen zu Ihrer Kindheit und Ihrem jetzigen Alltag zu beantworten.", // Bitte klicken Sie dazu auf <a href="https://ww3.unipark.de/uc/MSI_Team/de47/?a=' + Participant.VPCode + '">diesen Link</a>'
];

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
	switch (Settings.currentInst) {
		case 0:
			document.getElementById("contInst").innerHTML = "Weiter";
			document.getElementById("consent").classList.toggle("hidden");
			break;
		case 1:
			$("#isAgeSelected").is(":checked");
			if (
				$("#consent1").is(":checked") &
				$("#consent2").is(":checked") &
				$("#consent3").is(":checked")
			) {
				Participant.consent1 = true;
				Participant.consent2 = true;
				Participant.consent3 = true;
				document.getElementById("consent").classList.toggle("hidden");
				document.getElementById("divDemo").classList.toggle("hidden");
			} else {
				Settings.currentInst--;
			}
			break;
		case 2: //Landing Page -> get demo -> Show stimuli; Explanation
			Participant.birth = document.getElementById("txtBirth").value;
			Participant.sex = parseInt($('input[name="sex"]:checked').val());
			Participant.color = parseInt($('input[name="color"]:checked').val());
			document.getElementById("divDemo").classList.toggle("hidden");
			sendResults();
			Participant.phpCode = phpCodes.Feedback;

			if (jQuery(window).height() < jQuery(window).width()) {
				Settings.currentInst++;
			}

			break;
		case 3:
			if (jQuery(window).height() > jQuery(window).width()) {
				Settings.currentInst--;
				alert(
					"Ihr Gerät befindet sich noch im Hochkant-Format. Bitte halten Sie es für die Testung quer."
				);
			}
			break;
		case 4:
			for (
				let i = 0;
				i < document.getElementsByClassName("Stimulus-ex").length;
				i++
			) {
				let element = document.getElementsByClassName("Stimulus-ex")[i];
				element.classList.toggle("hidden");
			}
			break;
		case 5:
			for (
				let i = 0;
				i < document.getElementsByClassName("Stimulus-ex").length;
				i++
			) {
				let element = document.getElementsByClassName("Stimulus-ex")[i];
				element.classList.toggle("hidden");
			}
			document.getElementById("divExamples").classList.toggle("hidden");
			break;
		case 6:
			Settings.currentPage--;
			swapImg();
			document.getElementById("divExamples").classList.toggle("hidden");
			break;
		case 7:
			document.getElementById("Manual").classList.toggle("hidden");
			document.getElementById("TestContainer").classList.toggle("hidden");
			document.getElementById("Frame").classList.remove("overflow");
			document.body.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			endExplo();
			document.getElementById("backInst").classList.toggle("hidden");
			break;
		case 8:
			sendResults();
			document.getElementById("Frame").classList.remove("overflow");
			document.body.addEventListener("touchmove", preventDefault, {
				passive: false,
			});
			document.getElementById("Manual").classList.toggle("hidden");
			document.getElementById("TestContainer").classList.toggle("hidden");
			document.getElementById("progress").classList.toggle("hidden");
			document.getElementById("backInst").classList.toggle("hidden");
			Participant.phpCode = phpCodes.Update;
			RT.pre = Date.now();
			document.getElementById("contInst").classList.toggle("hidden");
			progressInterval = setInterval(progressBar, 33);
			//IntervalId = setTimeout(endTest,Settings.timelimit*1000);
			break;
		default:
			break;
	}

	Settings.currentInst++;
	document.getElementById("instText").innerHTML =
		Instructions[Settings.currentInst];
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
