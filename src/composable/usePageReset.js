import { gsap } from 'gsap/all';

export const usePageReset = () => {
  const scrollReset = () => {
    const unloadListener = addEventListener('beforeunload', () => {
      gsap.set(document.body, { opacity: 0, duration: 0 });
      window.scrollTo(0, 0);
      removeEventListener('beforeunload', unloadListener);
    });
  };
  return { scrollReset };
};
