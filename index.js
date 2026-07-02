
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
if(document.querySelector('.sidebar')){
	document.querySelector('.sidebar').style.right = "-46vw";
}
function toggleSidebar(){
	let sidebar = document.querySelector('.sidebar');
	if(sidebar.style.right == "0px")
		sidebar.style.right = "-46vw";
	else if(sidebar.style.right == "-46vw")
		sidebar.style.right = "0px";
}
