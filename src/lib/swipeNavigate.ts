export function calculateSwipePercent(distance: number, axis: "X" | "Y" = "X") {
  const viewportDimension =
    axis === "X" ? window.innerWidth : window.innerHeight;
  const percent = (distance / viewportDimension) * 100;
  return percent;
}

export function calculatePosition (absX: number, reverse = false) {
  const inPercent = calculateSwipePercent(absX);
  return reverse ? 100 - inPercent : inPercent;
};
