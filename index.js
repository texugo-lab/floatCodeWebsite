function wait(ms){return new Promise(resolve => setTimeout(resolve, ms));}

async function start() {
	{
		document.querySelector("body").style.transitionDuration = "0s";
		document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((item) => {item.style.transitionDuration = "0s";});
		document.querySelectorAll(".lr, .canvas, .canvas div").forEach((item) => {item.style.transitionDuration = "0s";});
		document.querySelectorAll(".code, #highlight, #description, #description b").forEach((item) => {item.style.transitionDuration = "0s";});
		document.querySelectorAll("header, nav").forEach((item) => {item.style.transitionDuration = "0s";});
		document.querySelectorAll("li, p, svg, button").forEach((item) => {item.style.transitionDuration = "0s";});
		document.querySelectorAll("select, ::picker(select)").forEach((item) => {item.style.transitionDuration = "0s";});

		await wait(0);
		document.querySelectorAll("html *").forEach((item) => {
			if(item.style.transitionDuration){
				item.style.transitionDuration = "0.7s";
			}
		})
	}


}

// Dark mode //


document.querySelectorAll(".canvas *").forEach((item) => {
	item.style.scale = "1";
});

let darkmode = localStorage.getItem('darkmode');
if(darkmode === "active")
{
	document.body.classList.toggle('darkmode');
}
function toggleMode()
{
	darkmode = localStorage.getItem('darkmode');
	if(darkmode !== "active") {
  		localStorage.setItem('darkmode', 'active');
	}
	else {
  		localStorage.setItem('darkmode', null);
	}

  	document.body.classList.toggle('darkmode');
}

// End //

function openSite(site){
	window.open(site, "_self");
}
function getSidebar(){
	let sidebar = document.querySelector('aside');
	let returnValue = false;
	sidebar.classList.forEach((item) => {
		if(item === 'open') returnValue = true;
	})
	return returnValue;
}
function toggleSidebar(){
	let sidebar = document.querySelector('aside');
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
				document.querySelectorAll(".filters div").forEach((item) => {
					if(value != "All")
					{
						if(item.id != value && item.parentElement.id != value)
						{
							item.style.display = "none";
						}
						else{
							item.style.display = "block";
						}
					}
					else
					{
						item.style.display = "block";
					}
				})
			}
		})
	})
}

function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	const isVisibleOnXAxis = rect.x >= 0 && rect.right <= window.innerWidth;
	const isVisibleOnYAxis = rect.top >= 50 && rect.bottom <= window.innerHeight;
	return isVisibleOnXAxis && isVisibleOnYAxis;
}

document.addEventListener('scroll', function frame() {
	if(document.querySelector("select") && document.querySelector("select#bottom")) {
		if(!isElementInViewport(document.querySelector("select")))
			document.querySelector("select#bottom").style.display = "flex";
		else
			document.querySelector("select#bottom").style.display = "none";
	}
});
start();
