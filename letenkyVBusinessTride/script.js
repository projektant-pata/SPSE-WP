// /mnt/data/script.js

let currentIndex = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 25}%)`;
};

const nextSlide = () => showSlide(currentIndex + 1);

// Automatically change slide every 5 seconds
setInterval(nextSlide, 5000);

// Generate PDF function
const generatePDF = (data) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`Odkud: ${data.from}`, 10, 10);
    doc.text(`Kam: ${data.to}`, 10, 20);
    doc.text(`Datum odletu: ${data.departureDate}`, 10, 30);
    doc.text(`Datum návratu: ${data.returnDate}`, 10, 40);
    doc.text(`Typ: ${data.tripType}`, 10, 50);
    doc.text(`Jméno: ${data.name}`, 10, 60);
    doc.text(`E-mail: ${data.email}`, 10, 70);
    doc.text(`Telefon: ${data.phone}`, 10, 80);
    doc.text(`Datum narození: ${data.birthDate}`, 10, 90);

    doc.save('orderDetails.pdf');
};

// Form validation and submission logic
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const from = document.getElementById("odkud").value;
    const to = document.getElementById("kam").value;
    const departureDate = new Date(document.getElementById("od").value);
    const returnDate = new Date(document.getElementById("do").value);
    const birthDate = new Date(document.getElementById("narozeni").value);
    const phone = document.getElementById("tel").value;
    const tripType = document.getElementById("typ").value;
    const name = document.getElementById("jmeno").value;
    const email = document.getElementById("email").value;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore time part

    const currentYear = today.getFullYear();
    const birthYear = birthDate.getFullYear();
    const age = currentYear - birthYear;

    if (from === to) {
        alert("Odkud a Kam musí být různé destinace.");
        return;
    }

    if (departureDate <= today) {
        alert("Datum odletu musí být alespoň zítra.");
        return;
    }

    if (returnDate <= departureDate) {
        alert("Datum návratu musí být alespoň jeden den po datu odletu.");
        return;
    }

    if (age < 18) {
        alert("Uživatel musí být starší 18 let.");
        return;
    }

    const phonePattern = /^\+?\d{9,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Telefonní číslo musí být ve správném formátu.");
        return;
    }

    const formData = {
        from,
        to,
        departureDate: departureDate.toLocaleDateString(),
        returnDate: returnDate.toLocaleDateString(),
        tripType,
        name,
        email,
        phone,
        birthDate: birthDate.toLocaleDateString()
    };

    generatePDF(formData);
});
