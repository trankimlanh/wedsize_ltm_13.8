/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* =========================
   ĐÓNG MENU SAU KHI CLICK
========================= */

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   FORM LIÊN HỆ
========================= */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Xin chào " +
        name +
        "! Tin nhắn của bạn đã được ghi nhận."
    );

    form.reset();

});


/* =========================
   NĂM HIỆN TẠI
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   HIỆU ỨNG MENU KHI CUỘN
========================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});
