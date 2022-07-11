import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
    const landingBlock = useRef(null);
    const aboutMeBlock = useRef(null);
    const portfolioBlock = useRef(null);
    const contactBlock = useRef(null);

    useEffect(() => {
        [landingBlock, aboutMeBlock, portfolioBlock, contactBlock].forEach(
            (block) => {
                if (!block.current) return;

                gsap.timeline({
                    scrollTrigger: {
                        trigger: block.current,
                        start: 'top 70%',
                        end: 'bottom 30%',
                        // scrub: 0.5,
                        // snap: [0, 0.5, 1],
                        toggleActions: 'restart reverse restart reverse',
                    },
                }).from(block.current.querySelectorAll('*'), {
                    opacity: 0,
                    duration: 1.5,
                });
            }
        );

        const progressBars =
            aboutMeBlock.current.querySelectorAll('.progress-bar');
        const firstProgressBar = progressBars[0];
        const lastProgressBar = progressBars[progressBars.length - 1];
        gsap.from(progressBars, {
            width: 0,
            duration: 2,
            scrollTrigger: {
                trigger: firstProgressBar,
                start: 'top 90%',
                endTrigger: lastProgressBar,
                end: 'bottom 10%',
                toggleActions: 'restart reverse restart reverse',
            },
        });
    }, []);
    return [landingBlock, aboutMeBlock, portfolioBlock, contactBlock];
};

export { useAnimation };
