const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;
let touchstartX = 0;
let touchendX = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `images/portfolio/spolu_foto-${i+1}.jpg`;
    largeImage.src = path;
    imageName.innerHTML = images[i].title;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if (index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if (index < images.length - 1){
        updateImage(index + 1);
    }
})

function checkDirection(){
    if (touchendX < touchstartX){
        leftArrow.click();
    }
    if (touchendX > touchstartX){
        rightArrow.click();
    }
}
largeImage.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
})

largeImage.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
})

const btn = document.getElementById('btn-form');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Posílám...';

   const serviceID = 'default_service';
   const templateID = 'template_dw84kcw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Pošli zprávu';
      alert('Posláno!');
    }, (err) => {
      btn.value = 'Pošli zprávu';
      alert(JSON.stringify(err));
    });
});