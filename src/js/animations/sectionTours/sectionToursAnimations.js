import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power2 } from 'gsap';
import sectionMainHeading from '../utils/sectionMainHeading';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  toursMainHeading = document.querySelector('.section-tours__main-heading'),
  card = document.querySelectorAll('.card'),
  cardSide = document.querySelectorAll('.card__side'),
  cardSideFront = document.querySelectorAll('.card__side--front');

// ------------------------------------------

const toursTL = () => {
  const tl = new TimelineMax();
  tl.set(cardSide, { transitionDuration: 0 })
    .add(sectionMainHeading(toursMainHeading))
    .staggerFrom(
      card,
      1,
      { y: 40, autoAlpha: 0, ease: Power2.easeOut, clearProps: 'all' },
      0.25,
      0.65
    )
    .staggerFrom(
      cardSideFront,
      1,
      { rotationY: '180deg', ease: Power2.easeOut, clearProps: 'rotationY' },
      0.25,
      0.65
    )
    .set(cardSide, { clearProps: 'all' });

  return tl;
};

// ------------------------------------------

const sectionToursScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: toursMainHeading,
    triggerHook: 0.55,
    reverse: false
  })
    .setTween(toursTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default sectionToursScene;
