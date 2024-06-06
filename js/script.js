document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category h2");
    
    categories.forEach(category => {
        category.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
