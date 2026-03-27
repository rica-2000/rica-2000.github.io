document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector<HTMLElement>(".hamburger");
	const navbar = document.querySelector<HTMLElement>(".navbar");
	const navLinks = document.querySelector<HTMLElement>(".nav-links");
	const links = document.querySelectorAll(".nav-links a");

	if (hamburger && navLinks) {
		hamburger.addEventListener("click", () => {
			navLinks.classList.toggle("active");
		});
	}

	links.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks?.classList.remove("active");
		});
	});

	const updateNavbarState = () => {
		if (!navbar) return;
		navbar.classList.toggle("scrolled", window.scrollY > 18);
	};

	window.addEventListener("scroll", updateNavbarState, { passive: true });
	updateNavbarState();

	document
		.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
		.forEach((anchor) => {
			anchor.addEventListener("click", (e) => {
				e.preventDefault();
				const targetHref = anchor.getAttribute("href");
				if (!targetHref) return;

				const target = document.querySelector<HTMLElement>(targetHref);
				target?.scrollIntoView({ behavior: "smooth" });
			});
		});

	if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		const revealTargets = document.querySelectorAll<HTMLElement>(
			"section, .value-card, .project-card, .tech-category, .achievement-card",
		);

		revealTargets.forEach((el, index) => {
			el.classList.add("reveal-on-scroll");
			el.style.setProperty("--reveal-index", String(index % 8));
		});

		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						revealObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2, rootMargin: "0px 0px -30px 0px" },
		);

		revealTargets.forEach((el) => revealObserver.observe(el));
	}

	const lightbox = document.getElementById("image-lightbox");
	const lightboxImg = document.getElementById(
		"lightbox-img",
	) as HTMLImageElement | null;
	const lightboxClose = document.getElementById("lightbox-close");
	const zoomableImages = document.querySelectorAll<HTMLImageElement>(
		".project-img img, .project-gallery img, .achievement-img img",
	);

	const openLightbox = (src: string, alt?: string) => {
		if (!lightbox || !lightboxImg) return;
		lightboxImg.src = src;
		lightboxImg.alt = alt || "Vista ampliada";
		lightbox.classList.add("open");
		lightbox.setAttribute("aria-hidden", "false");
	};

	const closeLightbox = () => {
		if (!lightbox || !lightboxImg) return;
		lightbox.classList.remove("open");
		lightbox.setAttribute("aria-hidden", "true");
		lightboxImg.src = "";
	};

	zoomableImages.forEach((img) => {
		img.addEventListener("click", () => {
			openLightbox(img.src, img.alt);
		});
	});

	if (lightboxClose) {
		lightboxClose.addEventListener("click", closeLightbox);
	}

	if (lightbox) {
		lightbox.addEventListener("click", (event) => {
			if (event.target === lightbox) {
				closeLightbox();
			}
		});
	}

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeLightbox();
		}
	});

	const cards = document.querySelectorAll<HTMLElement>(".project-card");

	cards.forEach((card) => {
		const buttons = card.querySelectorAll<HTMLButtonElement>(".view-btn");
		if (!buttons.length) return;

		const shortText = card.querySelector<HTMLElement>(".project-short");
		const techText = card.querySelector<HTMLElement>(".project-tech");

		const setView = (view: "short" | "tech") => {
			buttons.forEach((btn) => {
				btn.classList.toggle("active", btn.dataset.view === view);
			});

			shortText?.classList.toggle("active", view === "short");
			techText?.classList.toggle("active", view === "tech");
		};

		buttons.forEach((btn) => {
			btn.addEventListener("click", () => {
				const view = btn.dataset.view as "short" | "tech";
				if (view === "short" || view === "tech") {
					setView(view);
				}
			});
		});
	});
});
