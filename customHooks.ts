import { useState } from "react";
import { useEffect } from "react";

export function useNavbarObserver() {
  const [windowWidth, setWindowWidth] = useState(0);
  function navBarResizeObs(entries: ResizeObserverEntry[]) {
    let width = 0;
    for (const entry of entries) {
      if (entry.borderBoxSize) {
        const borderBoxSize = Array.isArray(entry.borderBoxSize)
          ? entry.borderBoxSize[0]?.inlineSize
          : entry.borderBoxSize;
        width = (borderBoxSize as number) || 0;
      }
    }
    setWindowWidth(width);
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(navBarResizeObs);
    const navbar = document.getElementById("navHeader");
    if (navbar) {
      resizeObserver.observe(navbar);
    }
    return () => {
      if (navbar) {
        resizeObserver.disconnect();
      }
    };
  }, []);
  return windowWidth;
}
