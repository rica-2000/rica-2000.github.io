document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");
	const links = document.querySelectorAll(".nav-links a");

	hamburger.addEventListener("click", () => {
		navLinks.classList.toggle("active");
	});

	links.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("active");
		});
	});

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
});
