// ============================
// IMAGE MODAL FUNCTIONALITY
// ============================

const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ============================
// FORM VALIDATION
// ============================

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});