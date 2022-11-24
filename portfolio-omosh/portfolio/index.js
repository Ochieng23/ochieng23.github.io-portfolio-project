function setUpEvents () {
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNum = 1;
const length = images.length


const nextSlide = () => {slider.style.transform = `translateX(-${slideNum * 800}px)`;
slideNum++;}

const prevSlide = ()=>{slider.style.transform = `translateX(0px)`;
slideNum = 1;}

 right.addEventListener ("click",()=> {
    slideNum < length? nextSlide () : prevSlide();

});

const lastSlide = ()=>{slider.style.transform = `translateX(${(length-1)*800}px)`;
slideNum = length;}

const postSlide = ()=> {slider.style.transform = `translateX(-${(slideNum-2)*800}px)`;
slideNum--;}

left.addEventListener('click',()=>{
    slideNum > 1? postSlide() : lastSlide ();

});
}
window.onload = function (){
    setUpEvents();
}




