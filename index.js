
// Dark mode //

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  	document.body.classList.add('darkmode');
  	localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = () => {
  	document.body.classList.remove('darkmode');
  	localStorage.setItem('darkmode', null);
}
const setAnimationsDuration = (duration) => {
	document.body.style.transitionDuration = duration;
	document.querySelector("#theme-switch #dark-mode").style.transitionDuration = duration;
	document.querySelector("#theme-switch #light-mode").style.transitionDuration = duration;
	document.querySelector("header").style.transitionDuration = duration;
	document.querySelector("nav").style.transitionDuration = duration;
}
setAnimationsDuration("0s");
if(darkmode === "active")
	enableDarkmode();
else
	disableDarkmode();
function toggleMode() {
	setAnimationsDuration("0.7s");
	darkmode = localStorage.getItem('darkmode');
  	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
}

// End //

function openSite(site) {
	window.open(site, "_self");
}

function toggleSidebar(option){
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.right = option;
}

document.getElementById("github").addEventListener("click", () => {
	openSite('https://github.com/texugo-lab/fcc---Float-Code-Compiler');
})
document.getElementById("home").addEventListener("click", () => {
	let element = document.getElementById("home");
	openSite('index.html');
	setAnimationsDuration("0.7s");
})
document.getElementById("syntax").addEventListener("click", () => {
	openSite('syntax.html');
	setAnimationsDuration("0.7s");
})
document.getElementById("download").addEventListener("click", () => {
	window.open("fcc.exe");
	setAnimationsDuration("0.7s");
})
