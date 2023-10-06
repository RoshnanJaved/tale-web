let Slide = document.getElementById("Slide");
let SlideInfo = document.getElementById("SlideInfo");
// getting NAV-SliderBtn
let SlideBtn = document.getElementById("SlideBtn");
let NavLinks = document.getElementById("Links");

// gettingSlideButtons 
let LeftBtn = document.getElementById("Left");
let RightBtn = document.getElementById("Right");
// getting the sliderDiv
let Slider = document.getElementById("Slider");
// gettinng the fill div of them progress 
let Fill = document.getElementsByClassName("Fill");
let sliderheading = document.getElementsByClassName("sliderheading");


Slide.addEventListener("mouseenter", () => {
    SlideInfo.style.opacity = 1;
    SlideInfo.style.top = `60px`;
    SlideInfo.style.zIndex = `111`;
})
Slide.addEventListener("mouseleave", () => {
    SlideInfo.style.opacity = 0;
    SlideInfo.style.top = `110px`;
})

// nav-slide functionality

SlideBtn.addEventListener("click", () => {
    NavLinks.classList.toggle("activeLink")
})

// Functionality for the WorkNProject Slider

let defaultValue = -100;
Slider.style.transform = `translateX(${defaultValue}px)`

// making the Slider Responsive
function windowWidth() {
    if (window.innerWidth < 429 && window.innerWidth > 375) {
        defaultValue = 39;
        Slider.style.transform = `translateX(${defaultValue}px)`
    }
    else if (window.innerWidth < 375 && window.innerWidth > 1) {
        defaultValue = 0;
        Slider.style.transform = `translateX(${defaultValue}px)`
        console.log("ndejs");
    }
    else {
        defaultValue = -100;
    }
    console.log(defaultValue);

}
windowWidth()


let SlideFunction = (direction) => {
    if (direction === "right" && defaultValue < 1820) {
        defaultValue = defaultValue + 320;
        Slider.style.transform = `translateX(${-defaultValue}px)`;

    } else if (direction === "left" && defaultValue > -410) {
        defaultValue = defaultValue - 320;
        Slider.style.transform = `translateX(${-defaultValue}px)`;
        console.log(defaultValue);
    }
    else {

        console.log(defaultValue);
    }
}

// functionality for the progress 
function animateFill() {
    for (let i = 0; i < 95; i++) {
        const firstDigit = i
        setTimeout(() => {
            const width = i + '%';
            Fill[0].style.width = width;
            sliderheading[0].textContent = firstDigit + "%";
        }, 100);
    }
    for (let i = 0; i < 65; i++) {
        const firstDigit = i
        setTimeout(() => {
            const width = i + '%';
            Fill[1].style.width = width;
            sliderheading[1].textContent = firstDigit + "%";
        }, 100);
    }
    for (let i = 0; i < 81; i++) {
        const firstDigit = i
        setTimeout(() => {
            const width = i + '%';
            Fill[2].style.width = width;
            sliderheading[2].textContent = firstDigit + "%";
        }, 100);
    }
}

animateFill();





// Main Events 
window.addEventListener('resize', windowWidth);
LeftBtn.addEventListener("click", () => SlideFunction("left"));
RightBtn.addEventListener("click", () => SlideFunction("right"));
