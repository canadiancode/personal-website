// Hero Parallax section
document.addEventListener('scroll', (e) => {
    const windowWidth = window.innerWidth;

    // rocks, tree line and sunset
    const imageOne = document.querySelector('.heroImg1');
    const imageTwo = document.querySelector('.heroImg2');
    const imageFour = document.querySelector('.heroImg4');
    const spacer = document.querySelector('.imageSpacer');

    // mountains and moon
    const mtnLayerThreeL = document.querySelector('.mtnLayer3L');
    const mtnLayerThreeR = document.querySelector('.mtnLayer3R');
    const mtnLayerTwoR = document.querySelector('.mtnLayer2R');
    const mtnLayerTwoL = document.querySelector('.mtnLayer2L');
    const mtnLayerOneR = document.querySelector('.mtnLayer1R');
    const mtnLayerOneL = document.querySelector('.mtnLayer1L');
    const moon = document.querySelector('.moon');

    let boundingClientRect = imageFour.getBoundingClientRect();

    // animation calculation
    let imageOneAnimation = boundingClientRect.y / 15;
    let imageTwoAnimation = boundingClientRect.y / -20;
    let mtnLayerThreeAnimationLeft = boundingClientRect.y / 5
    let mtnLayerThreeAnimationRight = (boundingClientRect.y * -1) / 5;
    let mtnLayerTwoAnimationLeft = boundingClientRect.y / 3
    let mtnLayerTwoAnimationRight = (boundingClientRect.y * -1) / 3;
    let mtnLayerOneAnimationLeft = boundingClientRect.y / 1.5
    let mtnLayerOneAnimationRight = (boundingClientRect.y * -1) / 1.5;
    let moonAnimation = (boundingClientRect.y * -1) * 0.7;
    
    // if statement to determine window size
    if (windowWidth >= 1600) {
        const imageOneOriginalHeight = 160;
        const imageTwoOriginalHeight = 50;

        // layer 1
        let imageOneFromTop = imageOneOriginalHeight + imageOneAnimation;
        imageOne.style.transform = `translateY(${imageOneFromTop}px)`;

        // layer 2
        let imageTwoFromTop =  imageTwoOriginalHeight + imageTwoAnimation
        imageTwo.style.transform = `translateY(${imageTwoFromTop}px)`;
        
        // mtn layer 3 left & right
        mtnLayerThreeL.style.transform = `translateX(${mtnLayerThreeAnimationLeft}px)`;
        mtnLayerThreeR.style.transform = `translateX(${mtnLayerThreeAnimationRight}px)`;

        // mtn layer 2 left & right
        mtnLayerTwoL.style.transform = `translateX(${mtnLayerTwoAnimationLeft}px)`;
        mtnLayerTwoR.style.transform = `translateX(${mtnLayerTwoAnimationRight}px)`;

        // mtn layer 1 left & right
        mtnLayerOneL.style.transform = `translateX(${mtnLayerOneAnimationLeft}px)`;
        mtnLayerOneR.style.transform = `translateX(${mtnLayerOneAnimationRight}px)`;

        // moon
        moon.style.transform = `translateY(${moonAnimation}px)`;

    } else {
        const imageOneOriginalHeight = 90;
        const imageTwoOriginalHeight = 20;

        // layer 1
        let imageOneFromTop = imageOneOriginalHeight + imageOneAnimation;
        imageOne.style.transform = `translateY(${imageOneFromTop}px)`;

        // layer 2
        let imageTwoFromTop =  imageTwoOriginalHeight + imageTwoAnimation
        imageTwo.style.transform = `translateY(${imageTwoFromTop}px)`;

        // mtn layer 3 left & right
        mtnLayerThreeL.style.transform = `translateX(${mtnLayerThreeAnimationLeft}px)`;
        mtnLayerThreeR.style.transform = `translateX(${mtnLayerThreeAnimationRight}px)`;

        // mtn layer 2 left & right
        mtnLayerTwoL.style.transform = `translateX(${mtnLayerTwoAnimationLeft}px)`;
        mtnLayerTwoR.style.transform = `translateX(${mtnLayerTwoAnimationRight}px)`;

        // mtn layer 1 left & right
        mtnLayerOneL.style.transform = `translateX(${mtnLayerOneAnimationLeft}px)`;
        mtnLayerOneR.style.transform = `translateX(${mtnLayerOneAnimationRight}px)`;

        // moon
        moon.style.transform = `translateY(${moonAnimation}px)`;
    }

    // heading text scroll, color and opacity animation
    const heroText = document.querySelector('.heroText');
    let heroTextScroll = boundingClientRect.y * -1
    heroText.style.transform = `translateY(${heroTextScroll}px)`;

    let heroTextOpacity = 1.5 - ((boundingClientRect.y * -4) / 1000);
    heroText.style.opacity = `${heroTextOpacity}`;
    let redColor = 0;
    let greenColor = 0;
    let blueColor = 0;

    if (heroTextScroll > 127) {
        redColor = 233;
        greenColor = 153;
        blueColor = 127;
    } else {
        redColor = (heroTextScroll * 2);
        greenColor = (heroTextScroll * 1.2);
        blueColor = heroTextScroll;
    }

    const heroTextEl = document.querySelectorAll('.heroTextEl');
    heroTextEl.forEach(text => {
        text.style.color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        text.style.letterSpacing = `${(heroTextScroll / 70)}px`;
        
        if ((heroTextScroll / 200) > 1) {
            text.style.transform = `scale(${(heroTextScroll / 200)})`;
        } else {
            text.style.transform = `scale(1)`;
        }

    });

    if (heroTextScroll > 400) {
        heroText.style.display = 'none';
    } else {
        heroText.style.display = 'flex';
    }

});

// Hero text mouse move aniation
document.addEventListener('mousemove', (e) => {

    const heroTextHeadingOne = document.querySelector('.heroTextHeadingOne');
    const heroTextHeadingTwo = document.querySelector('.heroTextHeadingTwo');

    let windowWidth = window.innerWidth;
    let clientX = e.clientX;
    let centerPx = clientX - (windowWidth / 2);
    let mainHeadingValue = centerPx / 25;
    let subHeadingValue = centerPx / 80;
    heroTextHeadingOne.style.transform = `translateX(${mainHeadingValue}px)`;
    heroTextHeadingTwo.style.transform = `translateX(${subHeadingValue}px)`;
})

// Heading display animation on load
setTimeout(() => {

    const heroTextHeadingOne = document.querySelector('.heroTextHeadingOne');
    const heroTextHeadingTwo = document.querySelector('.heroTextHeadingTwo');

    // animation
    heroTextHeadingOne.style.transform = 'translate(0px)';
    heroTextHeadingOne.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';

    setTimeout(() => {
        // animation
        heroTextHeadingTwo.style.transform = 'translate(0px)';
        heroTextHeadingTwo.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    }, 500);
}, 200);
