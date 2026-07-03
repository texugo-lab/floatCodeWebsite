
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
	if(document.querySelectorAll("nav a")) document.querySelectorAll("nav a").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("svg")) document.querySelectorAll("svg").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("select")) document.querySelectorAll("select").forEach((item) => {item.style.transitionDuration = duration;});
	if(document.querySelectorAll("select")) document.querySelectorAll("select").forEach((item) => {item.style.transitionDuration = duration;});
}

if(darkmode === "active")
{
	enableDarkmode();
	document.querySelectorAll(".canvas *").forEach((item) => {item.style.scale = "1"})
}
else
{
	disableDarkmode();
	document.querySelectorAll(".canvas *").forEach((item) => {item.style.scale = "1"})
}
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

// Syntax //

document.querySelector("header").querySelector("select").querySelectorAll("option").forEach((item2) => {
	item2.addEventListener("click", () => {
		const value = document.querySelector("header").querySelector("select").value;
		console.log(value);
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
