export const leftToRight = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.3, 0.5, 0.6, 1], type: "tween" },
};

export const rightToLeft = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.3, 0.5, 0.6, 1], type: "tween" },
};

export const rectList = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0, // Delay children animations
      staggerChildren: 0.8, // Stagger the animation between children
    },
  },
};

export const rectItem = {
  initial: {
    opacity: 0,
    y: -75, // Move each item up initially to hide them
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const downToUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.3, 0.5, 0.6, 1],
    type: "tween",
  },
};

export const upToDown = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.3, 0.5, 0.6, 1],
    type: "tween",
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.3, 0.5, 0.6, 1],
    type: "tween",
  },
};
