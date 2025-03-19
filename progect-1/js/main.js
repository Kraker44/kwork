(function () {
    document.addEventListener('click', burger)
    function burger(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.nav__link')
        if (!burgerIcon && !navLink) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.header__phone')
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

    const calc = document.querySelector('.calc')
    const calcButton = document.querySelector('.calc__button')
    calc.addEventListener('click', closeCalc)
    calcButton.addEventListener('click', openCalc)
    function openCalc(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-calc')
    }
    function closeCalc(e) {
        e.preventDefault()
        const target = e.target
        if (target.closest('.cacl__cancel') || target.classList.contains('calc')) {
            document.body.classList.remove('body--opened-calc')
        }
    }


    const content = document.querySelector('.version__list')
    content.addEventListener('click', version)
    function version(e) {
        const target = e.target
        if (target != document.querySelector('.version__img--active'))
        if (target != document.querySelector('.version__img--active')) {
            if (target.closest('.version__img')) { 
                document.querySelector('.version__img--active').classList.remove('version__img--active')
                target.classList.add('version__img--active')
            }
        }
    }

    const color = document.querySelector('.walls')
    color.addEventListener('click', colorActive)
    function colorActive(e) {
        const target = e.target
        if (target.closest('.color')) {
            document.querySelector('.color--active').classList.remove('color--active')
            target.classList.add('color--active')
        }
    }

    const flor = document.querySelector('.flors')
    flor.addEventListener('click', florActive)
    function florActive(e) {
        const target = e.target
        if (target.closest('.flor')) {
            document.querySelector('.flor--active').classList.remove('flor--active')
            target.classList.add('flor--active')
        }
    }

    const door = document.querySelector('.rest')
    door.addEventListener('click', doorActive)
    function doorActive(e) {
        const target = e.target
        if (target.closest('.door')) {
            console.log('fdfsd')
            document.querySelector('.door--active').classList.remove('door--active')
            target.closest('.door').classList.add('door--active')
        }
    }

    const options = document.querySelector('.options')
    options.addEventListener('click', optionsActive)
    function optionsActive(e) {
        const target = e.target
        if (target.closest('.options__item')) {
            target.closest('.options__item').classList.toggle('options--active')
        }
    }

    const window = document.querySelector('.calc__window')
    window.addEventListener('click', windo)
    function windo(e) {
        const target = e.target
        if (target.closest('.content__button')) {
            document.querySelector('.content').classList.add('hide')
            document.querySelector('.data').classList.remove('hide')
        } 
        else if (target.closest('.data')) {
            if (target.closest('.data__title')) {
                document.querySelector('.content').classList.remove('hide')
                document.querySelector('.data').classList.add('hide')
            }
            else if (target.closest('.data_button')) {
                console.log(target)
                document.querySelector('.data').classList.add('hide')
                document.querySelector('.options').classList.remove('hide')
            }
        }
        else if (target.closest('.options')) {
            if (target.closest('.options-title')) {
                document.querySelector('.data').classList.remove('hide')
                document.querySelector('.options').classList.add('hide')
            }
            else if (target.closest('.options__button')) {
                document.body.classList.remove('body--opened-calc')
            }
        }
    }
})()