document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", function() {

        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;

        const phone = "201154166513";
        const message = `مرحبًا، أريد طلب ${productName}`;
const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        

        window.open(whatsappURL, "_blank");
    });
});