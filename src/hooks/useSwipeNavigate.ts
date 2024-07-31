"use client";

import { useState } from "react";
import { useSwipeable, LEFT, RIGHT, SwipeEventData } from "react-swipeable";

import { calculatePosition } from "@/lib/swipeNavigate";
import useMediaQuery from "@/hooks/useMediaQuery";

export type Direction = "left" | "right";

function useSwipeNavigate(direction: Direction = "left") {
  const [position, setPosition] = useState(100);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const isLeftDirection = direction === "left";

  const handleSwiping = (e: SwipeEventData) => {
    if (isDesktop) return;

    const isSwipingRight = e.dir === RIGHT;
    const isSwipingLeft = e.dir === LEFT;

    if (isLeftDirection) {
      if (isSwipingRight && position < 100) {
        setPosition(calculatePosition(e.absX));
      } else if (isSwipingLeft && position !== 0) {
        setPosition(calculatePosition(e.absX, true));
      }
    } else {
      if (isSwipingLeft && position < 100) {
        setPosition(calculatePosition(e.absX));
      } else if (isSwipingRight && position !== 0) {
        setPosition(calculatePosition(e.absX, true));
      }
    }
  };

  const handleSwiped = (e: SwipeEventData) => {
    if (isDesktop) return;

    const isSwipedRight = e.dir === RIGHT;
    const isSwipedLeft = e.dir === LEFT;
    const velocity = e.vxvy[0];

    const shouldSetToEnd = position >= 50 || velocity >= 0.5;
    const shouldSetToStart = position <= 50 || velocity <= -0.5;

    if (isLeftDirection) {
      if (isSwipedRight) {
        setPosition(shouldSetToEnd ? 100 : 0);
      } else if (isSwipedLeft) {
        setPosition(shouldSetToStart ? 0 : 100);
      }
    } else {
      if (isSwipedLeft) {
        setPosition(shouldSetToEnd ? 100 : 0);
      } else if (isSwipedRight) {
        setPosition(shouldSetToStart ? 0 : 100);
      }
    }
  };

  const { ref } = useSwipeable({
    onSwiping: handleSwiping,
    onSwiped: handleSwiped,
    preventScrollOnSwipe: true,
    delta: { up: 9999, down: 9999, left: 2, right: 2 },
  });

  return {
    ref,
    position,
    style: {
      [direction]: `${position}%`,
    },
  };
}

export default useSwipeNavigate;
