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
        setTimeout(() => {
            heroTextHeadingOne.style.transition = '0s';
            heroTextHeadingTwo.style.transition = '0s';
        }, 600);
    }, 500);
}, 200);

// Parallax on scroll animation
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
        const imageOneOriginalHeight = 70;
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

    // gap filler for edge case scrolling from hero section
    const sectionTwo = document.querySelector('.sectionTwo');
    if (boundingClientRect.y < -200) {
        sectionTwo.style.boxShadow = '15px 0px 0px 20px var(--darker-blue-bg)';
    } else {
        sectionTwo.style.boxShadow = '0px 0px 0px 0px var(--darker-blue-bg)';
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

        if ((heroTextScroll / 300) > 1) {
            text.style.transform = `scale(${(heroTextScroll / 300)})`;
        } else {
            text.style.transform = `scale(1)`;
        }

    });

    if (heroTextScroll > 400) {
        heroText.style.display = 'none';
    } else {
        heroText.style.display = 'flex';
    }

    // about us text parralax effect
    const topOfSectionTwo = document.querySelector('.sectionTwoText');
    let rocksGetBoundingClientRect = topOfSectionTwo.getBoundingClientRect();
    let aboutUsTextParallaxValue = (rocksGetBoundingClientRect.y / 8) - 100;
    topOfSectionTwo.style.transform = `translateY(${aboutUsTextParallaxValue}px)`;

    // mole and bedrock parallax
    const bedrock = document.querySelector('.bedrock');
    let bedrockParallaxValue = heroTextScroll / 20;
    bedrock.style.transform = `translateY(${bedrockParallaxValue}px)`;
    const mole = document.querySelector('.mole');
    let moleParallaxValue = (50 + (heroTextScroll / 20)) * -1;
    mole.style.transform = `translateY(${moleParallaxValue}px)`;

    // about us intersection observer
    const headshotOutline = document.querySelector('.sectionTwoTextElements');
    const intersectionObserverOptions = {
        rootMargin: "0px",
        threshold: 0.6
    }
    const textIntersectionObserver = new IntersectionObserver(function(entries, textIntersectionObserver) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const aboutUsHeading = document.querySelector('.aboutUsHeading');
                aboutUsHeading.style.color = 'var(--black)';
                aboutUsHeading.style.textShadow = 'var(--section-title-text-shadow)';
                aboutUsHeading.style.transform = 'translateY(0px)';
                aboutUsHeading.style.opacity = '1';

                const aboutUsPar = document.querySelector('.aboutUsPar');
                setTimeout(() => {
                    aboutUsPar.style.color = 'var(--section-par-text-color)';
                    aboutUsPar.style.transform = 'translateY(0px)';
                    aboutUsPar.style.opacity = '1';
                }, 300);
            }
        })
    }, intersectionObserverOptions);
    textIntersectionObserver.observe(headshotOutline);

});

// mouse move aniation
document.addEventListener('mousemove', (e) => {

    // hero section
    const heroTextShadowColor = 'var(--darker-blue-bg)';
    const heroTextHeadingOne = document.querySelector('.heroTextHeadingOne');
    const heroTextHeadingTwo = document.querySelector('.heroTextHeadingTwo');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let clientX = e.clientX;
    let clientY = e.clientY;
    let centerWidthPx = clientX - (windowWidth / 2);
    let centerHeightPx = clientY - (windowHeight / 2);
    let heroHeadingTextShadowY = centerHeightPx / 80;
    let heroHeadingTextShadowX = centerWidthPx / 120;
    heroTextHeadingOne.style.textShadow = `${heroHeadingTextShadowX}px ${heroHeadingTextShadowY + 8}px 12px ${heroTextShadowColor}`;
    heroTextHeadingTwo.style.textShadow = `${heroHeadingTextShadowX * 0.6}px ${(heroHeadingTextShadowY + 4) * 0.6}px 8px ${heroTextShadowColor}`;


    // about us section
    const headshot = document.querySelector('.headshot');
    let headshotClientX = e.clientX;
    let headshotClientY = e.clientY;
    let centerX = (headshotClientX - (windowWidth / 2)) / 50;
    let centerY = (headshotClientY - (windowHeight / 2)) / 50;
    headshot.style.transform = `translate(${centerX}px, ${centerY}px)`;
});

// Portfolio Image Display Animation 
const portfolioProjectOptions = {
    threshold: 1,
    rootMargin: "-5px"
}

    // Portfolio Project 1
const projectOneCover = document.querySelector('.projectOneCover');
const projectImageOneObserver = new IntersectionObserver(function(entries, projectImageObserver) {
    entries.forEach(entry => {

        const bones = document.querySelector('.learnEarnBones');
        const layerOne = document.querySelector('.learnEarnProjectOne');
        const layerTwo = document.querySelector('.learnEarnProjectTwo');

        if (entry.isIntersecting) {
            bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
            setTimeout(() => {
                layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
                layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
                bones.style.display = 'none';

                setTimeout(() => {

                    layerOne.style.transition = '0.5s linear';
                    layerTwo.style.transition = '0.5s linear';

                    document.addEventListener('mousemove', (event) => {
    
                        let boundingClient = projectOneCover.getBoundingClientRect();
                        let clientX = event.clientX;
                        let clientY = event.clientY;
                    
                        // X axis
                        let boundingClientFromRight = boundingClient.x;
                        let boundingClientWidth = boundingClient.width;
                        let boundClientCenterX = (clientX - (boundingClientFromRight + (boundingClientWidth / 2))) * 0.05;
                    
                        // Y axis
                        let boundingClientFromTop = boundingClient.y;
                        let boundingClientHeight = boundingClient.height;
                        let boundClientCenterY = (clientY - (boundingClientFromTop + (boundingClientHeight / 2))) * 0.05;
                    
                        layerOne.style.transform = `rotateX(${boundClientCenterY * 0.5}deg) translateX(${boundClientCenterX}px) rotateY(${boundClientCenterX * 0.5}deg) translateY(${boundClientCenterY}px)`;
                        layerTwo.style.transform = `rotateX(${boundClientCenterY * 0.1}deg) translateX(${-boundClientCenterX * 0.5}px) rotateY(${boundClientCenterX * 0.1}deg) translateY(${- boundClientCenterY * 0.5}px)`;

                    });
                }, 500);
            }, 500);
        }
    })
}, portfolioProjectOptions);
projectImageOneObserver.observe(projectOneCover);

    // Portfolio Project 2
const projectTwoCover = document.querySelector('.projectTwoCover');
const projectImageTwoObserver = new IntersectionObserver(function(entries, projectImageObserver) {
    entries.forEach(entry => {

        const bones = document.querySelector('.TwitterBones');
        const layerOne = document.querySelector('.TwitterProjectOne');
        const layerTwo = document.querySelector('.TwitterProjectTwo');

        if (entry.isIntersecting) {
            bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
            setTimeout(() => {
                layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
                layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
                bones.style.display = 'none';

                setTimeout(() => {

                    layerOne.style.transition = '0.5s linear';
                    layerTwo.style.transition = '0.5s linear';

                    document.addEventListener('mousemove', (event) => {
    
                        let boundingClient = projectTwoCover.getBoundingClientRect();
                        let clientX = event.clientX;
                        let clientY = event.clientY;
                    
                        // X axis
                        let boundingClientFromRight = boundingClient.x;
                        let boundingClientWidth = boundingClient.width;
                        let boundClientCenterX = (clientX - (boundingClientFromRight + (boundingClientWidth / 2))) * 0.05;
                    
                        // Y axis
                        let boundingClientFromTop = boundingClient.y;
                        let boundingClientHeight = boundingClient.height;
                        let boundClientCenterY = (clientY - (boundingClientFromTop + (boundingClientHeight / 2))) * 0.05;
                    
                        layerOne.style.transform = `rotateX(${boundClientCenterY * 0.5}deg) translateX(${boundClientCenterX}px) rotateY(${boundClientCenterX * 0.5}deg) translateY(${boundClientCenterY}px)`;
                        layerTwo.style.transform = `rotateX(${boundClientCenterY * 0.1}deg) translateX(${-boundClientCenterX * 0.5}px) rotateY(${boundClientCenterX * 0.1}deg) translateY(${- boundClientCenterY * 0.5}px)`;

                    });
                }, 500);
            }, 500);
        }
    })
}, portfolioProjectOptions);
projectImageTwoObserver.observe(projectTwoCover);

    // Portfolio Project 3
const projectThreeCover = document.querySelector('.projectThreeCover');
const projectImageThreeObserver = new IntersectionObserver(function(entries, projectImageObserver) {
    entries.forEach(entry => {

        const bones = document.querySelector('.vmmBones');
        const layerOne = document.querySelector('.vmmProjectOne');
        const layerTwo = document.querySelector('.vmmProjectTwo');

        if (entry.isIntersecting) {
            bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
            setTimeout(() => {
                layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
                layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
                bones.style.display = 'none';

                setTimeout(() => {

                    layerOne.style.transition = '0.5s linear';
                    layerTwo.style.transition = '0.5s linear';

                    document.addEventListener('mousemove', (event) => {
    
                        let boundingClient = projectThreeCover.getBoundingClientRect();
                        let clientX = event.clientX;
                        let clientY = event.clientY;
                    
                        // X axis
                        let boundingClientFromRight = boundingClient.x;
                        let boundingClientWidth = boundingClient.width;
                        let boundClientCenterX = (clientX - (boundingClientFromRight + (boundingClientWidth / 2))) * 0.05;
                    
                        // Y axis
                        let boundingClientFromTop = boundingClient.y;
                        let boundingClientHeight = boundingClient.height;
                        let boundClientCenterY = (clientY - (boundingClientFromTop + (boundingClientHeight / 2))) * 0.05;
                    
                        layerOne.style.transform = `rotateX(${boundClientCenterY * 0.5}deg) translateX(${boundClientCenterX}px) rotateY(${boundClientCenterX * 0.5}deg) translateY(${boundClientCenterY}px)`;
                        layerTwo.style.transform = `rotateX(${boundClientCenterY * 0.1}deg) translateX(${-boundClientCenterX * 0.5}px) rotateY(${boundClientCenterX * 0.1}deg) translateY(${- boundClientCenterY * 0.5}px)`;

                    });
                }, 500);
            }, 500);
        }
    })
}, portfolioProjectOptions);
projectImageThreeObserver.observe(projectThreeCover);

    // Portfolio Project 3
const projectFourCover = document.querySelector('.projectFourCover');
const projectImageFourObserver = new IntersectionObserver(function(entries, projectImageObserver) {
    entries.forEach(entry => {

        const bones = document.querySelector('.algoBones');
        const layerOne = document.querySelector('.algoProjectOne');
        const layerTwo = document.querySelector('.algoProjectTwo');

        if (entry.isIntersecting) {
            bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
            setTimeout(() => {
                layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
                layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
                bones.style.display = 'none';

                setTimeout(() => {

                    layerOne.style.transition = '0.5s linear';
                    layerTwo.style.transition = '0.5s linear';

                    document.addEventListener('mousemove', (event) => {
    
                        let boundingClient = projectFourCover.getBoundingClientRect();
                        let clientX = event.clientX;
                        let clientY = event.clientY;
                    
                        // X axis
                        let boundingClientFromRight = boundingClient.x;
                        let boundingClientWidth = boundingClient.width;
                        let boundClientCenterX = (clientX - (boundingClientFromRight + (boundingClientWidth / 2))) * 0.05;
                    
                        // Y axis
                        let boundingClientFromTop = boundingClient.y;
                        let boundingClientHeight = boundingClient.height;
                        let boundClientCenterY = (clientY - (boundingClientFromTop + (boundingClientHeight / 2))) * 0.05;
                    
                        layerOne.style.transform = `rotateX(${boundClientCenterY * 0.5}deg) translateX(${boundClientCenterX}px) rotateY(${boundClientCenterX * 0.5}deg) translateY(${boundClientCenterY}px)`;
                        layerTwo.style.transform = `rotateX(${boundClientCenterY * 0.1}deg) translateX(${-boundClientCenterX * 0.5}px) rotateY(${boundClientCenterX * 0.1}deg) translateY(${- boundClientCenterY * 0.5}px)`;

                    });
                }, 500);
            }, 500);
        }
    })
}, portfolioProjectOptions);
projectImageFourObserver.observe(projectFourCover);

