var slider_img = document.querySelector('.slider-img');
var images = ['virat-kohli-1.png', 'virat-kohli-2.png', 'virat-kohli-3.png', 'virat-kohli-4.png', 'virat-kohli-5.png', 'virat-kohli-6.png', 'virat-kohli-7.png', 'virat-kohli-8.png', 'virat-kohli-9.png', 'virat-kohli-10.png', 'virat-kohli-11.png', 'virat-kohli-12.png', 'virat-kohli-13.png'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "images/" + images[i]);
}