
// Dark mode //

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
	setAnimationsDuration("0s");
  	document.body.classList.add('darkmode');
  	localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = () => {
	setAnimationsDuration("0s");
  	document.body.classList.remove('darkmode');
  	localStorage.setItem('darkmode', null);
}
const setAnimationsDuration = (duration) => {
	document.body.style.transitionDuration = duration;
	document.querySelectorAll("#theme-switch #dark-mode").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll("#theme-switch #light-mode").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll("header").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll("nav").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll(".code").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll("nav a").forEach((item) => {item.style.transitionDuration = duration;})
	document.querySelectorAll("svg").forEach((item) => {item.style.transitionDuration = duration;})

}

if(darkmode === "active")
	enableDarkmode();
else
	disableDarkmode();
function toggleMode() {
	darkmode = localStorage.getItem('darkmode');
	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
	setAnimationsDuration("0.7s");
}

// End //

function openSite(site) {
	window.open(site, "_self");
}
if(document.querySelector('.sidebar')){
	document.querySelector('.sidebar').style.right = "-45vw";
}
function toggleSidebar(){
	let sidebar = document.querySelector('.sidebar');
	if(sidebar.style.right == "0px")
		sidebar.style.right = "-45vw";
	else if(sidebar.style.right == "-45vw")
		sidebar.style.right = "0px";
}
