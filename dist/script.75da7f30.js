// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
// Heading display animation on load
setTimeout(function () {
  var heroTextHeadingOne = document.querySelector('.heroTextHeadingOne');
  var heroTextHeadingTwo = document.querySelector('.heroTextHeadingTwo');

  // animation
  heroTextHeadingOne.style.transform = 'translate(0px)';
  heroTextHeadingOne.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
  setTimeout(function () {
    // animation
    heroTextHeadingTwo.style.transform = 'translate(0px)';
    heroTextHeadingTwo.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    setTimeout(function () {
      heroTextHeadingOne.style.transition = '0s';
      heroTextHeadingTwo.style.transition = '0s';
    }, 600);
  }, 500);
}, 200);

// Change the time of day
var timeSwitch = document.querySelector('.switchLabel');
timeSwitch.addEventListener('click', function () {
  var heroImageNight = document.querySelector('.heroImgNight');
  var heroImageDay = document.querySelector('.heroImgDay');
  var heroImgMoon = document.querySelector('.heroImgMoon');
  var heroImgSun = document.querySelector('.heroImgSun');
  var moonSun = document.querySelectorAll('.moonSun');
  moonSun.forEach(function (element) {
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
  moonSun.forEach(function (element) {
    setTimeout(function () {
      element.style.transition = '0s ease';
    }, 1000);
  });
});

// Open and close header
var holdingPhoneEl = document.querySelector('.holdingPhoneEl');
var openHeader = document.querySelector('.openHeader');
var closeHeader = document.querySelector('.closeHeader');
var elementsToBlur = document.querySelectorAll('.blur');
openHeader.addEventListener('click', function () {
  // Change side of header/phone
  var windowWidth = window.innerWidth;
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
  var windowHeight = window.innerHeight;
  if (windowHeight < 650) {
    holdingPhoneEl.style.transform = 'translate(-300px, -521px) rotate(0deg) scale(0.9)';
  }
  ;

  // blur elements
  elementsToBlur.forEach(function (element) {
    element.style.filter = 'blur(10px)';
    if (!element.classList.contains('noBoxShadow')) {
      element.style.boxShadow = '0px 0px 10px 24px var(--darker-blue-bg)';
    }
  });
});
closeHeader.addEventListener('click', function () {
  holdingPhoneEl.style.transform = 'translate(-1150px, -450px) rotate(-50deg)';
  // blur elements
  elementsToBlur.forEach(function (element) {
    element.style.filter = 'blur(0px)';
    element.style.boxShadow = '0px 0px -5px 0px var(--darker-blue-bg)';
  });
});
window.addEventListener('keydown', closeHeaderFunction);
document.querySelectorAll('.headerItem').forEach(function (item) {
  item.addEventListener('click', closeHeaderFunction);
});
function closeHeaderFunction(event) {
  if (event.key === 'Escape' || event.target.classList.contains('headerItem')) {
    holdingPhoneEl.style.transform = 'translate(-1150px, -450px) rotate(-50deg)';
    // blur elements
    elementsToBlur.forEach(function (element) {
      element.style.filter = 'blur(0px)';
      element.style.boxShadow = '0px 0px -5px 0px var(--darker-blue-bg)';
    });
  }
  ;
}
;

// Parallax on scroll animation
document.addEventListener('scroll', function (e) {
  var windowWidth = window.innerWidth;

  // rocks, tree line and sunset
  var imageOne = document.querySelector('.heroImg1');
  var imageTwo = document.querySelector('.heroImg2');
  var imageFour = document.querySelector('.heroImg4');

  // mountains and moon
  var mtnLayerThreeL = document.querySelector('.mtnLayer3L');
  var mtnLayerThreeR = document.querySelector('.mtnLayer3R');
  var mtnLayerTwoR = document.querySelector('.mtnLayer2R');
  var mtnLayerTwoL = document.querySelector('.mtnLayer2L');
  var mtnLayerOneR = document.querySelector('.mtnLayer1R');
  var mtnLayerOneL = document.querySelector('.mtnLayer1L');
  var moon = document.querySelector('.moon');
  var sun = document.querySelector('.sun');
  var boundingClientRect = imageFour.getBoundingClientRect();

  // animation calculation
  var imageOneAnimation = boundingClientRect.y / 15;
  var imageTwoAnimation = boundingClientRect.y / -20;
  var mtnLayerThreeAnimationLeft = boundingClientRect.y / 5;
  var mtnLayerThreeAnimationRight = boundingClientRect.y * -1 / 5;
  var mtnLayerTwoAnimationLeft = boundingClientRect.y / 3;
  var mtnLayerTwoAnimationRight = boundingClientRect.y * -1 / 3;
  var mtnLayerOneAnimationLeft = boundingClientRect.y / 1.5;
  var mtnLayerOneAnimationRight = boundingClientRect.y * -1 / 1.5;
  var moonAnimation = boundingClientRect.y * -1 * 0.7;

  // if statement to determine window size
  if (windowWidth >= 1600) {
    var imageOneOriginalHeight = 160;
    var imageTwoOriginalHeight = 50;

    // layer 1
    var imageOneFromTop = imageOneOriginalHeight + imageOneAnimation;
    imageOne.style.transform = "translateY(".concat(imageOneFromTop, "px)");

    // layer 2
    var imageTwoFromTop = imageTwoOriginalHeight + imageTwoAnimation;
    imageTwo.style.transform = "translateY(".concat(imageTwoFromTop, "px)");

    // mtn layer 3 left & right
    mtnLayerThreeL.style.transform = "translateX(".concat(mtnLayerThreeAnimationLeft, "px)");
    mtnLayerThreeR.style.transform = "translateX(".concat(mtnLayerThreeAnimationRight, "px)");

    // mtn layer 2 left & right
    mtnLayerTwoL.style.transform = "translateX(".concat(mtnLayerTwoAnimationLeft, "px)");
    mtnLayerTwoR.style.transform = "translateX(".concat(mtnLayerTwoAnimationRight, "px)");

    // mtn layer 1 left & right
    mtnLayerOneL.style.transform = "translateX(".concat(mtnLayerOneAnimationLeft, "px)");
    mtnLayerOneR.style.transform = "translateX(".concat(mtnLayerOneAnimationRight, "px)");

    // moon and sun
    moon.style.transform = "translateY(".concat(moonAnimation, "px)");
    sun.style.transform = "translateY(".concat(moonAnimation, "px)");
  } else {
    var _imageOneOriginalHeight = 70;
    var _imageTwoOriginalHeight = 20;

    // layer 1
    var _imageOneFromTop = _imageOneOriginalHeight + imageOneAnimation;
    imageOne.style.transform = "translateY(".concat(_imageOneFromTop, "px)");

    // layer 2
    var _imageTwoFromTop = _imageTwoOriginalHeight + imageTwoAnimation;
    imageTwo.style.transform = "translateY(".concat(_imageTwoFromTop, "px)");

    // mtn layer 3 left & right
    mtnLayerThreeL.style.transform = "translateX(".concat(mtnLayerThreeAnimationLeft, "px)");
    mtnLayerThreeR.style.transform = "translateX(".concat(mtnLayerThreeAnimationRight, "px)");

    // mtn layer 2 left & right
    mtnLayerTwoL.style.transform = "translateX(".concat(mtnLayerTwoAnimationLeft, "px)");
    mtnLayerTwoR.style.transform = "translateX(".concat(mtnLayerTwoAnimationRight, "px)");

    // mtn layer 1 left & right
    mtnLayerOneL.style.transform = "translateX(".concat(mtnLayerOneAnimationLeft, "px)");
    mtnLayerOneR.style.transform = "translateX(".concat(mtnLayerOneAnimationRight, "px)");

    // moon and sun
    moon.style.transform = "translateY(".concat(moonAnimation, "px)");
    sun.style.transform = "translateY(".concat(moonAnimation, "px)");
  }

  // heading text scroll, color and opacity animation
  var heroText = document.querySelector('.heroText');
  var heroTextScroll = boundingClientRect.y * -1;
  heroText.style.transform = "translateY(".concat(heroTextScroll, "px)");
  var heroTextOpacity = 1.5 - boundingClientRect.y * -4 / 1000;
  heroText.style.opacity = "".concat(heroTextOpacity);
  var redColor = 0;
  var greenColor = 0;
  var blueColor = 0;
  if (heroTextScroll > 127) {
    redColor = 233;
    greenColor = 153;
    blueColor = 127;
  } else {
    redColor = heroTextScroll * 2;
    greenColor = heroTextScroll * 1.2;
    blueColor = heroTextScroll;
  }
  var heroTextEl = document.querySelectorAll('.heroTextEl');
  heroTextEl.forEach(function (text) {
    text.style.color = "rgb(".concat(redColor, ", ").concat(greenColor, ", ").concat(blueColor, ")");
    text.style.letterSpacing = "".concat(heroTextScroll / 70, "px");
    if (heroTextScroll / 300 > 1) {
      text.style.transform = "scale(".concat(heroTextScroll / 300, ")");
    } else {
      text.style.transform = "scale(1)";
    }
  });
  if (heroTextScroll > 400) {
    heroText.style.display = 'none';
  } else {
    heroText.style.display = 'flex';
  }

  // about us text parralax effect
  var topOfSectionTwo = document.querySelector('.sectionTwoText');
  var rocksGetBoundingClientRect = topOfSectionTwo.getBoundingClientRect();
  var aboutUsTextParallaxValue = rocksGetBoundingClientRect.y / 8 - 100;
  topOfSectionTwo.style.transform = "translateY(".concat(30 + aboutUsTextParallaxValue, "px)");

  // mole and bedrock parallax
  var bedrock = document.querySelector('.bedrock');
  var bedrockParallaxValue = heroTextScroll / 20;
  bedrock.style.transform = "translateY(".concat(bedrockParallaxValue, "px)");
  var mole = document.querySelector('.mole');
  var moleParallaxValue = (50 + heroTextScroll / 20) * -1;
  mole.style.transform = "translateY(".concat(moleParallaxValue, "px)");

  // Scroll to top button display
  // Scroll to top of window
  var scrollToTopButton = document.querySelectorAll('.scrollToTop');
  scrollToTopButton.forEach(function (button) {
    if (window.scrollY === 0) {
      button.style.opacity = '0';
    } else {
      button.style.opacity = '1';
    }
  });
});

// mouse move aniation
document.addEventListener('mousemove', function (e) {
  // hero section
  var heroTextShadowColor = 'var(--darker-blue-bg)';
  var heroTextHeadingOne = document.querySelector('.heroTextHeadingOne');
  var heroTextHeadingTwo = document.querySelector('.heroTextHeadingTwo');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var clientX = e.clientX;
  var clientY = e.clientY;
  var centerWidthPx = clientX - windowWidth / 2;
  var centerHeightPx = clientY - windowHeight / 2;
  var heroHeadingTextShadowY = centerHeightPx / 80;
  var heroHeadingTextShadowX = centerWidthPx / 120;
  heroTextHeadingOne.style.textShadow = "".concat(heroHeadingTextShadowX, "px ").concat(heroHeadingTextShadowY + 8, "px 12px ").concat(heroTextShadowColor);
  heroTextHeadingTwo.style.textShadow = "".concat(heroHeadingTextShadowX * 0.6, "px ").concat((heroHeadingTextShadowY + 4) * 0.6, "px 8px ").concat(heroTextShadowColor);

  // about us section
  var headshot = document.querySelector('.headshot');
  var headshotClientX = e.clientX;
  var headshotClientY = e.clientY;
  var centerX = (headshotClientX - windowWidth / 2) / 50;
  var centerY = (headshotClientY - windowHeight / 2) / 50;
  headshot.style.transform = "translate(".concat(centerX, "px, ").concat(centerY, "px)");

  // contact us section
  var contactUsImgLayerTwo = document.querySelector('.contactUsImgLayerTwo');
  var contactUsLayerTwoX = centerWidthPx / 550;
  var contactUsLayerTwoY = centerHeightPx / 550;
  contactUsImgLayerTwo.style.transform = "translate(".concat(contactUsLayerTwoX, "px, ").concat(contactUsLayerTwoY, "px)");
  var contactUsImgLayerThree = document.querySelector('.contactUsImgLayerThree');
  var contactUsLayerThreeX = centerWidthPx / 200;
  var contactUsLayerThreeY = centerHeightPx / 200;
  contactUsImgLayerThree.style.transform = "translate(".concat(contactUsLayerThreeX, "px, ").concat(contactUsLayerThreeY, "px)");
  var contactUsImgLayerFour = document.querySelector('.contactUsImgLayerFour');
  var contactUsLayerFourX = centerWidthPx / 70;
  var contactUsLayerFourY = centerHeightPx / 70;
  contactUsImgLayerFour.style.transform = "translate(".concat(contactUsLayerFourX, "px, ").concat(contactUsLayerFourY, "px)");
});

// About Me section text display animation
var headshotOutline = document.querySelector('.sectionTwoTextElements');
var intersectionObserverOptions = {
  rootMargin: "0px",
  threshold: 0.6
};
var textIntersectionObserver = new IntersectionObserver(function (entries, textIntersectionObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var aboutUsHeading = document.querySelector('.aboutUsHeading');
      aboutUsHeading.style.color = 'var(--black)';
      aboutUsHeading.style.textShadow = 'var(--section-title-text-shadow)';
      aboutUsHeading.style.transform = 'translateY(0px)';
      aboutUsHeading.style.opacity = '1';
      var aboutUsPar = document.querySelector('.aboutUsPar');
      setTimeout(function () {
        aboutUsPar.style.color = 'var(--section-par-text-color)';
        aboutUsPar.style.transform = 'translateY(0px)';
        aboutUsPar.style.opacity = '1';
      }, 300);
    }
  });
}, intersectionObserverOptions);
textIntersectionObserver.observe(headshotOutline);

// Portfolio Image Display Animation 
var portfolioProjectOptions = {
  threshold: 1,
  rootMargin: "-5px"
};

// Portfolio Project 1
var projectOneCover = document.querySelector('.projectOneCover');
var projectImageOneObserver = new IntersectionObserver(function (entries, projectImageObserver) {
  entries.forEach(function (entry) {
    var bones = document.querySelector('.learnEarnBones');
    var layerOne = document.querySelector('.learnEarnProjectOne');
    var layerTwo = document.querySelector('.learnEarnProjectTwo');
    if (entry.isIntersecting) {
      bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
      setTimeout(function () {
        layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
        layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
        bones.style.display = 'none';
      }, 500);
    }
  });
}, portfolioProjectOptions);
projectImageOneObserver.observe(projectOneCover);

// Portfolio Project 2
var projectTwoCover = document.querySelector('.projectTwoCover');
var projectImageTwoObserver = new IntersectionObserver(function (entries, projectImageObserver) {
  entries.forEach(function (entry) {
    var bones = document.querySelector('.TwitterBones');
    var layerOne = document.querySelector('.TwitterProjectOne');
    var layerTwo = document.querySelector('.TwitterProjectTwo');
    if (entry.isIntersecting) {
      bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
      setTimeout(function () {
        layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
        layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
        bones.style.display = 'none';
        setTimeout(function () {
          layerOne.style.transition = '0.5s linear';
          layerTwo.style.transition = '0.5s linear';
        }, 500);
      }, 500);
    }
  });
}, portfolioProjectOptions);
projectImageTwoObserver.observe(projectTwoCover);

// Portfolio Project 3
var projectThreeCover = document.querySelector('.projectThreeCover');
var projectImageThreeObserver = new IntersectionObserver(function (entries, projectImageObserver) {
  entries.forEach(function (entry) {
    var bones = document.querySelector('.vmmBones');
    var layerOne = document.querySelector('.vmmProjectOne');
    var layerTwo = document.querySelector('.vmmProjectTwo');
    if (entry.isIntersecting) {
      bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
      setTimeout(function () {
        layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
        layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
        bones.style.display = 'none';
        setTimeout(function () {
          layerOne.style.transition = '0.5s linear';
          layerTwo.style.transition = '0.5s linear';
        }, 500);
      }, 500);
    }
  });
}, portfolioProjectOptions);
projectImageThreeObserver.observe(projectThreeCover);

// Portfolio Project 3
var projectFourCover = document.querySelector('.projectFourCover');
var projectImageFourObserver = new IntersectionObserver(function (entries, projectImageObserver) {
  entries.forEach(function (entry) {
    var bones = document.querySelector('.algoBones');
    var layerOne = document.querySelector('.algoProjectOne');
    var layerTwo = document.querySelector('.algoProjectTwo');
    if (entry.isIntersecting) {
      bones.style.transform = 'perspective(500px) translateZ(20px) rotateY(90deg)';
      setTimeout(function () {
        layerOne.style.transform = 'perspective(500px) translateZ(20px) rotateY(0deg)';
        layerTwo.style.transform = 'perspective(1000px) translateZ(20px) rotateY(0deg)';
        bones.style.display = 'none';
        setTimeout(function () {
          layerOne.style.transition = '0.5s linear';
          layerTwo.style.transition = '0.5s linear';
        }, 500);
      }, 500);
    }
  });
}, portfolioProjectOptions);
projectImageFourObserver.observe(projectFourCover);

// Animation to display portfolio header text
var portfolioTextOption = {
  rootMargin: "0px",
  threshold: 0.6
};
var portfolioHeader = document.querySelectorAll('.sectionFourText > h4');
var portfolioHeaderTextObserver = new IntersectionObserver(function (entries, portfolioTextObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.textShadow = 'var(--section-title-text-shadow)';
      entry.target.style.transform = 'translateY(0px)';
      entry.target.style.color = 'var(--black)';
      entry.target.style.opacity = '1';
    }
  });
}, portfolioTextOption);
portfolioHeader.forEach(function (header) {
  portfolioHeaderTextObserver.observe(header);
});

// Animation to display portfolio paragraph text
var portfolioParagraph = document.querySelectorAll('.sectionFourText > p');
var portfolioParTextObserver = new IntersectionObserver(function (entries, portfolioTextObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.style.textShadow = 'var(--par-text-shadow)';
        entry.target.style.transform = 'translateY(0px)';
        entry.target.style.color = 'var(--section-par-text-color)';
        entry.target.style.opacity = '1';
      }, 200);
    }
  });
}, portfolioTextOption);
portfolioParagraph.forEach(function (paragraph) {
  portfolioParTextObserver.observe(paragraph);
});

// Animation to display portfolio button
var portfolioButton = document.querySelectorAll('.sectionFourText > a > button');
var portfolioButtonObserver = new IntersectionObserver(function (entries, portfolioTextObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.style.transform = 'translateY(0px)';
        entry.target.style.opacity = '1';
      }, 400);
    }
  });
}, portfolioTextOption);
portfolioButton.forEach(function (button) {
  portfolioButtonObserver.observe(button);
});

// Service Steps
var steps = document.querySelectorAll('.step');
steps.forEach(function (container) {
  container.addEventListener('click', function (event) {
    if (!event.target.classList.contains('active')) {
      // removed class for all steps
      steps.forEach(function (step) {
        step.classList.remove('active');
      });
      // add active class for selected step
      container.classList.add('active');
    }
  });
});

// Contact me text animation display
// About Me section text display animation
var contactUsHeading = document.querySelector('.contactUsHeading');
var contactUsTextObserver = new IntersectionObserver(function (entries, textIntersectionObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var aboutUsHeading = document.querySelector('.contactUsHeading');
      aboutUsHeading.style.color = 'var(--black)';
      aboutUsHeading.style.textShadow = 'var(--section-title-text-shadow)';
      aboutUsHeading.style.transform = 'translateY(0px)';
      aboutUsHeading.style.opacity = '1';
      var contactUsPar = document.querySelector('.contactUsPar');
      setTimeout(function () {
        contactUsPar.style.color = 'var(--section-par-text-color)';
        contactUsPar.style.transform = 'translateY(0px)';
        contactUsPar.style.opacity = '1';
      }, 300);
    }
  });
}, intersectionObserverOptions);
contactUsTextObserver.observe(contactUsHeading);

// Email.JS script
(function () {
  emailjs.init('sCcEdrZXGZFl9sLyp');
})();
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var form = document.getElementById('contactForm');
  var from_name = document.querySelector('#user_name');
  var business_name = document.querySelector('#business_name');
  var user_email = document.querySelector('#user_email');
  var message = document.querySelector('#message');
  try {
    emailjs.sendForm('service_m6rjjr9', 'template_d9xdnm9', form).then(function () {
      console.log('Email sent!');
    }, function (error) {
      console.log('Error:', error);
    });
  } catch (error) {
    console.log("Did not send form: ".concat(error));
  }
});

// Scroll to top of window
var scrollToTopButton = document.querySelectorAll('.scrollToTop');
scrollToTopButton.forEach(function (button) {
  button.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65458" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map