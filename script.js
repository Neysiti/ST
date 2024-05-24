function toggleAlbum() {
    var album = document.querySelector('.album');
    var albumContent = document.querySelector('.album-content');
    
    if (albumContent.style.display === "none" || albumContent.style.display === "") {
        albumContent.style.display = "flex";
        setTimeout(function() {
            album.classList.add('open');
        }, 10); // Slight delay to allow the display property to take effect
    } else {
        album.classList.remove('open');
        setTimeout(function() {
            albumContent.style.display = "none";
        }, 500); // Wait for the transition to complete before hiding
    }
}

let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.querySelector('.carousel-track');
    const totalSlides = slides.length;
    
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const newTransform = `translateX(-${slideIndex * 100}%)`;
    track.style.transform = newTransform;
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000); // 5 секунд для кожного слайда
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(autoSlide, 5000); // Починаємо автослайд через 5 секунд після завантаження сторінки
});


function toggleAlbum2() {
    var album = document.querySelector('.album2');
    var albumContent = document.querySelector('.album-content2');
    
    if (albumContent.style.display === "none" || albumContent.style.display === "") {
        albumContent.style.display = "flex";
        setTimeout(function() {
            album.classList.add('open2');
        }, 10); // Slight delay to allow the display property to take effect
    } else {
        album.classList.remove('open2');
        setTimeout(function() {
            albumContent.style.display = "none";
        }, 500); // Wait for the transition to complete before hiding
    }
}

function toggleAlbum3() {
    var album = document.querySelector('.album3');
    var albumContent = document.querySelector('.album-content3');
    
    if (albumContent.style.display === "none" || albumContent.style.display === "") {
        albumContent.style.display = "flex";
        setTimeout(function() {
            album.classList.add('open3');
        }, 10); // Slight delay to allow the display property to take effect
    } else {
        album.classList.remove('open3');
        setTimeout(function() {
            albumContent.style.display = "none";
        }, 500); // Wait for the transition to complete before hiding
    }
}