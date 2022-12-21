import { useState, useEffect } from 'react';

const UP = 'up';
const DOWN = 'down';

export type ScrollDirections = typeof DOWN | typeof UP;

export interface UseScroll {
  scrollY: number;
  scrollX: number;
  scrollDirection: ScrollDirections;
}

export function useScroll(): UseScroll {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirections>(DOWN);

  const elementsWithId = document.querySelectorAll('section[id]');

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());

    let isAnchorUsed = false;

    elementsWithId.forEach((element) => {
      const { y } = element.getBoundingClientRect();
      if (y === 0) isAnchorUsed = true;
    });

    if (isAnchorUsed) return;

    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? DOWN : UP);
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}

export default useScroll;
