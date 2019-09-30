import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power2 } from 'gsap';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  sectionBook = document.querySelector('.section-book'),
  book = document.querySelectorAll('.book');

// ------------------------------------------

const bookTL = () => {
  const tl = new TimelineMax();

  tl.from(book, 0.75, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeOut
  });

  return tl;
};

// ------------------------------------------

const sectionBookScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: sectionBook,
    triggerHook: 0.55,
    reverse: false
  })
    .setTween(bookTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

export default sectionBookScene;
