import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

const animateScrolling = (target) => {
    gsap.to(window, {
        duration: 1,
        scrollTo: target,
    }).play();
};

export { animateScrolling };
