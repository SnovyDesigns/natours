import headerTL from './header/headerAnimations';
import sectionAboutScene from './sectionAbout/sectionAboutAnimations';
import sectionFeaturesScene from './sectionFeatures/sectionFeaturesAnimations';
import sectionToursScene from './sectionTours/sectionToursAnimations';
import {
  sectionStoriesScene,
  storyScenes
} from './sectionStories/sectionStoriesAnimations';
import sectionBookScene from './sectionBook/sectionBookAnimations';
import footerScene from './footer/footerAnimations';
import './navigation/navigationAnimations';

// ------------------------------------------

window.onload = () => {
  headerTL();
  sectionAboutScene();
  sectionFeaturesScene();
  sectionToursScene();
  sectionStoriesScene();
  storyScenes();
  sectionBookScene();
  footerScene();
};
