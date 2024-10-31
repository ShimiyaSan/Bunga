function openBook() {
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');

    page1.style.transform = 'rotateY(-180deg)';
    page1.style.opacity = '0'; // Halaman pertama hilang
    page2.style.transform = 'rotateY(0deg)';
    page2.style.opacity = '1'; // Halaman kedua muncul
    
    setTimeout(() => {
        page2.classList.add('zoom');
    }, 500); // Adjust delay as needed
    
    setupObserver()
    
}

function zoomAndRedirect() {
    setTimeout(() =>{
    const animasiElement = document.getElementById('animasi');
      animasiElement.classList.add('fullscreen'); // Trigger fullscreen animation
    animasiElement.style.display = 'block'; // Show the animasi element
    }, 2000);

    // Wait 1 second before redirecting
    setTimeout(() => {
        window.location.href = 'desc.html';
    }, 3000); // Adjust delay if needed
}


// Fungsi untuk mengatur Intersection Observer
function setupObserver() {
    const target = document.getElementById('target');
    
    // Cek jika target masuk viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const opacity = window.getComputedStyle(target).opacity;
            console.log("Opacity target:", opacity); // Debug: menampilkan nilai opacity

            // Cek jika elemen terlihat di layar dan opacity nya 0
            if (entry.isIntersecting && opacity === "1") {
                console.log("Memenuhi syarat: viewport dan opacity 0");
                zoomAndRedirect(); // Zoom dan pindah halaman
                observer.unobserve(target); // Hentikan pengamatan setelah terlihat
            }
        });
    }, { threshold: 0.5 }); // threshold 0.5 berarti 50% elemen harus terlihat

    observer.observe(target);
}￼Enter
