import { useTransition, animated } from "react-spring";

export const getYear = (date: string): number => {
  return date ? parseInt(date.substring(0, 4)) : 0;
};

export const moveAndFadeInTransition = (x: string, y: string): any =>
  useTransition(true, null, {
    from: { opacity: 0, transform: `translate3d(${x}, ${y}, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(${x}, ${y}, 0)` },
  });
