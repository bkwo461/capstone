let mainText = document.querySelector('.main-text');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    // console.log("scrollY", value);

    if(value > 200){
        mainText.style.animation = "slide2 1s ease-out forwards";
    }
    else{
        mainText.style.animation = "slide 1s ease-out forwards";
    }
});