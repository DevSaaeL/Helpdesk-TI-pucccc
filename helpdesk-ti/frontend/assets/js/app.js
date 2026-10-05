document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");
    const mobileMenuButton = document.querySelector(".mobile-menu-button");

    if (mobileMenuButton && sidebar) {
        mobileMenuButton.addEventListener("click", () => {
            sidebar.classList.toggle("show");
        });
    }

    const passwordToggles = document.querySelectorAll(".password-toggle");

    passwordToggles.forEach(button => {

        button.addEventListener("click", () => {

            const input = button.parentElement.querySelector("input");

            if (!input) {
                return;
            }

            if (input.type === "password") {

                input.type = "text";

                button.innerHTML = '<i class="bi bi-eye-slash"></i>';

            } else {

                input.type = "password";

                button.innerHTML = '<i class="bi bi-eye"></i>';

            }

        });

    });

});