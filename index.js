function wait(ms){return new Promise(resolve => setTimeout(resolve, ms));}

// Dark mode //

let darkmode = localStorage.getItem('darkmode');
let themeSwitch = null;
if(document.getElementById('theme-switch'))
{
	themeSwitch = document.getElementById('theme-switch');
}

async function enableDarkmode(){
  	document.body.classList.add('darkmode');
  	localStorage.setItem('darkmode', 'active');
}
async function disableDarkmode(){
  	document.body.classList.remove('darkmode');
  	localStorage.setItem('darkmode', null);
}

document.querySelectorAll(".canvas *").forEach((item) => {
	item.style.scale = "1";
});
if(darkmode === "active")
{
	enableDarkmode();
}
else
{
	disableDarkmode();
}
function toggleMode()
{
	darkmode = localStorage.getItem('darkmode');
	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
}

// End //

function openSite(site){
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

document.addEventListener('mousemove', function frame() {

});

async function setAnims(){
	document.querySelector("body").style.transitionDuration = "0s";
	document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll(".code").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("#highlight").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("header").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("nav").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("li").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("button").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll(".sidebar").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("svg").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll(".lr").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll("select, ::picker(select)").forEach((item) => {item.style.transitionDuration = "0s";});
	document.querySelectorAll(".canvas").forEach((item) => {item.style.transitionDuration = "0s";});

	await wait(700);
	document.querySelectorAll("html *").forEach((item) => {
		if(item.style.transitionDuration){
			console.log(item);
			item.style.transitionDuration = "0.7s";
		}
	})


}

setAnims();
