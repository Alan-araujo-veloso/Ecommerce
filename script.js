// ====== DARK MODE ======
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Salvar preferência
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

// Carregar preferência ao abrir a página
window.onload = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️";
    }
};

// ====== BARRA DE BUSCA ======
const searchBar = document.getElementById("searchBar");
const products = document.querySelectorAll(".product"); // Cada card de produto

searchBar.addEventListener("keyup", (e) => {
    const searchText = e.target.value.toLowerCase();

    products.forEach((product) => {
        const productName = product.querySelector(".product-name").textContent.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
