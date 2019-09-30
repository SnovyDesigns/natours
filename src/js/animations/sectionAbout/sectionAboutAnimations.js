import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power2, Power4 } from 'gsap';
import sectionMainHeading from '../utils/sectionMainHeading';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  aboutMainHeading = document.querySelector('.section-about__main-heading'),
  aboutSubHeadings = document.querySelectorAll('.section-about__sub-heading'),
  aboutParagraphs = document.querySelectorAll('.section-about__paragraph'),
  aboutLink = document.querySelector('.section-about__link'),
  compositionPhotos = document.querySelectorAll('.composition__photo');
// ------------------------------------------

const aboutTL = () => {
  const tl = new TimelineMax();

  tl.add('start')
    .add(sectionMainHeading(aboutMainHeading))
    .staggerFrom(
      aboutSubHeadings,
      0.75,
      { y: 40, autoAlpha: 0, ease: Power4.easeOut },
      0.25,
      'start+=0.65'
    )
    .staggerFrom(
      aboutParagraphs,
      0.75,
      { y: 40, autoAlpha: 0, ease: Power4.easeOut },
      0.25,
      'start+=0.85'
    )
    .from(
      aboutLink,
      0.75,
      { x: 60, autoAlpha: 0, ease: Power4.easeOut },
      'start+=1'
    )
    .staggerFrom(
      compositionPhotos,
      1,
      { autoAlpha: 0, ease: Power2.easeOut },
      0.25,
      'start+=0.75'
    );

  return tl;
};

// ------------------------------------------

const sectionAboutScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: aboutMainHeading,
    triggerHook: 0.55,
    reverse: false
  })
    .setTween(aboutTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default sectionAboutScene;
