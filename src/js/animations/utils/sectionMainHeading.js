import { TweenLite, Power2 } from 'gsap';

const sectionMainHeading = item => {
  const tween = TweenLite.from(item, 0.75, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeOut
  });

  return tween;
};

export default sectionMainHeading;
