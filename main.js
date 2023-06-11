// Skrypty JavaScript dla interakcji na stronie
// Tutaj możesz dodać dowolne skrypty dla dynamicznych elementów

// Przykładowy kod, który może być dostosowany do Twoich potrzeb
document.addEventListener("DOMContentLoaded", function() {
    // Dodaj obsługę scrolla dla nawigacji
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var target = this.getAttribute("href");
            var targetElement = document.querySelector(target);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
