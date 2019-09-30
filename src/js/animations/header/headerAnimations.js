import { TimelineMax, Power1, Power2, Back } from 'gsap';

// ------------------------------------------
const header = document.querySelector('.header'),
  headerLogo = document.querySelector('.header__logo'),
  headerMainheading = document.querySelector('.header__main-heading'),
  headerSubheading = document.querySelector('.header__sub-heading'),
  headerButton = document.querySelector('.header__btn'),
  navigationButton = document.querySelector('.navigation__button');

// ------------------------------------------

const headerTL = () => {
  const tl = new TimelineMax();

  tl.add('start')
    .to(header, 2.5, { backgroundSize: '100% 100%', ease: Power2.easeOut })
    .staggerTo(
      [headerLogo, navigationButton],
      0.75,
      { scale: 1, ease: Power1.easeOut },
      0.25,
      'start+=0.25'
    )
    .staggerFrom(
      [headerMainheading, headerSubheading],
      0.75,
      { cycle: { x: [-60, 60] }, autoAlpha: 0, ease: Back.easeOut.config(1.4) },
      0.35,
      'start+=0.75'
    )
    .staggerTo(
      [headerMainheading, headerSubheading],
      0.75,
      { autoAlpha: 1, ease: Back.easeOut.config(1.4) },
      0.35,
      'start+=0.75'
    )
    .set(headerButton, { transitionDuration: 0 })
    .from(
      headerButton,
      0.5,
      {
        y: 40,
        ease: Power2.easeOut,
        clearProps: 'y'
      },
      'start+=2'
    )
    .to(
      headerButton,
      0.5,
      {
        autoAlpha: 1,
        ease: Power2.easeOut
      },
      'start+=2'
    )
    .set(headerButton, { transitionDuration: 0.25 });

  return tl;
};

// ------------------------------------------

export default headerTL;
