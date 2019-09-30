import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power1 } from 'gsap';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  sectionFeatures = document.querySelector('#section-features'),
  featureBoxes = document.querySelectorAll('.feature-box');

// ------------------------------------------

const featureBoxTL = () => {
  const tl = new TimelineMax();

  tl.set(featureBoxes, { transitionDuration: 0 }).staggerFromTo(
    featureBoxes,
    0.75,
    { y: 40, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, ease: Power1.easeOut, clearProps: 'all' },
    0.25
  );

  return tl;
};

// ------------------------------------------

const sectionFeaturesScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: sectionFeatures,
    triggerHook: 0.35,
    reverse: false
  })
    .setTween(featureBoxTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default sectionFeaturesScene;
