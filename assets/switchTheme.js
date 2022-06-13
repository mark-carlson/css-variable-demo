const switchBtn = document.getElementById('switch-theme');
const bodyTag = document.getElementsByTagName('body')[0];

switchBtn.addEventListener('click', () => {
    const isChristmas = bodyTag.classList.contains('christmas');
    switch (isChristmas) {
        case true:
            bodyTag.classList.remove('christmas');
            bodyTag.classList.add('halloween');
            break;
        case false:
        default:
            bodyTag.classList.remove('halloween');
            bodyTag.classList.add('christmas');
            break;
    }
})