import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax, Power2 } from 'gsap';
import sectionMainHeading from '../utils/sectionMainHeading';

// ------------------------------------------

const controller = new ScrollMagic.Controller(),
  storiesMainHeading = document.querySelector('.section-stories__main-heading'),
  stories = document.querySelectorAll('.story');

// ------------------------------------------

const storiesSectionTL = () => {
  const tl = new TimelineMax();
  tl.add(sectionMainHeading(storiesMainHeading));

  return tl;
};

// ------------------------------------------

const storyTL = item => {
  const tl = new TimelineMax();
  tl.from(item, 1, {
    x: -60,
    autoAlpha: 0,
    ease: Power2.easeOut,
    clearProps: 'all'
  });

  return tl;
};

// ------------------------------------------

const sectionStoriesScene = () => {
  let scene = new ScrollMagic.Scene({
    triggerElement: storiesMainHeading,
    triggerHook: 0.55,
    reverse: false
  })
    .setTween(storiesSectionTL())
    .addTo(controller);

  return scene;
};

// ------------------------------------------

const storyScenes = () => {
  for (const story of stories) {
    // eslint-disable-next-line no-unused-vars
    let scene = new ScrollMagic.Scene({
      triggerElement: story,
      triggerHook: 0.55,
      reverse: true
    })
      .setTween(storyTL(story))
      .addTo(controller);
  }
};

// ------------------------------------------

export { sectionStoriesScene, storyScenes };
