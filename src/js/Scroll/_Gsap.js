import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// fade up
const fadeUpContents = gsap.utils.toArray(".gsap-fadeUp");
fadeUpContents.forEach((content) => {
  gsap.from(content, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      // markers: true,
    },
  });
});
