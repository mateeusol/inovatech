
// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle do menu mobile
    mobileMenuButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
    });

    // Scroll suave para links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para altura do header
                    behavior: "smooth"
                });

                // Fecha menu mobile
                if (!mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.add("hidden");
                }
            }
        });
    });

    // Fecha menu mobile ao clicar fora
    document.addEventListener("click", function(e) {
        if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});
