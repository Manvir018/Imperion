const scrollIcons = document.querySelectorAll('.scroll-icons i');
let backgroundPositionX = 0;

scrollIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
        if (this.classList.contains('fa-arrow-right')) {
            backgroundPositionX -= 100;
        } else {
            backgroundPositionX += 100;
        }

        document.querySelector('.hero').style.backgroundPositionX = `${backgroundPositionX}px`;
    });
});
