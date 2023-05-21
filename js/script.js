c = (el) => document.querySelector(el);
cs = (el) => document.querySelectorAll(el);

c('.menu-opener').addEventListener('click', () => {
    console.log('clicou');
    setTimeout(() => {
        if (c('.nav-mobile').style.display == 'flex') {
            c('.nav-mobile').style.display = 'none';
        } else {
            c('.nav-mobile').style.display = 'flex';
        };
    }, 100);
});