if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
window.onload = function () {
  window.scrollTo(0, 0);
  revealOnScroll();
};

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  reveals.forEach((element) => {
    observer.observe(element);
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileDropdown");
  const icon = document.getElementById("menuIcon");

  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileDropdown");
  const btn = document.querySelector(".mobile-menu-btn");
  const icon = document.getElementById("menuIcon");

  if (
    !menu.contains(event.target) &&
    !btn.contains(event.target) &&
    menu.classList.contains("open")
  ) {
    menu.classList.remove("open");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

const modal = document.getElementById("playModal");

function openModal() {
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("open");
  }, 10);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
  document.body.style.overflow = "auto";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyIP() {
  navigator.clipboard.writeText("mc.notka.pp.ua");
  const toast = document.getElementById("toast");
  toast.style.top = "100px";
  setTimeout(() => {
    toast.style.top = "-100px";
  }, 2000);
}

const loadMoreBtn = document.getElementById("loadMoreBtn");

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", function () {
    const hiddenItems = document.querySelectorAll(".news-hidden");
    hiddenItems.forEach((item) => {
      item.classList.remove("news-hidden");
      item.style.animation = "fadeInUp 0.6s ease forwards";
    });
    this.style.display = "none";
  });
}

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".wiki-section");
  const navLinks = document.querySelectorAll(".wiki-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-section");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-section");
    }
  });
});
