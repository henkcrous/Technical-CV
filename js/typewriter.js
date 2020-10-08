var txt = [
  "print("+'"Hello World"'+");",
  "print("+'"Hi, I am Henk Crous"'+");",
  "print("+'"I am a third year IT student at the NWU"'+");"
];

var CharDelay = 300;
var WordPause = 1000;
var WordOffset = 0;
var RestartInterval = 5000;

function typeWriter(text, i, fnRepeat) {
	if (i < (text.length)) {
		document.querySelector("#typewriter").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

		setTimeout(function() {
			typeWriter(text, i+1, fnRepeat)
		}, CharDelay);
	}

	else if (typeof fnRepeat == 'function') {
		setTimeout(fnRepeat, WordPause);
	}
}

function StartTextAnimation(j) {
	if (typeof txt[j] == 'undefined' || j == txt.length) {
		setTimeout(function() {
			StartTextAnimation(WordOffset);
		}, RestartInterval);
	}

	else if (j < txt[j].length) {
		typeWriter(txt[j], 0, function() {
			StartTextAnimation((j+1));
		});
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	StartTextAnimation(WordOffset);
});