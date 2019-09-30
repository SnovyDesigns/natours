import { TimelineMax, Power4 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// ------------------------------------------

// eslint-disable-next-line no-unused-vars
const plugins = [ScrollToPlugin];
// ------------------------------------------

const navCheckbox = document.querySelector('#navi-toggle'),
  navLinks = document.querySelectorAll('.navigation__link');

// ------------------------------------------

const navTL = href => {
  const tl = new TimelineMax();
  tl.set(navCheckbox, { checked: false }).to(window, 1.5, {
    scrollTo: href,
    ease: Power4.easeOut
  });
  return tl;
};

// ------------------------------------------

for (const link of navLinks) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    navTL(href);
  });
}
