document.addEventListener("DOMContentLoaded", () => {
// Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          overlay = document.querySelector('.overlay');

    const modal = document.querySelector('.overlay .modal');
    const form = document.querySelector('.overlay .modal-sent');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    const sendButtons = document.querySelectorAll('[data-modal-send-btn]');
        sendButtons.forEach(btn => {
        btn.addEventListener('click', openForm);
    });


    function openForm() {
        closeModal();
        setTimeout(() => {
        showOverlay();
        form.classList.remove('hide');
        }, 2000);
        showOverlay();
        form.classList.remove('hide');
    }

    function closeForm() {
        hideOverlay();
        form.classList.add('hide');
    }

    function showOverlay() {
        overlay.classList.add('show');
        overlay.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function hideOverlay() {
        overlay.classList.add('hide');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        closeForm();
        showOverlay();
        modal.classList.remove('hide');
    }


    function closeModal() {
        hideOverlay();
        modal.classList.add('hide');
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.getAttribute('data-close') == "") {
        closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && overlay.classList.contains('show')) {
        closeModal();
        }
    });



    const width = window.innerWidth;
        if (width > 1290) {
            const benefitsSlider = new Swiper('.benefits__wrapper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    // simulateTouch: true,
            slidesPerView: 5,
        });
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            slidesPerView: 4,
        });
    }
});

