function changeContent() {
	if(window.location.hash == "#about") {
		document.getElementById("achievements-container").style.display = "none";
		document.getElementById("about-container").style.display = "block";
	} else if(window.location.hash == "#achievements") {
		document.getElementById("achievements-container").style.display = "block";
		document.getElementById("about-container").style.display = "none";
	}
}

window.addEventListener("hashchange", changeContent);
window.addEventListener("load", changeContent);