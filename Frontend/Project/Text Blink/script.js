const blinkText = document.getElementById('Surjyanarayan Nahak');
const colors = ["red", "green", "DodgerBlue", "Violet", "purple"];
const backgroundColor =["blue","green","red","grey","yellow"]
let index = 0;

setInterval(() => {
	blinkText.style.color = colors[index];
	blinkText.style.visibility = blinkText.style.visibility === "hidden" ? "visible" : "hidden";
	index = (index + 1) % colors.length;
}, 50);  

