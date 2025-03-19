window.onload = function () {
    const preloader = document.getElementById('preloader');
    // preloader.classList.add('ready')
    preloader.classList.add('hide-preloader');
    setInterval(function () {
        preloader.classList.add('preloader-hidden');
    }, 990);
}

