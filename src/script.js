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
});

