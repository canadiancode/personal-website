// Hero Parallax section
document.addEventListener('scroll', (e) => {

    const windowWidth = window.innerWidth;
    const imageOne = document.querySelector('.heroImg1');
    const imageTwo = document.querySelector('.heroImg2');
    const imageThree = document.querySelector('.heroImg3');
    const imageFour = document.querySelector('.heroImg4');
    const spacer = document.querySelector('.imageSpacer');
    let boundingClientRect = imageFour.getBoundingClientRect();


    let imageOneAnimation = (boundingClientRect.y) / 4;
    let imageTwoAnimation = (boundingClientRect.y) / 6;
    let imageThreeAnimation = (boundingClientRect.y) / 8;
    let spacerHeight = imageTwoAnimation * -1;
    
    if (windowWidth >= 1600) {
        const imageOneOriginalHeight = 150;
        const imageTwoOriginalHeight = 50;

        // layer 1
        let imageOneFromTop = imageOneOriginalHeight + imageOneAnimation;
        imageOne.style.transform = `translateY(${imageOneFromTop}px)`;

        // layer 2
        let imageTwoFromTop =  imageTwoOriginalHeight + imageTwoAnimation
        imageTwo.style.transform = `translateY(${imageTwoFromTop}px)`;

        // layer 3
        imageThree.style.transform = `translateY(${imageThreeAnimation}`;

        // spacer
        spacer.style.height = `${spacerHeight}px`;
    
    } else {
        const imageOneOriginalHeight = 120;
        const imageTwoOriginalHeight = 20;

        // layer 1
        let imageOneFromTop = imageOneOriginalHeight + imageOneAnimation;
        imageOne.style.transform = `translateY(${imageOneFromTop}px)`;

        // layer 2
        let imageTwoFromTop =  imageTwoOriginalHeight + imageTwoAnimation
        imageTwo.style.transform = `translateY(${imageTwoFromTop}px)`;

        // layer 3
        imageThree.style.transform = `translateY(${imageThreeAnimation}`;

        // spacer
        spacer.style.height = `${spacerHeight}px`;
    }


});