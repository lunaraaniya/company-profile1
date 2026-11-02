// =====================================
// THE POP JASTIP - JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. TAHUN OTOMATIS PADA FOOTER

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // 2. MENU NAVIGASI MOBILE

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const menuIsOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(menuIsOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                menuIsOpen
                    ? "Tutup menu navigasi"
                    : "Buka menu navigasi"
            );

            menuToggle.textContent = menuIsOpen ? "✕" : "☰";
        });


        // Tutup menu setelah tautan diklik

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (item) {

            item.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu navigasi"
                );

                menuToggle.textContent = "☰";
            });

        });


        // Tutup menu jika layar kembali ke ukuran desktop

        window.addEventListener("resize", function () {

            if (window.innerWidth > 700) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu navigasi"
                );

                menuToggle.textContent = "☰";
            }

        });

    }


    // 3. FORMULIR CONTACT US

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Ambil data dari formulir

            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const topik = document.getElementById("topik").value;
            const pesan = document.getElementById("pesan").value.trim();

            // Periksa data yang diisi

            if (!nama || !email || !topik || !pesan) {

                formMessage.textContent =
                    "Mohon lengkapi semua kolom terlebih dahulu.";

                formMessage.className = "form-message error";

                return;
            }

            // Susun isi email

            const subject = encodeURIComponent(
                "Pesan The Pop Jastip - " + topik
            );

            const body = encodeURIComponent(
                "Halo The Pop Jastip,\n\n" +
                "Saya ingin menghubungi perusahaan.\n\n" +
                "Nama: " + nama + "\n" +
                "Email: " + email + "\n" +
                "Topik: " + topik + "\n\n" +
                "Pesan:\n" + pesan + "\n\n" +
                "Terima kasih."
            );

            // GANTI ALAMAT INI DENGAN EMAIL PERUSAHAAN

            const emailTujuan = "thepopjastip@example.com";

            // Beri tahu pengguna bahwa aplikasi email akan dibuka

            formMessage.textContent =
                "Menyiapkan email. Silakan kirim pesan melalui aplikasi email yang terbuka.";

            formMessage.className = "form-message success";

            // Buka aplikasi email dengan data formulir

            window.location.href =
                "mailto:" + emailTujuan +
                "?subject=" + subject +
                "&body=" + body;

        });

    }

});// =====================================
// FILTER PRODUK POP MART
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".showcase-card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            // Aktifkan tombol yang dipilih

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            // Tampilkan produk sesuai kategori

            productCards.forEach(function (card) {

                const category = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });

});
```javascript
/* =====================================
   TRANSISI HALAMAN THE POP JASTIP
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {
    // Membuat elemen animasi secara otomatis
    const transition = document.createElement("div");

    transition.className = "page-transition";
    transition.innerHTML = `
        <div class="transition-doll">
            <span class="transition-star star-one">✦</span>
            <span class="transition-star star-two">✧</span>
            <span class="transition-star star-three">✦</span>
            <span class="transition-star star-four">✧</span>

            <div class="doll-body">🧸</div>
        </div>

        <h2 class="transition-title">The Pop Jastip</h2>

        <p class="transition-subtitle">
            Menyiapkan kejutan lucu untukmu
            <span class="transition-dots"></span>
        </p>
    `;

    document.body.appendChild(transition);

    // Menampilkan halaman setelah animasi awal
    requestAnimationFrame(function () {
        setTimeout(function () {
            transition.classList.add("hidden");
        }, 250);
    });

    // Menjalankan animasi saat pengunjung membuka halaman lain
    document.addEventListener("click", function (event) {
        const link = event.target.closest("a");

        if (!link) return;

        // Abaikan tautan yang tidak perlu menjalankan transisi
        if (
            link.target === "_blank" ||
            link.hasAttribute("download") ||
            link.hasAttribute("data-no-transition") ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        const destination = new URL(link.href, window.location.href);

        // Hanya untuk halaman HTML dalam website yang sama
        if (
            destination.origin !== window.location.origin ||
            !destination.pathname.endsWith(".html") ||
            destination.pathname === window.location.pathname
        ) {
            return;
        }

        // Jangan mengganggu klik yang dibatalkan oleh kode lain
        if (event.defaultPrevented || event.button !== 0) {
            return;
        }

        event.preventDefault();

        // Tampilkan ilustrasi bergerak
        transition.classList.remove("hidden");

        // Buka halaman tujuan setelah animasi
        setTimeout(function () {
            window.location.href = destination.href;
        }, 900);
    });
});
```
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            productCards.forEach(function (card) {
                const category = card.dataset.category;

                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});