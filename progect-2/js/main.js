(function () {

    // Burger
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.nav__link')
        if (!burgerIcon && !navLink) return
        if (document.documentElement.clientWidth > 900) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Modal
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')
    modal.addEventListener('click', closeModal)
    modalButton.addEventListener('click', openModal)
    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
    function closeModal(e) {
        e.preventDefault()
        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // Tabs
    const tabControls = document.querySelector('.tab-controls')
    tabControls.addEventListener('click', toggleTab)
    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('.tab-controls__link--active')) return
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')
        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')
    }

    // Accordion
    const accordionList = document.querySelectorAll('.accordion-list')

    accordionList.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')
            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })

    // Slider gallery
    new Swiper('.gallery__slider', {
        slidesPerView: 1.5,
        spaceBetween: 15,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            }, 
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        }
    });
    
    // Slider testimonials
    new Swiper('.testimonials__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        }
    });

    // mask
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})()