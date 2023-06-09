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

// Change the time of day
const timeSwitch = document.querySelector('.switchLabel');
timeSwitch.addEventListener('click', () => {

    const heroImageNight = document.querySelector('.heroImgNight');
    const heroImageDay = document.querySelector('.heroImgDay');
    const heroImgMoon = document.querySelector('.heroImgMoon');
    const heroImgSun = document.querySelector('.heroImgSun');
    const moonSun = document.querySelectorAll('.moonSun');
    
    moonSun.forEach(element => {
        element.style.transition = '1s ease';
    });

    if (heroImageDay.style.opacity === '1') {
        heroImageNight.style.opacity = '1';
        heroImgMoon.style.opacity = '1';
        heroImgMoon.style.transform = 'translateY(0px)';
        heroImageDay.style.opacity = '0';
        heroImgSun.style.opacity = '0';
        heroImgSun.style.transform = 'translateY(500px)';
    } else {
        heroImageDay.style.opacity = '1';
        heroImgSun.style.opacity = '1';
        heroImgSun.style.transform = 'translateY(0px)';
        heroImageNight.style.opacity = '0';
        heroImgMoon.style.opacity = '0';
        heroImgMoon.style.transform = 'translateY(500px)';
    }

    moonSun.forEach(element => {
        setTimeout(() => {
            element.style.transition = '0s ease';
        }, 1000);
    });

});

// Open and close header
const holdingPhoneEl = document.querySelector('.holdingPhoneEl');
const openHeader = document.querySelector('.openHeader');
const closeHeader = document.querySelector('.closeHeader');
const elementsToBlur = document.querySelectorAll('.blur');
openHeader.addEventListener('click', () => {

    // Change side of header/phone
    const windowWidth = window.innerWidth;
    if (windowWidth >= 650) {
        holdingPhoneEl.style.transform = 'translate(-220px, -455px) rotate(0deg)';
    } else if (windowWidth < 650 && windowWidth >= 500) {
        holdingPhoneEl.style.transform = 'translate(-300px, -455px) rotate(0deg) scale(0.9)';
    } else if (windowWidth < 500 && windowWidth >= 450) {
        holdingPhoneEl.style.transform = 'translate(-363px, -455px) rotate(0deg) scale(0.8)';
    } else if (windowWidth < 450 && windowWidth >= 400) {
        holdingPhoneEl.style.transform = 'translate(-363px, -455px) rotate(0deg) scale(0.8)';
    } else if (windowWidth < 400 && windowWidth >= 350) {
        holdingPhoneEl.style.transform = 'translate(-388px, -455px) rotate(0deg) scale(0.8)';
    } else if (windowWidth < 350) {
        holdingPhoneEl.style.transform = 'translate(-412px, -455px) rotate(0deg) scale(0.8)';
    }
    const windowHeight = window.innerHeight;
    if (windowHeight < 650) {
        holdingPhoneEl.style.transform = 'translate(-300px, -521px) rotate(0deg) scale(0.9)';
    };

    // blur elements
    elementsToBlur.forEach(element => {
        element.style.filter = 'blur(10px)';
        if (!element.classList.contains('noBoxShadow')) {
            element.style.boxShadow = '0px 0px 10px 24px var(--darker-blue-bg)';
        }
    });

});
closeHeader.addEventListener('click', () => {
    holdingPhoneEl.style.transform = 'translate(-1150px, -450px) rotate(-50deg)';
    // blur elements
    elementsToBlur.forEach(element => {
        element.style.filter = 'blur(0px)';
        element.style.boxShadow = '0px 0px -5px 0px var(--darker-blue-bg)';
    });
});
window.addEventListener('keydown', closeHeaderFunction);
document.querySelectorAll('.headerItem').forEach(item => {
    item.addEventListener('click', closeHeaderFunction);
})
function closeHeaderFunction(event) {
    if (event.key === 'Escape' || event.target.classList.contains('headerItem')) {
        holdingPhoneEl.style.transform = 'translate(-1150px, -450px) rotate(-50deg)';
    // blur elements
    elementsToBlur.forEach(element => {
        element.style.filter = 'blur(0px)';
        element.style.boxShadow = '0px 0px -5px 0px var(--darker-blue-bg)';
    });
    };
};

// Parallax on scroll animation
document.addEventListener('scroll', (e) => {
    const windowWidth = window.innerWidth;

    // rocks, tree line and sunset
    const imageOne = document.querySelector('.heroImg1');
    const imageTwo = document.querySelector('.heroImg2');
    const imageFour = document.querySelector('.heroImg4');

    // mountains and moon
    const mtnLayerThreeL = document.querySelector('.mtnLayer3L');
    const mtnLayerThreeR = document.querySelector('.mtnLayer3R');
    const mtnLayerTwoR = document.querySelector('.mtnLayer2R');
    const mtnLayerTwoL = document.querySelector('.mtnLayer2L');
    const mtnLayerOneR = document.querySelector('.mtnLayer1R');
    const mtnLayerOneL = document.querySelector('.mtnLayer1L');
    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');

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

        // moon and sun
        moon.style.transform = `translateY(${moonAnimation}px)`;
        sun.style.transform = `translateY(${moonAnimation}px)`;

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

        // moon and sun
        moon.style.transform = `translateY(${moonAnimation}px)`;
        sun.style.transform = `translateY(${moonAnimation}px)`;
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
    topOfSectionTwo.style.transform = `translateY(${30 + aboutUsTextParallaxValue}px)`;

    // mole and bedrock parallax
    const bedrock = document.querySelector('.bedrock');
    let bedrockParallaxValue = heroTextScroll / 20;
    bedrock.style.transform = `translateY(${bedrockParallaxValue}px)`;
    const mole = document.querySelector('.mole');
    let moleParallaxValue = (50 + (heroTextScroll / 20)) * -1;
    mole.style.transform = `translateY(${moleParallaxValue}px)`;

    // Scroll to top button display
    // Scroll to top of window
    const scrollToTopButton = document.querySelectorAll('.scrollToTop');
    scrollToTopButton.forEach(button => {
        if (window.scrollY === 0) {
            button.style.opacity = '0';
        } else {
            button.style.opacity = '1';
        }
    });

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

    // contact us section
    const contactUsImgLayerTwo = document.querySelector('.contactUsImgLayerTwo');
    let contactUsLayerTwoX = centerWidthPx / 550;
    let contactUsLayerTwoY = centerHeightPx / 550;
    contactUsImgLayerTwo.style.transform = `translate(${contactUsLayerTwoX}px, ${contactUsLayerTwoY}px)`;

    const contactUsImgLayerThree = document.querySelector('.contactUsImgLayerThree');
    let contactUsLayerThreeX = centerWidthPx / 200;
    let contactUsLayerThreeY = centerHeightPx / 200;
    contactUsImgLayerThree.style.transform = `translate(${contactUsLayerThreeX}px, ${contactUsLayerThreeY}px)`;

    const contactUsImgLayerFour = document.querySelector('.contactUsImgLayerFour');
    let contactUsLayerFourX = centerWidthPx / 70;
    let contactUsLayerFourY = centerHeightPx / 70;
    contactUsImgLayerFour.style.transform = `translate(${contactUsLayerFourX}px, ${contactUsLayerFourY}px)`;


});

// About Me section text display animation
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
                }, 500);
            }, 500);
        }
    })
}, portfolioProjectOptions);
projectImageFourObserver.observe(projectFourCover);

// Animation to display portfolio header text
const portfolioTextOption = {
    rootMargin: "0px",
    threshold: 0.6
}
const portfolioHeader = document.querySelectorAll('.sectionFourText > h4');
const portfolioHeaderTextObserver = new IntersectionObserver(function(entries, portfolioTextObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.textShadow = 'var(--section-title-text-shadow)';
            entry.target.style.transform = 'translateY(0px)';
            entry.target.style.color = 'var(--black)';
            entry.target.style.opacity = '1';
        }
    })
}, portfolioTextOption);
portfolioHeader.forEach(header => {
    portfolioHeaderTextObserver.observe(header);
});

// Animation to display portfolio paragraph text
const portfolioParagraph = document.querySelectorAll('.sectionFourText > p');
const portfolioParTextObserver = new IntersectionObserver(function(entries, portfolioTextObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.textShadow = 'var(--par-text-shadow)';
                entry.target.style.transform = 'translateY(0px)';
                entry.target.style.color = 'var(--section-par-text-color)';
                entry.target.style.opacity = '1';
            }, 200);            
        }
    })
}, portfolioTextOption);
portfolioParagraph.forEach(paragraph => {
    portfolioParTextObserver.observe(paragraph);
});

// Animation to display portfolio button
const portfolioButton = document.querySelectorAll('.sectionFourText > a > button');
const portfolioButtonObserver = new IntersectionObserver(function(entries, portfolioTextObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.transform = 'translateY(0px)';
                entry.target.style.opacity = '1';
            }, 400);            
        }
    })
}, portfolioTextOption);
portfolioButton.forEach(button => {
    portfolioButtonObserver.observe(button);
});


// Service Steps
const steps = document.querySelectorAll('.step');
steps.forEach(container => {
    container.addEventListener('click', (event) => {
        if (!event.target.classList.contains('active')) {
            // removed class for all steps
            steps.forEach(step => {
                step.classList.remove('active');
            });
            // add active class for selected step
            container.classList.add('active');
        }
    });
});

// Contact me text animation display
// About Me section text display animation
const contactUsHeading = document.querySelector('.contactUsHeading');
const contactUsTextObserver = new IntersectionObserver(function(entries, textIntersectionObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutUsHeading = document.querySelector('.contactUsHeading');
            aboutUsHeading.style.color = 'var(--black)';
            aboutUsHeading.style.textShadow = 'var(--section-title-text-shadow)';
            aboutUsHeading.style.transform = 'translateY(0px)';
            aboutUsHeading.style.opacity = '1';

            const contactUsPar = document.querySelector('.contactUsPar');
            setTimeout(() => {
                contactUsPar.style.color = 'var(--section-par-text-color)';
                contactUsPar.style.transform = 'translateY(0px)';
                contactUsPar.style.opacity = '1';
            }, 300);
        }
    })
}, intersectionObserverOptions);
contactUsTextObserver.observe(contactUsHeading);

// Email.JS script
(function() {
    emailjs.init('sCcEdrZXGZFl9sLyp');
})();
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const from_name = document.querySelector('#user_name');
    const business_name = document.querySelector('#business_name');
    const user_email = document.querySelector('#user_email');
    const message = document.querySelector('#message');

    try {
        emailjs.sendForm('service_m6rjjr9', 'template_d9xdnm9', form)
        .then(function() {
            console.log('Email sent!');
            
        }, function(error) {
            console.log('Error:', error);
        });
    } catch (error) {
        console.log(`Did not send form: ${error}`);
    }
});


// Scroll to top of window
const scrollToTopButton = document.querySelectorAll('.scrollToTop');
scrollToTopButton.forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});