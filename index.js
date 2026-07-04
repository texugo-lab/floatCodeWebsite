
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
	if(document.querySelectorAll("#theme-switch #dark-mode")) document.querySelectorAll("#theme-switch #dark-mode").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("#theme-switch #light-mode")) document.querySelectorAll("#theme-switch #light-mode").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("#header")) document.querySelectorAll("header").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("nav")) document.querySelectorAll("nav").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll(".code")) document.querySelectorAll(".code").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll(".code")) document.querySelectorAll(".canvas").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("svg")) document.querySelectorAll("svg").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("select")) document.querySelectorAll("select").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("#theme-switch")) document.querySelectorAll("#theme-switch").forEach((item) => {item.style.transitionDuration = duration;});
}

document.querySelectorAll(".canvas *").forEach((item) => {
	item.style.scale = "1";
})
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
function getSidebar(){
	let sidebar = document.querySelector('.sidebar');
	let returnValue = false;
	sidebar.classList.forEach((item) => {
		if(item === 'open') returnValue = true;
	})
	return returnValue;
}
function toggleSidebar(){
	let sidebar = document.querySelector('.sidebar');
	let sidebarOpen = getSidebar();
	if(sidebarOpen)
		sidebar.classList.remove('open');
	else
		sidebar.classList.add('open');
}

// Syntax //
if(document.querySelector("header") && document.querySelector("header").querySelector("select") && document.querySelector("header").querySelector("select").querySelectorAll("option"))
{
	document.querySelector("header").querySelector("select").querySelectorAll("option").forEach((item2) => {
		item2.addEventListener("click", () => {
			const value = document.querySelector("header").querySelector("select").value;
			if(document.querySelector("header").querySelector("select"))
			{
				if(value != "All")
				{
					document.querySelectorAll(".filters div").forEach((item) => {
						if(item.id != value && item.parentElement.id != value)
						{
							item.style.display = "none";
						}
						else{
							item.style.display = "block";
						}
					})
				}
				else{
					document.querySelectorAll(".filters div").forEach((item) => {
						item.style.display = "block";
					})
				}
			}
		})
	})
}
