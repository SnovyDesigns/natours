import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power2 } from 'gsap';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  footer = document.querySelector('.footer'),
  footerLogo = document.querySelector('.footer__logo-box'),
  footerNav = document.querySelector('.footer__navigation'),
  footerCopy = document.querySelector('.footer__copyright');

// ------------------------------------------

const footerTL = () => {
  const tl = new TimelineMax();

  tl.add('start')
    .from(footerLogo, 0.75, {
      scale: 0,
      ease: Power2.easeOut
    })
    .from([footerNav, footerCopy], 0.75, {
      y: 40,
      autoAlpha: 0,
      ease: Power2.easeOut
    });

  return tl;
};

// ------------------------------------------

const footerScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: footer,
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(footerTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default footerScene;
