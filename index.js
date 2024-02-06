const scrollImagesWrapper = document.querySelector(".scroll-images-wrapper");
const leftScrollBtn = document.querySelector(".left-scroll-btn");
const rightScrollBtn = document.querySelector(".right-scroll-btn");

const handleLeftClick = e => {
   e.preventDefault();
   
   scrollImagesWrapper.scrollLeft -= 300;
}

const handleRightClick = e => {
   e.preventDefault();

   scrollImagesWrapper.scrollLeft += 350
}

leftScrollBtn.addEventListener('click', handleLeftClick);
rightScrollBtn.addEventListener('click', handleRightClick)