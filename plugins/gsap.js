import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);

  return { provide: { gsap, ScrollTrigger } };
});
